import React from "react";

type Props = {
    children?:React.ReactNode;
    className?:string;
    variant?:"odd"|"even"|string;
    id?:string;
}

export function Section({children, className, variant = "odd", id}:Props) {
    return (
        <section id={id} className={`relative ${variant==="odd"?"bg-dark-accent":""} ${className?className:``}`}>
            {children}
        </section>
    )
}