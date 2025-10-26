import AlbumCard from "@/components/AlbumCard";
import Nav from "@/components/Nav";
import { favSongs } from "@/lib/dummy";

export default function SidebarDefault() {
  return (
    <aside
      className="w-72 bg-card text-foreground p-4 flex flex-col justify-between
      border-r border-border overflow-y-auto"
    >
      <section>
        <h2 className="text-[16px] font-bold text-foreground">
          Your Library
        </h2>

        <Nav />
      </section>

      <section className="flex-1">
        <h2 className="mt-8 mb-4 text-[16px] font-bold text-foreground">
          Favourite
        </h2>
        <ul className="space-y-3">
          {
            favSongs.map(song =>
              <li
                key={song.id}
                className="hover:bg-secondary p-2 flex items-center justify-between
                  rounded-md cursor-pointer hoverEffect"
              >
                <AlbumCard
                  song={song}
                />
              </li>
            )
          }
        </ul>
      </section>
    </aside>
  )
}
