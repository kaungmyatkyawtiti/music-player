import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  sidebar: ReactNode;
  topbar: ReactNode;
  songs: ReactNode;
  player: ReactNode;
}

export default function MusicLayout({
  children,
  sidebar,
  topbar,
  songs,
  player,
}: Props) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {topbar}

      {/* main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* sidebar */}
        {sidebar}

        {/* song collection */}
        <div className="flex-1 overflow-y-auto p-6">
          {songs}
        </div>

        {children}
      </div>

      {/* player */}
      <div className="sticky bottom-0 z-50">
        {player}
      </div>
    </div>
  );
}
