import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'HexaKore AI Agency - Websites, Chatbots, Automation',
  description: 'HexaKore provides AI solutions for businesses: custom websites, intelligent chatbots, AI agents, automations, SEO, and social media management. Transform your digital presence.',
  keywords: ["AI agency, HexaKore, AI solutions, custom websites, chatbots, AI agents, business automation, SEO, social media management, digital transformation"],
  openGraph: {
    "title": "HexaKore AI Agency - Websites, Chatbots, Automation",
    "description": "HexaKore provides AI solutions for businesses: custom websites, intelligent chatbots, AI agents, automations, SEO, and social media management. Transform your digital presence.",
    "url": "https://HexaKore.com",
    "siteName": "HexaKore",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/luxurious-modern-office-space-with-important-reports-laptop-empty-desk-showcasing-important-data_482257-133861.jpg",
        "alt": "Futuristic AI office environment"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "HexaKore AI Agency - Websites, Chatbots, Automation",
    "description": "HexaKore provides AI solutions for businesses: custom websites, intelligent chatbots, AI agents, automations, SEO, and social media management. Transform your digital presence.",
    "images": [
      "http://img.b2bpic.net/free-photo/luxurious-modern-office-space-with-important-reports-laptop-empty-desk-showcasing-important-data_482257-133861.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
