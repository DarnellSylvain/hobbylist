import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { CommandMenu } from "./command-menu";

export default function MainNav() {
  return (
    <div className="container flex justify-between h-12 items-center  bg-opacity-0">
      <Link href="/" className="items-center space-x-2 flex">
        <Icons.logo />
        <span className="font-bold sm:inline-block">{siteConfig.name}</span>
      </Link>

      <div className="">
        <nav>
          <Link href="/blog" className="px-4">
            Hobbies
          </Link>
          <Link href="/projects" className="px-4">
            Blog
          </Link>
          <Link href="/about" className="px-4">
            Community
          </Link>
          <Link href="/about" className="px-4">
            About
          </Link>
        </nav>
      </div>

      <div className="flex  items-center space-x-2 justify-end">
        <CommandMenu />
        <nav>
          <Link
            href="/login"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "px-4"
            )}
          >
            Sign in
          </Link>
        </nav>
        <ModeToggle />
      </div>
    </div>
  );
}
