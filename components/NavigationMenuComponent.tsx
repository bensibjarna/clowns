"use client"

import React from 'react';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const NavigationMenuComponent = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/profile" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              User Profile
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/admin" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Admin Dashboard
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* Add more menu items here */}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuComponent;
