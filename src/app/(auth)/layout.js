import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "../globals.css";
import NavBar from "../(home)/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FoodExpress",
  description:
    "Your express food provider that delivers exactly what you need to cook right to Your door",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <NavBar></NavBar>
        <div className="bigpic-container">
          {children}
        </div>
      </body>
    </html>
  );
}
