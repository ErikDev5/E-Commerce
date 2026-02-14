import type { Metadata } from "next";
import { SellerSignupProvider } from "@/contexts/SellerSignupContext";
import "@/ui/globals.scss";

export const metadata: Metadata = {
  title: "Buy Quality Products Online | EShoping Store",
  description:
    "Shop quality products at EShoping. Browse categories, add items to your cart, and enjoy secure online checkout with a fast, responsive shopping experience.",
  keywords: [
    "EShoping",
    "e-commerce store",
    "online shopping",
    "buy products online",
    "secure checkout"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <SellerSignupProvider>{children}</SellerSignupProvider>
      </body>
    </html>
  );
}
