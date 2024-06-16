import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HomeCardProps {
  className: string;
  img: string;
  title: string;
  description: string;
  handelClick: () => void;
}

const HomeCard = ({
  className,
  img,
  title,
  description,
  handelClick,
}: HomeCardProps) => {
  return (
    <div>
      <div
        className={cn('bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[260px] min-h-[230px] rounded-[14px] cursor-pointer',className)}
        onClick={() => {handelClick}}>
        <div className="flex-center glassmorphism size-12 rounded-[10px]">
          <Image
            src={img}
            alt="meeting"
            width={27}
            height={27}
          />
        </div>
        <div className="flex flex-col gap-2 align-right">
          <div className="flex flex-col gap-2 items-end">
            <h1 className="text-2xl font-bold text-right">{title}</h1>
            <p className="text-lg font-normal text-right">
            {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
