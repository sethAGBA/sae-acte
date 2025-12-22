import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const epoch = localFont({
  src: "../public/fonts/Epoch-BF6881cf42e6637.otf",
  variable: "--font-epoch",
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
    default: "SAE ACTE | Appui en competences et transformation",
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
    title: "SAE ACTE | Appui en competences et transformation",
    description:
      "Formations metiers, insertion professionnelle, entrepreneuriat et accompagnement pour talents et entreprises.",
    siteName: "SAE ACTE"
  },
  twitter: {
    card: "summary_large_image",
    title: "SAE ACTE | Appui en competences et transformation",
    description:
      "Formations metiers, insertion professionnelle, entrepreneuriat et accompagnement pour talents et entreprises."
  },
  alternates: {
    canonical: "https://sae-acte.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${epoch.variable} ${gilroy.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
