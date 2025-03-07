import React from "react";

type Props = {
    children?:React.ReactNode;
}

export function Card({children}:Props) {
    return (
        <div className="bg-gradient-to-r from-dark to-dark-accent 
         bg-right py-14 px-9 flex max-w-max rounded-xl flex-col items-center justify-center text-center flex-1 min-w-[100%] xl:min-w-auto transition-all ease-in-out duration-300">
            {children}
        </div>
    )
}