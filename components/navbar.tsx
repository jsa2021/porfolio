"use client"

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import ThemeSwitch from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";
import {Switch} from "@nextui-org/switch";

export const Navbar = () => {
  // const searchInput = (
  //   <Input
  //     aria-label="Search"
  //     classNames={{
  //       inputWrapper: "bg-default-100",
  //       input: "text-sm",
  //     }}
  //     endContent={
  //       <Kbd className="hidden lg:inline-block" keys={["command"]}>
  //         K
  //       </Kbd>
  //     }
  //     labelPlacement="outside"
  //     placeholder="Search..."
  //     startContent={
  //       <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
  //     }
  //     type="search"
  //   />
  // );

  const searchInputNew = (
    
    <div className="flex items-center justify-center p-5">
    
      <div className="flex">
        <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
          <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
            <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
          </svg>
        </div>
        <input type="text" className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0" placeholder="" id=""></input>
        <input type="button" value="Search" className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"></input>
      </div>
    
  </div>
  );


  

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">JSA</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
     
            <NavbarItem>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href="/"
              >
              Home
              </NextLink>
            </NavbarItem>

            <NavbarItem>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href="/services"
              >
              Services
              </NextLink>
            </NavbarItem>

            <NavbarItem>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href="/skills"
              >
              Skills
              </NextLink>
            </NavbarItem>

            <NavbarItem>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href="/portfolio"
              >
              Portfolio
              </NextLink>
            </NavbarItem>

            <NavbarItem>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href="/contact"
              >
              Contact
              </NextLink>
            </NavbarItem>
         
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Twitter" href="https://twitter.com/getnextui">
            <TwitterIcon className="text-default-500" />
          </Link >
          <Link isExternal aria-label="Discord" href="https://discord.gg/9b6yyZKmH4">
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href="https://github.com/nextui-org/nextui">
            <GithubIcon className="text-default-500" />
          </Link>
        
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInputNew}</NavbarItem>
        <NavbarItem className="hidden md:flex">
          {/* <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Sponsor
          </Button> */}
            <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
       
        <NavbarMenuToggle />
       
        
      </NavbarContent>

      <NavbarMenu>
        {searchInputNew}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
