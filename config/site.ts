import { NavConfig, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Hobby List",
  url: "",
  ogImage: "",
  description: "Discover and share your hobbies with the world!",
  links: {
    twitter: "https://twitter.com/darnellsylvain",
    github: "https://github.com/darnellsylvain/hobbylist",
  },
};

export const navConfig: NavConfig = {
  mainNav: [
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Community",
      href: "/community",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
};
