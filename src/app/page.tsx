import Image from "next/image";
import { Button } from "pixel-retroui";
import GetRecommendations from "./GetRecommendations";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] px-4 md:px-8">
      <header className="py-6 flex items-center justify-between max-w-6xl mx-auto w-full">
        <div className="flex items-center space-x-3">
          <Image src="/sparkle.png" width={35} height={35} alt="sparkle" />
          <h1 className="text-xl font-normal">Game Recommendation AI</h1>
        </div>
        <Link href="/chat">
          <Button
            className="px-4 py-1"
            bg="white"
            textColor="black"
            borderColor="black"
            shadow="#d0d0d0"
          >
            Chat
          </Button>
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center w-full py-8">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-medium mb-1">
            Discover Your Next Favorite Game
          </h2>
          <p className="text-gray-600 text-sm">
            Ask questions about any game or describe what you&apos;re looking
            for.
          </p>
        </div>

        <GetRecommendations />

        <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto w-full">
          <div className="border border-gray-200 rounded-lg text-center py-3">
            <p className="text-sm font-medium">Personal</p>
            <p className="text-xs text-gray-500">Tailored to you</p>
          </div>
          <div className="border border-gray-200 rounded-lg text-center py-3">
            <p className="text-sm font-medium">Fast</p>
            <p className="text-xs text-gray-500">Instant results</p>
          </div>
          <div className="border border-gray-200 rounded-lg text-center py-3">
            <p className="text-sm font-medium">Accurate</p>
            <p className="text-xs text-gray-500">Based on your taste</p>
          </div>
        </div>
      </main>

      <footer className="py-3 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Game Recommendation AI · All rights
        reserved
      </footer>
    </div>
  );
}
