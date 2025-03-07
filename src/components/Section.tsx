import React from "react";

type Props = {
    children?:React.ReactNode;
    className?:string;
    variant?:"odd"|"even"|string;
}

export function Section({children, className, variant = "odd"}:Props) {
    return (
        <section className={`relative ${variant==="odd"?"bg-dark-accent":""} ${className?className:``}`}>
            {children}
        </section>
    )
}