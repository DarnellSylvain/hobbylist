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
import { Badge } from "./ui/badge";

interface HobbyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hobby: Hobby;
  aspectRatio?: "portrait" | "square" | "video";
  width?: number;
  height?: number;
}

export function HobbyCard({
  hobby,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: HobbyCardProps) {
  return (
    <Card className={cn("relative space-y-2  mx-auto", className)} {...props}>
      <CardHeader className="relative p-0">
        {" "}
        <Image
          src={hobby.imageURL}
          alt={hobby.name}
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-cover transition-all group-hover:scale-105 group-hover:opacity-30 rounded-t-lg",
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
          <h4 className="font-bold leading-none pt-2 px-4">{hobby.name}</h4>
        </div>
      </CardHeader>

      <CardDescription className="line-clamp-2 px-4 mt-0 h-10">
        {hobby.description}
      </CardDescription>
      <CardFooter className="p-4 pt-1">
        <div>
          <p className="text-xs">3265 Members</p>
        </div>
      </CardFooter>

      {/* <div className="space-y-1 w-full transition-all flex flex-col  justify-center items-center absolute  top-0 left-0 text-white py-2 px-4">
        <p className="hidden text-white group-hover:block">
          {hobby.description}
        </p>
      </div>
      <div className="space-y-1 ">
        <h3 className="font-medium leading-none">{hobby.name}</h3>
      </div> */}
      {hobby.name === "Reading" && (
        <Badge className="absolute -top-5 left-4 z-40 m-0">Popular</Badge>
      )}
    </Card>
  );
}
