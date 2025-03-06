import React from "react";

type Props = {
    children?:React.ReactNode;
    className?:string;
}

export function Container({children, className}:Props) {
    return (
        <div className={`max-w-full h-full mx-4 xl:w-7xl xl:mx-auto ${className?className:``}`}>
            {children}
        </div>
    )
}