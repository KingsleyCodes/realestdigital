// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Realest Digital Limited | Digital Marketing Agency In Abuja Nigeria",
  description: "Performance marketing and modern web engineering.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-brand-dark text-white antialiased">
        {children}
      </body>
    </html>
  );
}