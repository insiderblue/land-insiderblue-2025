import React from "react";

type Props = {
    children?:React.ReactNode;
    className?:string;
}

export function Container({children, className}:Props) {
    return (
        <div className={`w-full h-full mx-4 px-24 xl:max-w-[1290px] xl:mx-auto ${className?className:``}`}>
            {children}
        </div>
    )
}