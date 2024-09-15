import './globals.css';
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Header from '../components/Header';
import Footer from "../components/Footer"; // Import your Header component

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Aabshar",
    description: "Aabshar",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            {/* Add Bootstrap Icons CSS */}
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.5.0/font/bootstrap-icons.min.css"
            />
        </head>
        <body className={inter.className}>
        {/* Add Header component here so it appears on all pages */}
        <Header/>
        {/* Render page content */}
        <main>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
