"use client"

import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface ButtonActionsTableProps {
    url: string;
}

const ButtonActionsTable: FC<ButtonActionsTableProps> = ({url}) => {
    // router 
    const router = useRouter();
    
    return (
        <Button onClick={() => router.push(url)} size='icon' variant='outline'>
            <MoreVertical className='h-4 w-4' />
        </Button>
    )
}

export default ButtonActionsTable;