import { HobbyTile } from "@/components/hobby-tile";
import { hobbies } from "@/data/hobby";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col justify-center items-center p-4">
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
