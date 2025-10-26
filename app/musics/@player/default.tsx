import AlbumCard from "@/components/AlbumCard";
import { Slider } from "@/components/ui/slider";
import { Song } from "@/lib/dummy";
import { CirclePlus, Fullscreen, ListMusic, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";

const currentSong: Song = {
  id: 1,
  cover: "/bad_guy.jpg",
  title: "StarBoy",
  artist: "The Weeknd"
}

export default function PlayerDefault() {
  return (
    <div className="bg-card border-t border-border py-4 px-8 flex items-center justify-between">
      <div className="flex items-center gap-7">
        {/* song info */}
        <AlbumCard
          song={currentSong}
        />

        <button className="hover:text-music-pink transition-colors">
          <CirclePlus size={22} />
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-5">
          <button className="hover:text-music-pink transition-colors">
            <SkipBack size={20} />
          </button>
          <button className="p-2 rounded-full bg-music-pink/90 text-white hover:bg-music-pink/80 transition-colors">
            <Play size={20} />
          </button>
          <button className="hover:text-music-pink transition-colors">
            <SkipForward size={20} />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <span
            className="text-sm text-foreground/70"
          >
            1:24
          </span>
          <Slider defaultValue={[33]} max={100} step={1} className="w-72" />
          <span
            className="text-sm text-foreground/70"
          >
            3:54
          </span>
        </div>
      </div>

      {/* extra actions */}
      <div className="flex gap-6">
        <button className="hover:text-music-pink transition-colors">
          <ListMusic size={22} />
        </button>

        <button className="hover:text-music-pink transition-colors">
          <Volume2 size={22} />
        </button>

        <button className="hover:text-music-pink transition-colors">
          <Fullscreen size={22} />
        </button>
      </div>
    </div>
  );
}
