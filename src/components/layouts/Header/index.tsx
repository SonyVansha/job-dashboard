"use client";

import React, { FC } from "react";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    // Get the router object 
    const router = useRouter();
    
    // Navigate to the create job page
    const navCreateJobPage = () => router.push("/post-job");

    return (
        <div className="pb-3 mb-8 border-b flex flex-row items-center justify-between">
            <div>
                <div>Company</div>
                <div className="font-semibold">Twitter</div>
            </div>
            <div>
                <Button onClick={navCreateJobPage} className="rounded-none py-3 px-6">
                    <PlusIcon className="mr-2 w-4 h-4" />
                    Post a Job
                </Button>
            </div>
        </div>
    );
};

export default Header;
