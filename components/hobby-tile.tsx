import Image from "next/image";

// import image from assets
import readingImage from "../assets/images/unsplash-reading.jpg";

import { cn } from "@/lib/utils";
import { Hobby } from "@/data/hobby";

interface HobbyTileProps extends React.HTMLAttributes<HTMLDivElement> {
  hobby: Hobby;
  aspectRatio?: "portrait" | "square";
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
    <div className={cn("space-y-3 group relative ", className)} {...props}>
      <div className="relative overflow-hidden rounded-lg  filter bg-black">
        <Image
          src={hobby.imageURL}
          // src={readingImage}
          // src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          alt={hobby.name}
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-cover transition-all group-hover:scale-105 group-hover:opacity-30",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
        <div className="space-y-1 w-full h-full transition-all flex flex-col justify-center items-center absolute z-50 top-0 left-0 text-white py-2 px-4 group-hover:hidden">
          <h3 className="font-semibold text-2xl leading-none shadow-2xl bg-black p-4 bg-opacity-60 rounded-lg">
            {hobby.name}
          </h3>
        </div>
      </div>

      <div className="space-y-1 w-full transition-all flex flex-col  justify-center items-center absolute z-50 top-0 left-0 text-white py-2 px-4">
        <p className="hidden text-white group-hover:block">
          {hobby.description}
        </p>
      </div>
      <div className="space-y-1 ">
        <h3 className="font-medium leading-none">{hobby.name}</h3>
      </div>
    </div>
  );
}
