import Image from "next/image";
import { HobbyTile } from "@/components/hobby-tile";
import { hobbies } from "@/data/hobby";
import { HobbyCard } from "@/components/hobby-cards";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="p-0 flex flex-col items-center gap-4 text-center">
        {/* <div className="flex flex-col justify-end  h-96 w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1533991310801-340302384c22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="Hobby List"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        </div> */}

        {/* <section className="absolute top-0 left-0 translate-y-1/2 w-full flex flex-col space-y-6 p-6 md:px-10 pb-8 pt-12 md:pb-12 "> */}
        <section className="w-full flex flex-col justify-center items-center h-96 space-y-6 p-6 md:px-10 pb-8 pt-12 md:pb-12 ">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7x font-bold md:text-left">
            Welcome to Hobby List
          </h1>
          <p className="leading-normal text-muted-foreground sm:text-xl sm:leading-8 md:text-left">
            Join of a community of hobbyists and discover and share new hobbies!
          </p>
        </section>
      </div>
      <main className="container min-h-full flex-col justify-center items-center space-y-3 px-2 ">
        <h1 className="text-3xl font-bold font-heading  self-start px-4">
          Hobbies
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 min-w-[220px] p-4 ">
          {hobbies.map((hobby) => (
            <HobbyCard
              key={hobby.name}
              hobby={hobby}
              className="w-full max-w-[320px]"
              aspectRatio="video"
              width={250}
              height={150}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 min-w-[220px] p-4 ">
          {/* {hobbies.map((hobby) => (
            <HobbyTile
              hobby={hobby}
              className="w-full max-w-[250px]"
              aspectRatio="square"
              width={250}
              height={250}
            />
          ))} */}
        </div>
      </main>
    </>
  );
}
