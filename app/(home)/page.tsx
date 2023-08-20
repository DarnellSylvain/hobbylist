import { HobbyTile } from "@/components/hobby-tile";
import { listenNowAlbums, madeForYouAlbums } from "./data/albums";
import { hobbies } from "@/data/hobby";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col justify-center items-center p-4">
      {/* <div className="flex items-center space-y-4 mx-4 w-100">
        {madeForYouAlbums.map((album) => (
          <AlbumArtwork
            key={album.name}
            album={album}
            className="w-full"
            aspectRatio="square"
            width={250}
            height={250}
          />
        ))}
      </div> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 min-w-[220px]">
        {hobbies.map((hobby) => (
          <HobbyTile
            key={hobby.name}
            hobby={hobby}
            className="w-full max-w-[250px]"
            aspectRatio="square"
            width={250}
            height={250}
          />
        ))}
      </div>
    </main>
  );
}
