"use client";

import { hobbies } from "@/data/hobby";

import React from "react";
import Link from "next/link";
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

export default function MainNav() {
  return (
    <div className="container flex justify-between h-12 items-center  bg-opacity-0">
      <Link href="/" className="items-center space-x-2 flex">
        <Icons.logo />
        <span className="font-bold sm:inline-block">{siteConfig.name}</span>
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="">
            <NavigationMenuTrigger className="bg-inherit focus:bg-inherit hover:bg-inherit data-[active]:bg-inherit data-[state=open]:bg-inherit">
              Hobbies
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {hobbies.map((hobby) => (
                  <ListItem
                    key={hobby.name}
                    title={hobby.name}
                    href={`/hobby/${hobby.name}`}
                  >
                    {hobby.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/blog" passHref legacyBehavior>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Community
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex  items-center space-x-2 justify-end">
        <CommandMenu />
        <nav>
          <Link
            href="/login"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "px-4 "
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
