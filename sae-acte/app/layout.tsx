import type { Metadata } from "next";
import localFont from "next/font/local";
import NavBar from '@/components/acte/NavBar';
import Footer from '@/components/acte/Footer';
import "./globals.css";

const nexa = localFont({
  src: [
    {
      path: "../public/fonts/nexa 2/Nexa-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/nexa 2/Nexa-Heavy.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-nexa",
  display: "swap",
});

const gilroy = localFont({
  src: "../public/fonts/gilroy-medium.ttf",
  variable: "--font-gilroy",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sae-acte.com"),
  title: {
    default: "SAE ACTE | Appui en Compétences et en Transformation pour l'Employabilité des Jeunes et Femmes",
    template: "%s | SAE ACTE"
  },
  description:
    "SAE ACTE accompagne les talents et entrepreneurs avec des formations metiers, du conseil et des programmes d'accompagnement.",
  keywords: [
    "SAE ACTE",
    "formation",
    "insertion professionnelle",
    "entrepreneuriat",
    "accompagnement",
    "Togo"
  ],
  authors: [{ name: "SAE ACTE" }],
  openGraph: {
    type: "website",
    url: "https://sae-acte.com",
    title: "SAE ACTE | Appui en Compétences et en Transformation pour l'Employabilité des Jeunes et Femmes",
    description:
      "Formations metiers, insertion professionnelle, entrepreneuriat et accompagnement pour talents et entreprises.",
    siteName: "SAE ACTE",
    images: [
      {
        url: "/logo-acte.png",
        width: 800,
        height: 600,
        alt: "SAE ACTE Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAE ACTE | Appui en Compétences et en Transformation pour l'Employabilité des Jeunes et Femmes",
    description:
      "Formations metiers, insertion professionnelle, entrepreneuriat et accompagnement pour talents et entreprises.",
    images: ["/logo-acte.png"],
  },
  alternates: {
    canonical: "https://sae-acte.com"
  },
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/icon.png" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${nexa.variable} ${gilroy.variable} antialiased`}>
        <NavBar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
