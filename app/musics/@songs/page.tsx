import AlbumCard from "@/components/AlbumCard";
import { allSongs } from "@/lib/dummy";
import { EllipsisVertical, Heart } from "lucide-react";
import Link from "next/link";

export default function SongsPage() {
  return (
    <div
      className="mx-auto px-6"
    >
      <h2 className="text-2xl text-foreground font-bold my-8">
        Songs Collections
      </h2>

      <ul>
        {
          allSongs.map(song =>
            <Link
              href={`/musics/${song.id}`}
              key={song.id}
            >
              <li
                className="hover:bg-secondary px-4 py-2 flex items-center justify-between
                rounded-md cursor-pointer hoverEffect mb-4"
              >
                <AlbumCard
                  song={song}
                  width={60}
                  height={60}
                />
                <div className="flex items-center gap-6">
                  <button
                    className="hover:text-music-pink"
                  >
                    <Heart size={18} />
                  </button>
                  <button
                    className="hover:text-music-pink"
                  >
                    <EllipsisVertical size={18} />
                  </button>
                </div>
              </li>
            </Link>
          )
        }
      </ul>
    </div>
  )
}

