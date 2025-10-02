import ReactQueryProvider from "@/providers/ReactQueryProvider";
import "./globals.css";

export const metadata = {
  title: "해도 | haedo",
  description: "haedo company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
