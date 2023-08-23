import Image from "next/image";

// import image from assets
import readingImage from "../assets/images/unsplash-reading.jpg";

import { cn } from "@/lib/utils";
import { Hobby } from "@/data/hobby";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";

interface HobbyTileProps extends React.HTMLAttributes<HTMLDivElement> {
  hobby: Hobby;
  aspectRatio?: "portrait" | "square" | "video";
  width?: number;
  height?: number;
}

export function HobbyTile({
  hobby,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: HobbyTileProps) {
  return (
    <Card
      className={cn("space-y-2 overflow-hidden mx-auto", className)}
      {...props}
    >
      <CardHeader className="p-0">
        <Image
          src={hobby.imageURL}
          alt={hobby.name}
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-cover transition-all group-hover:scale-105 group-hover:opacity-30",
            aspectRatio === "portrait"
              ? "aspect-[3/4]"
              : aspectRatio === "video"
              ? "aspect-video"
              : "aspect-square"
          )}
        />
        {/* <div className="space-y-1 w-full h-full transition-all flex flex-col justify-center items-center absolute top-0 left-0 text-white py-2 px-4 group-hover:hidden">
          <h3 className="font-semibold text-2xl leading-none shadow-2xl bg-black p-4 bg-opacity-60 rounded-lg">
            {hobby.name}
          </h3>
        </div> */}
        <div className="">
          <h3 className="font-bold leading-none pt-2 px-4">{hobby.name}</h3>
        </div>
      </CardHeader>

      <CardDescription className="line-clamp-2 px-4 mt-0 h-10">
        {hobby.description}
      </CardDescription>
      <CardFooter></CardFooter>

      {/* <div className="space-y-1 w-full transition-all flex flex-col  justify-center items-center absolute  top-0 left-0 text-white py-2 px-4">
        <p className="hidden text-white group-hover:block">
          {hobby.description}
        </p>
      </div>
      <div className="space-y-1 ">
        <h3 className="font-medium leading-none">{hobby.name}</h3>
      </div> */}
    </Card>
  );
}
