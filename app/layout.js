import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
