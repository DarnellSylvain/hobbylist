"use client";

import { hobbies } from "@/data/hobby";

import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { CommandMenu } from "./command-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MainNavItem } from "@/types";
import { ScrollArea } from "./ui/scroll-area";
import { QuickModeToggle } from "./quick-mode-toggle";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export default function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="container flex justify-between h-12 items-center ">
      <Link href="/" className="items-center space-x-2 flex">
        <Icons.logo />
        <span className="font-bold sm:inline-block">{siteConfig.name}</span>
      </Link>

      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          <NavigationMenuItem className="">
            <NavigationMenuTrigger className="bg-inherit text-foreground/60 focus:bg-inherit hover:bg-inherit data-[active]:text-foreground data-[state=open]:text-foreground data-[active]:bg-inherit data-[state=open]:bg-inherit">
              Hobbies
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ScrollArea className=" h-96">
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {hobbies.map((hobby) => (
                    <ListItem
                      key={hobby.name}
                      title={hobby.name}
                      href={`/hobbies/${hobby.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {hobby.description}
                    </ListItem>
                  ))}
                </ul>
              </ScrollArea>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {items?.map((item) => (
            <NavigationMenuItem key={item.title}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "",
                    item.href.startsWith(`/${segment}`)
                      ? "text-foreground bg-secondary/90"
                      : "text-foreground/60",
                    navigationMenuTriggerStyle()
                  )}
                >
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex  items-center space-x-2 justify-end">
        <CommandMenu />
        <nav>
          <Link
            href="/register"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "px-4 "
            )}
          >
            Join Hobby List!
          </Link>
        </nav>
        <QuickModeToggle />
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none flex items-center">
            <Icons.book className="w-4 h-4 mr-2" />
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
