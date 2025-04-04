import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { branding } from "@/data/branding";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: branding.name,
  description: branding.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <img src={branding.logo} alt={branding.name} className="h-10 w-auto mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-indigo-700">{branding.name}</h1>
                <p className="text-sm text-gray-500">{branding.tagline}</p>
              </div>
            </div>
            <nav className="flex space-x-4">
              <a href="/" className="text-gray-700 hover:text-indigo-700 font-medium">Home</a>
              <a href="/destinations" className="text-gray-700 hover:text-indigo-700 font-medium">Destinations</a>
              <a href="/about" className="text-gray-700 hover:text-indigo-700 font-medium">About</a>
              <a href="/contact" className="text-gray-700 hover:text-indigo-700 font-medium">Contact</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-100 mt-12">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-lg font-bold text-indigo-700 mb-4">{branding.name}</h2>
                <p className="text-gray-600">{branding.description}</p>
              </div>
              <div>
                <h2 className="text-lg font-bold text-indigo-700 mb-4">Quick Links</h2>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-600 hover:text-indigo-700">Home</a></li>
                  <li><a href="/destinations" className="text-gray-600 hover:text-indigo-700">Destinations</a></li>
                  <li><a href="/about" className="text-gray-600 hover:text-indigo-700">About</a></li>
                  <li><a href="/contact" className="text-gray-600 hover:text-indigo-700">Contact</a></li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-bold text-indigo-700 mb-4">Contact Us</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>Email: info@wanderlustexplorer.com</li>
                  <li>Phone: +1 (555) 123-4567</li>
                  <li>Address: 123 Travel Street, Adventure City, AC 12345</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
              <p>&copy; {new Date().getFullYear()} {branding.name}. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
