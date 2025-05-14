import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <div className="flex h-9 w-full items-center justify-between px-4">
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image
            alt="logo"
            src="https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/490750051_1014782750835129_7935622913635901857_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=e7KbXK6l78kQ7kNvwEHpjI0&_nc_oc=AdmPrIyjSDPs3AxtqOYaXFhb9PpyPphhYVucLbeEHLW_1aZTtea7ixHdfTOP5FgGrFo&_nc_zt=23&_nc_ht=scontent-lhr8-2.xx&_nc_gid=RdG0C9J8x2ghvqBsbptF4g&oh=00_AfEWkqrtzK9G21WlkzSLcBdLYMOhVfFZBJGR1-hbUixc2g&oe=680F7326"
            width={24}
            height={24}
            unoptimized
          />
          Kadiwa IABF Student Council
        </div>
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/announcements">
              Announcements
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/organizations">
              Organizations
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/about">About</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/create-post">
              Create post
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
