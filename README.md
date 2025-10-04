# News Application

This project is a full-stack news application with both web and mobile interfaces. It fetches the latest news headlines from the [GNews API](https://gnews.io/api/v4/top-headlines?lang=en&max=10&apikey=YOUR_API_KEY) and displays them in a responsive and user-friendly manner.

## Tech Stack

### Web

- [Next.js](https://nextjs.org/) – React framework for server-side rendering and routing.
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for styling.
- React Icons for displaying icons.

### Mobile

- [React Native Expo](https://expo.dev/) – Framework for building native mobile apps.
- [NativeWind](https://www.nativewind.dev/) – Tailwind CSS for React Native.

### API

- [GNews API](https://gnews.io/) – Fetches top headlines and news articles.

## Installation

### Web

1. Navigate to the `client` directory.
2. Install dependencies:

```bash
npm install
# or
yarn install
````

3. Create a `.env.local` file in the root of the project and add your API key:

```env
API_SECRET_KEY=your_gnews_api_key
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

### Mobile

1. Navigate to the `mobile` directory.
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the Expo server:

```bash
npx expo start
```

4. Scan the QR code using Expo Go on your mobile device or run on simulator/emulator.

## Usage

* On the web, open your browser and navigate to `http://localhost:3000`.
* On mobile, open the app through Expo Go or emulator.

## License

This project is open-source and available under the MIT License.

