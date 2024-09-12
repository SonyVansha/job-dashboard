"use client";

import { Button } from "@/components/ui/button";
import React, { FC } from "react";

import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { HiOutlineBuildingOffice2, HiOutlineUsers } from "react-icons/hi2";
import { FaTasks } from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";
import { FaGears } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { useRouter } from "next/navigation";

interface SidebarProps {}


const Sidebar: FC<SidebarProps> = ({}) => {
  // Get the router object
  const router = useRouter();

  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
              onClick={() => router.push("/")}
            >
              <AiOutlineHome className="mr-2 text-lg" />
              Home
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineMail className="mr-2 text-lg" />
              Messages
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <HiOutlineBuildingOffice2 className="mr-2 text-lg" />
              Company Profile
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <HiOutlineUsers className="mr-2 text-lg" />
              All Applicants
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
              onClick={() => router.push("/job-listing")}
            >
              <FaTasks className="mr-2 text-lg" />
              Job Listing
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <GrSchedules className="mr-2 text-lg" />
              My Schedule
            </Button>
          </div>
        </div>
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <FaGears className="mr-2 text-lg" />
              Settings
            </Button>
            <Button
              variant={"ghost"}
              className="w-full text-red-500 hover:bg-red-200 hover:text-red-500 justify-start rounded-none"
            >
              <IoIosLogOut className="mr-2 text-lg" />
              Log out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
