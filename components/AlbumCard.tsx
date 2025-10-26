import { Song } from "@/lib/dummy"
import Image from 'next/image'

interface AlbumCardProps {
  song: Song;
  width?: number;
  height?: number;
}

export default function AlbumCard({
  song,
  width = 40,
  height = 40,
}: AlbumCardProps) {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={song.cover}
        alt={song.title}
        width={width}
        height={height}
        className="object-cover h-auto w-auto"
        loading="eager"
        priority
      />
      <div>
        <p className="text-foreground text-sm font-semibold">{song.title}</p>
        <p className="text-foreground/65 text-sm">{song.artist}</p>
      </div>
    </div>
  )
}
