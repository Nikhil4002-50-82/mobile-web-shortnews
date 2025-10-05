import "./globals.css";
import { SiApplenews } from "react-icons/si";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer className="h-auto md:h-[15em] w-full text-gray-100 bg-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 p-4 h-full">
            <div className="flex flex-col items-center justify-around text-xs gap-2 md:gap-0 text-center md:text-left">
              <h3>Contact Us</h3>
              <h3>Terms & Conditions</h3>
              <div className="flex items-center justify-center leading-tight">
                <SiApplenews className="text-red-600 text-2xl mr-2" />
                <div className="flex flex-col items-end p-0">
                  <h1 className="font-bold text-2xl text-gray-100 mb-0 leading-none">
                    shortnews
                  </h1>
                </div>
              </div>
              <h3>Privacy Policy</h3>
              <h3>Copy Right ©2025</h3>
            </div>
            <div className="flex items-center justify-center mt-6 md:mt-0">
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <h2 className="text-sm sm:text-md font-bold text-gray-100">
                  Download the easiest way to stay informed
                </h2>
                <button className="bg-green-600 text-white text-sm px-4 py-2 font-semibold rounded-sm cursor-pointer">
                  Download APK
                </button>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
