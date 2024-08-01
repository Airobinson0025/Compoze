import React, { useState } from 'react'
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { RxAvatar } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { IoCubeOutline } from "react-icons/io5";
import { IoBrushOutline } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { TbTypography } from "react-icons/tb";
import { useSession } from 'next-auth/react';





const DashboardSidebar = () => {
    const { data: session, status } = useSession()

    const usersName = session?.user?.name
    
    const links = [
        {
          label: "Home",
          href: "/dashboard",
          icon: (
            <IoHomeOutline />
          ),
        },
        {
            label: "Projects",
            href: "/dashboard/projects",
            icon: (
              <IoCubeOutline />
            ),
          },
          {
            label: "Colors",
            href: "/dashboard/colors",
            icon: (
              <IoBrushOutline />
            ),
          },
          {
            label: "Components",
            href: "/dashboard/projects",
            icon: (
              <IoCodeSlash />
            ),
          },
          {
            label: "Typography",
            href: "/dashboard/typography",
            icon: (
              <TbTypography />
            ),
          },
        {
          label: "Profile",
          href: "/profile",
          icon: (
            <RxAvatar />
          ),
        },
        {
          label: "Settings",
          href: "/profile/settings",
          icon: (
            <IoSettingsOutline />
          ),
        },
        {
          label: "Logout",
          href: "#",
          icon: (
            <IoLogOutOutline />
          ),
        },
      ];

    const [open, setOpen] = useState(false);

    
    return (
      <div
        className={cn(
          "hidden rounded-md md:flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
          " sm:h-[650px]"
        )}
      >
        <Sidebar open={open} setOpen={setOpen} animate={true}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              <>
                <Logo />
              </>
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} className='text-xl' />
                ))}
              </div>
            </div>
            <div>
              <SidebarLink
                link={{
                  label: usersName as string,
                  href: "#",
                  icon: (
                    <Image
                      src="https://assets.aceternity.com/manu.png"
                      className="h-7 w-7 flex-shrink-0 rounded-full"
                      width={50}
                      height={50}
                      alt="Avatar"
                    />
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>
      </div>
    );
  }
  
  
  export const Logo = () => {
    return (
      <Link
        href="#"
        className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
      >
        <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-medium text-black dark:text-white whitespace-pre"
        >
          Compozed
        </motion.span>
      </Link>
    );
  };
  
        
  
  
  

export default DashboardSidebar