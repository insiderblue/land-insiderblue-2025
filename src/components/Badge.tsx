import React from "react";

type Props = {
    children?:React.ReactNode;
}

export function Badge({children}:Props) {
    return (
        <p className="bg-gradient-to-r from-dark to-dark-accent 
         bg-right py-2 px-10 flex max-w-max rounded-full font-semibold">
            {children}
        </p>
    )
}