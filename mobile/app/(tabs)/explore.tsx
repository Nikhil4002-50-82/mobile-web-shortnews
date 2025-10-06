import { View, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const explore = () => {
  return (
    <View className="h-screen flex items-center justify-center">
      <MaterialIcons name="manage-accounts" color="black" size={54} />
      <Text>Profiles</Text>
    </View>
  );
};

export default explore;
