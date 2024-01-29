import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-indigo-500 ${inter.className}`}
    >
     <h1 className="text-6xl font-bold">Under Development</h1>
    </main>
  );
}
