import React, { FC, ReactNode } from "react";
import { Separator } from "@/components/ui/separator";

// Define the FieldInputProps interface
interface FieldInputProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

// FieldInput component to display input field with title and subtitle
const FieldInput: FC<FieldInputProps> = ({ children, title, subtitle }) => {
  return (
    <>
      <div className="flex flex-row items-start">
        <div className="w-[30%]">
          <div className="font-semibold">{title}</div>
          <div className="text-gray-400 w-80">{subtitle}</div>
        </div>
        {children}
      </div>
      <Separator />
    </>
  );
};

export default FieldInput;
