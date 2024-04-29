// Main Page를 감싸는 layout head tag에 넣는 것들을 여기다 넣음
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "FinPal",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko-kr">
        <body className={inter.className}>
        <div className="navbar">
            <Link href="/">홈</Link>
            <Link href="/list">List</Link>
        </div>
        {children}
        </body>
        </html>
    );
}