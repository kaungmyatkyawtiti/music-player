import { ModeToggle } from "@/components/ModeToggle";
import Profile from "@/components/Profile";
import { SearchBar } from "@/components/SearchBar";
import { Bell, House } from "lucide-react";
import Link from "next/link";

export default function TopbarPage() {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-card/30 border-b border-border backdrop-blur-lg p-3">
      <h2 className="text-xl font-bold text-music-pink">
        Nott Music
      </h2>
      <div className="flex items-center gap-3">
        <Link
          href={"/musics"}
        >
          <button
            className="rounded-full p-2 hover:bg-input"
          >
            <House size={20} />
          </button>
        </Link>
        <SearchBar />
      </div>
      <div className="flex items-center gap-6">
        <Bell size={24} />
        <ModeToggle />
        <Profile />
      </div>
    </div>
  )
}
