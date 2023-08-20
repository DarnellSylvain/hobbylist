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
  https: return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="relative overflow-hidden rounded-md">
        <Image
          // src={hobby.imageURL}
          // src={readingImage}
          src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          alt={hobby.name}
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105 ",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
      </div>

      <div className="space-y-1">
        <h3 className="font-medium leading-none">{hobby.name}</h3>
        <p className="text-sm text-muted-foreground">{hobby.description}</p>
      </div>
    </div>
  );
}
