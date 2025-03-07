import React from "react";

type Props = {
    children?:React.ReactNode;
    href?:string;
    target?:'_blank'|'_self'|string;
}

export function Button({children, href = '#', target = '_self'}:Props) {
    return (
        <a href={href} target={target} className="bg-gradient-to-r from-dark-accent via-accent to-dark-accent 
        bg-[length:200%_100%] bg-right py-3 px-12 flex max-w-max rounded-full text-md font-semibold uppercase 
        transition-all ease-in-out duration-700 
        hover:bg-[length:200%_100%] hover:bg-left select-none text-nowrap">
            {children}
        </a>
    )
}