import "./globals.css";

export const metadata = {
  title: "Meema",
  description: "Meet Mary Shea Watson",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
