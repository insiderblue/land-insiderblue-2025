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
            "Para manter um site online é necessário contratar uma hospedagem e um domínio. A hospedagem normalmente é contratada anualmente, sendo a opção mensal geralmente mais cara. Já o domínio só pode ser contratado anualmente. Para que você não precise se preocupar com isso, a Insiderblue fornece esse serviço mediante uma assinatura mensal acessível. Também está incluso na assinatura a criação de contas de e-mail com 1GB de armazenamento cada, através da plataforma Titan. Todas as configurações são realizadas pelo nosso site, para que você não precise se preocupar com questões técnicas.",
        },
        {
            question: "Existe algum período de fidelidade?",
            answer:
            "Apesar da hospedagem e o domínio serem normalmente contratados em planos anuais, não trabalhamos com períodos de fidelidade. Portanto, mesmo que registremos o seu domínio por 12 meses, você pode cancelar sua assinatura quando quiser, pagando apenas pelo mês em que o site esteve no ar.",
        },
        {
            question: "Posso fazer o upgrade do meu site depois de pronto?",
            answer:
            "Você pode realizar o upgrade do seu site depois de pronto. Nessa hipótese será cobrada a diferença do valor referente ao modelo escolhido inicialmente e o novo modelo, conforme os valores vigentes.",
        },
        {
            question: "Posso mudar o endereço do meu site?",
            answer:
            "Para que o endereço do site seja alterado será necessário contratar um novo domínio. Será cobrada uma taxa de R$ 80,00 para toda alteração de endereço solicitada. Quando a troca é realizada, o endereço antigo é desativado.",
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