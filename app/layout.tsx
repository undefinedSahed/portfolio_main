import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/sidebar";
import SocialLinks from "./_components/social";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        <SocialLinks />
        {children}
      </body>
    </html>
  );
}
