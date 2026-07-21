import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { SITE } from "@/lib/site";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Orange County Criminal Defense Lawyer | Farris Law Firm",
    template: "%s",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Attorney",
      "@id": `${SITE.url}/#organization`,
      name: "Farris Law Firm",
      url: SITE.url,
      telephone: "+1-818-861-0861",
      priceRange: "Free consultation, payment plans available",
      areaServed: [
        { "@type": "AdministrativeArea", name: "Orange County, CA" },
        { "@type": "AdministrativeArea", name: "Los Angeles County, CA" },
        { "@type": "Place", name: "San Fernando Valley, CA" },
      ],
      address: SITE.offices.map((o) => ({
        "@type": "PostalAddress",
        streetAddress: o.street,
        addressLocality: o.city,
        addressRegion: o.state,
        postalCode: o.zip,
        addressCountry: "US",
      })),
      hasMap: SITE.offices.map((o) => o.mapsUrl),
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      founder: { "@id": `${SITE.url}/#charles-farris` },
    },
    {
      "@type": "Person",
      "@id": `${SITE.url}/#charles-farris`,
      name: "Charles P. Farris",
      jobTitle: "Criminal Defense Attorney",
      worksFor: { "@id": `${SITE.url}/#organization` },
      url: `${SITE.url}/about-us/`,
      image: `${SITE.url}/images/charles-avatar.webp`,
      identifier: {
        "@type": "PropertyValue",
        propertyID: "California State Bar Number",
        value: "324613",
      },
      sameAs: [
        "https://apps.calbar.ca.gov/attorney/Licensee/Detail/324613",
        "https://www.avvo.com/attorneys/91502-ca-charles-farris-5052594.html",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
