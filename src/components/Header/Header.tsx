"use client";

import { Trans } from "@lingui/macro";
import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from "@nextui-org/navbar";
import { useState } from "react";
import Github from "~/components/Icons/Github";
import Malt from "~/components/Icons/Malt";
import Support from "~/components/Icons/Support";
import Link from "~/components/Link/Link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out"
  ];

  return (
    <Navbar
      className="[&>header]:max-w-[1280px]"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary"
        ]
      }}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="!flex-[0] mr-4">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
        <NavbarBrand className="w-fit">
          <Link href="/" className="text-2xl text-inherit">
            Nextjs Lingui.js RSC
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarItem as={Link} href="https://lingui.dev/" isExternal showAnchorIcon>
          Lingui.js
        </NavbarItem>
        <NavbarItem
          as={Link}
          href="https://vercel.com/blog/understanding-react-server-components"
          isExternal
          showAnchorIcon
        >
          RSC
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <Button
            as={Link}
            href="https://www.malt.fr/profile/clementmuth"
            isExternal
            variant="light"
            startContent={<Malt />}
            size="sm"
            isIconOnly
          />
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="https://github.com/Clement-Muth/"
            isExternal
            variant="light"
            startContent={<Github />}
            size="sm"
            isIconOnly
          />
        </NavbarItem>
        <NavbarItem>
          <Button
            color="default"
            variant="solid"
            href="https://www.buymeacoffee.com/clementmuth"
            target="_blank"
            size="md"
            as={Link}
            startContent={<Support />}
          >
            <Trans>Support</Trans>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button
            color="default"
            variant="solid"
            href="https://www.buymeacoffee.com/clementmuth"
            target="_blank"
            fullWidth
            size="md"
            as={Link}
            startContent={<Support />}
          >
            Support
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
