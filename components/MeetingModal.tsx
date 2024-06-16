import React from 'react'
import { title } from 'process';
import { ReactNode } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button"

interface MeetingModalProps{
isOpen:boolean;
onClose:()=>void ;
title:string;
className?:string;
childern?: ReactNode;
handleClick?:()=>void;
buttonText?:string;
image? :string;
buttonIcon?:string;

}
const MeetingModal = ({ isOpen, onClose, title,className,childern,handleClick,buttonText,image,buttonIcon}
    : MeetingModalProps
) => {
    return(

<Dialog >
<DialogTrigger>Open</DialogTrigger>
 <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white rounded-[20px]">

    <div className="flex flex-col gap-6">
        {image &&(
            <div className="flex justify-center">
                <Image src={image} alt="image" width={72} height={72} />
            </div>
        )}
        <h1 className={cn('text-3xl font-bold leading-[42px]',className)}>{title}</h1>
        {childern}
        <Button className="bg-dark-2
        focus-visible:ring-0
        focus-visible:ring-offset-0
        rounded-[20px]"
        onClick={handleClick}>
          {buttonIcon &&
           (<Image src={buttonIcon} alt="button icon"
          width={12} height={12}/>
        )} &nbsp;

            {buttonText || 'Schedule Meeting'}
        </Button>



    </div>
  </DialogContent>
</Dialog>


    )

}

export default MeetingModal;