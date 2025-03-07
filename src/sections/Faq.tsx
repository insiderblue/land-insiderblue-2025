'use client';

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Divisor } from '@/components/Divisor';
import { Badge } from '@/components/Badge';

export default function Faq() {

    const [openIndex, setOpenIndex] = useState<number | null>(null);
    
    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const title = 'Dúvidas frequentes';
    
    const faqs = [
        {
            question: "Em quanto tempo meu site fica pronto?",
            answer:
            "Para o modelo START o tempo de entrega é de 5 dias úteis. Para o modelo PLUS o tempo de entrega é de 7 dias úteis. Para o modelo MASTER o tempo de entrega é de 15 dias úteis. Tomamos todo o cuidado para realizar a entrega dentro do prazo estabelecido, mas caso aconteça de precisarmos alterarar o prazo, você será informado.",
        },
        {
            question: "Por que tenho que pagar uma mensalidade?",
            answer:
            "Para manter um site online é necessário contratar uma hospedagem e um domínio...",
        },
        {
            question: "Existe algum período de fidelidade?",
            answer:
            "Apesar da hospedagem e o domínio serem normalmente contratados em planos anuais...",
        },
        {
            question: "Posso fazer o upgrade do meu site depois de pronto?",
            answer:
            "Você pode realizar o upgrade do seu site depois de pronto...",
        },
        {
            question: "Posso mudar o endereço do meu site?",
            answer:
            "Para que o endereço do site seja alterado será necessário contratar um novo domínio...",
        },
    ];

    return (
        <Section variant="even" id="faq">
            <Divisor variant={1}/>
            <Container className="flex flex-col items-center py-28 pb-18">
                <div className="mb-14">
                    <Badge>{title}</Badge>
                </div>
                <ul className="text-left flex flex-col gap-5 mb-10 w-full select-none">
                    {faqs.map((faq, index) => (
                        <li
                            key={index}
                            onClick={() => toggleItem(index)}
                            className="cursor-pointer"
                        >
                            <span
                            className="flex items-center gap-3 bg-gradient-to-r from-dark to-dark-accent 
                            bg-right py-2 px-10 max-w-max rounded-full font-semibold"
                            >
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    className={`text-accent w-3 transition-transform duration-300 ${
                                    openIndex === index ? "rotate-90" : ""
                                    }`}
                                />
                                <p>{faq.question}</p>
                            </span>
                            <ul
                                className={`py-6 border-b-[1px] border-accent transition-all duration-300 ${
                                    openIndex === index ? "block" : "hidden"
                                }`}
                                >
                                <li>
                                    <p>{faq.answer}</p>
                                </li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </Container>
        </Section>
    )
}