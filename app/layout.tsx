import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "makcimerrr.com",
    template: "%s | Portfolio",
  },
  description: "Aspiring FullStack Developer | Zone01",
  openGraph: {
    title: "Makcimerrr's Portfolio",
    description:
      "Aspiring FullStack Developer | Zone01",
    url: "https://makcimerrr.com",
    siteName: "makcimerrr.com",
    images: [
      {
        url: "https://cdn.discordapp.com/attachments/746084850062196778/1187134556936077363/clickwallpapers-DemonSlayerKimetsunoYaiba-anime-4k-img5.jpg?ex=662035b6&is=660dc0b6&hm=51c39ff554f5bce2cf4922fe4b2ec7617bcd736eade40d190cbac9407141d8db&",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Vayne",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
