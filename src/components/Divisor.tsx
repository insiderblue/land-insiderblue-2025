import React from "react";
import Image from 'next/image';

type Props = {
    variant:1|2|number;
}

export function Divisor({variant}:Props) {
    return (
        <Image
            src={`/img/divisor-${variant}.png`}
            alt="Divisória"
            width={1920}
            height={100}
            className={`w-[1920px] h-[100px] absolute top-[-50px] ${variant===1?"left-0":"right-0"}`}
        />
    )
}