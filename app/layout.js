import { Space_Grotesk } from "next/font/google";
import "@/styles/global.scss"
import Header from "@/components/header";

const ubuntu = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "The CodeBase Case Study",
  description: "A next.js project consisting of a listing and an add page",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;

