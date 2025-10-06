import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { Link } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CACHE_KEY = "cachedNews";
const CACHE_TIME = 24 * 60 * 60 * 1000;

const Index = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getNews = async () => {
    try {
      const cachedData = await AsyncStorage.getItem(CACHE_KEY);
      if (cachedData) {
        try {
          const parsed = JSON.parse(cachedData);
          const now = Date.now();
          if (now - parsed.timestamp < CACHE_TIME && parsed.articles?.length) {
            console.log("Using cached data:", parsed.articles);
            setData(parsed.articles);
            setLoading(false);
            return;
          }
        } catch (e) {
          console.error("Error parsing cached data:", e);
        }
      }

      console.log("Fetching new data");
      const result = await fetch(
        "https://gnews.io/api/v4/top-headlines?lang=en&max=10&apikey=009c474127910ee18f7ffda3ed6584cf"
      );
      const jsonData = await result.json();
      console.log("API response:", jsonData);
      if (!jsonData.articles || jsonData.articles.length === 0) {
        throw new Error("No articles found in API response");
      }
      await AsyncStorage.setItem(
        CACHE_KEY,
        JSON.stringify({
          timestamp: Date.now(),
          articles: jsonData.articles,
        })
      );
      setData(jsonData.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
      setError(
        "Failed to load news. Please check your connection or try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Starting news fetch...");
    getNews();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <ActivityIndicator size="large" color="#EF4444" />
        <Text className="text-gray-500 text-base mt-2">Loading news</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <Text className="text-red-500 text-base text-center px-4">{error}</Text>
      </View>
    );
  }

  if (!data.length) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <Text className="text-gray-500 text-base text-center px-4">
          No news articles available.
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View className="flex-1 bg-white rounded-2xl mx-4 my-2 shadow-md">
          <View className="flex-1">
            <Image
              source={{
                uri: item.image || "https://via.placeholder.com/150",
              }}
              className="h-[220px] rounded-t-2xl"
              resizeMode="cover"
            />
            <View className="px-4 py-2 -mt-8">
              <View className="flex-row items-center justify-start bg-white rounded-lg p-2 shadow-sm">
                <Ionicons name="newspaper" color="#EF4444" size={36} />
                <View className="ml-2 items-end">
                  <Text className="text-gray-900 text-[22px] font-bold leading-6">
                    shortnews
                  </Text>
                  <Text className="text-gray-500 text-[10px] leading-3">
                    stay informed
                  </Text>
                </View>
              </View>
            </View>
            <View className="px-4 py-3 flex-1">
              <Text className="text-gray-900 text-xl font-bold mb-2 leading-6">
                {item.title || "No Title"}
              </Text>
              <Text className="text-gray-600 text-base mb-2 leading-6">
                {item.description || "No Description"}
              </Text>
              <Text className="text-gray-600 text-sm mb-2 leading-5">
                {item.content || "No Content"}
              </Text>
              <Text className="text-gray-500 text-xs italic">
                {item.source?.name || "Unknown Source"}
              </Text>
            </View>
          </View>
          <View className="bg-red-500 p-4 rounded-b-2xl">
            <Text className="text-white text-sm font-semibold mb-2" numberOfLines={1}>
              {item.title || "No Title"}
            </Text>
            <Link href={item.url || "#"} className="text-white text-sm underline">
              Tap here to read more details
            </Link>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.url || Math.random().toString()}
      pagingEnabled
      decelerationRate="fast"
      snapToAlignment="center"
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-gray-100"
    />
  );
};

export default Index;