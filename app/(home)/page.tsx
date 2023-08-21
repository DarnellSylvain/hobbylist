import Image from "next/image";
import { HobbyTile } from "@/components/hobby-tile";
import { hobbies } from "@/data/hobby";

export default function Home() {
  return (
    <>
      <div className="p-0 flex flex-col items-center gap-4 text-center -mt-16">
        <div className="flex flex-col justify-end  h-96 w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1533991310801-340302384c22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="Hobby List"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        </div>

        <section className="absolute top-0 left-0 translate-y-1/2 w-full flex flex-col space-y-6 p-6 md:px-10 pb-8 pt-12 md:pb-12 ">
          <h1 className="text-5xl font-bold md:text-left">
            Welcome to Hobby List
          </h1>
          <p className="leading-normal sm:text-xl sm:leading-8 md:text-left">
            Join of a community of hobbyists and discover and share new hobbies!
          </p>
        </section>
      </div>
      <main className="flex min-h-full flex-col justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 min-w-[220px] p-4 ">
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
    </>
  );
}
