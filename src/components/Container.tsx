import React from "react";

type Props = {
    children?:React.ReactNode;
    className?:string;
}

export function Container({children, className}:Props) {
    return (
        <div className={`w-full h-full px-4 xl:px-24 xl:max-w-[1330px] xl:mx-auto ${className?className:``}`}>
            {children}
        </div>
    )
}