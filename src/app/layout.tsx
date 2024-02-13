import "~/styles/globals.css";

import { Open_Sans } from "next/font/google";
import Providers from "./providers";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "The Dark Mode Wall Of Shame",
  description:
    "A list of vendors that treat dark mode as a luxury feature, not a core security requirement.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${openSans.variable} flex h-full flex-col`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
