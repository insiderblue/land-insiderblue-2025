'use client';

import { useState } from "react";

import Image from 'next/image';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';
import { Card } from '@/components/Card';
import { Divisor } from '@/components/Divisor';
import { Section } from '@/components/Section';

export default function Home() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <>
      <Section variant="odd" className="bg-[url('/img/hero.png')] bg-cover bg-center h-screen w-full">
        <Container className="flex flex-col items-center py-32">
          <div className="flex justify-between items-center w-full">
            <a href="/" target="_self" aria-label="Insiderblue">
              <Image
                src="/img/logo.png"
                alt="Logo"
                width={207}
                height={36}
              />
            </a>
            <nav>
              <ul>
                <li>
                  <a className="uppercase transition-all ease-in-out duration-300 hover:text-accent" href="#nossos-planos" aria-label="Vai para a seção contendo os nossos planos">
                    Nossos planos
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <h1 className="mb-6 max-w-4xl mx-auto">Dê ao seu negócio a presença online que ele merece!</h1>
            <h6 className="mb-10 max-w-3xl mx-auto">Transforme visitantes em clientes com um site profissional, moderno e totalmente pronto para publicar. Escolha seu modelo e comece agora!</h6>
            <Button href="#nossos-planos">Ver planos</Button>
          </div>
        </Container>
      </Section>
      <Section variant="even">
        <Divisor variant={1}/>
        <Container className="flex flex-col items-center pt-28 pb-42">
          <div className="mb-14">
            <Badge>Estrutura Completa</Badge>
          </div>
          <div className="flex flex-col xl:flex-row gap-5">
            <Card>
              <Image
                src="/img/icon-1.png"
                alt="Icone"
                width={80}
                height={80}
                className="mb-16"
              />
              <h5 className="mb-3 uppercase">Gerencie</h5>
              <p>Altere o conteúdo do seu site sempre que quiser.</p>
            </Card>
            <Card>
              <Image
                src="/img/icon-2.png"
                alt="Icone"
                width={80}
                height={80}
                className="mb-16"
              />
              <h5 className="mb-3 uppercase">Responsividade</h5>
              <p>Seu site compatível com celulares e computadores.</p>
            </Card>
            <Card>
              <Image
                src="/img/icon-3.png"
                alt="Icone"
                width={80}
                height={80}
                className="mb-16"
              />
              <h5 className="mb-3 uppercase">Otimização</h5>
              <p>Altere o conteúdo do seu site sempre que quiser.</p>
            </Card>
          </div>
        </Container>
      </Section>
      <Section variant="odd">
        <Divisor variant={2}/>
        <Container className="flex flex-col items-center pt-28 pb-42">
          <div className="mb-14">
            <Badge>Conheça nossa empresa</Badge>
          </div>
          <div className="w-full">
            <h1 className="bg-gradient-to-r from-accent to-dark-accent bg-clip-text text-transparent uppercase max-w-[630px] mb-3">Especialistas Em Desenvolvento</h1>
            <div className="max-w-[630px] mb-8">
              <p>Somos uma agência <strong>especializada em criar sites para pequenos e médios negócios</strong>. Acreditamos que um site bem-feito é essencial para fortalecer a presença online e atrair novos clientes.</p>
              <p>Nosso compromisso é desenvolver sites que reflitam a essência da sua marca, com um design atrativo e funcional, ajudando o seu negócio a crescer e se destacar no mercado.</p>
            </div>
            <Button href="#nossos-planos">Ver planos</Button>
          </div>
        </Container>
        <Image
          src="/img/linhasbgtec.png"
          alt="Fundo"
          width={1604}
          height={473}
          className="absolute top-[50%] right-[-344px] translate-y-[-50%] h-[473px]  mix-blend-color-dodge select-none pointer-events-none"
        />
      </Section>
      <Section variant="even">
        <Container className="flex flex-col items-center py-28">
          <div className="mb-14">
            <Badge>Nossos planos</Badge>
          </div>
          <div className="flex gap-5">
            <Card>
              <Image
                src="/img/icon-1.png"
                alt="Icone"
                width={83}
                height={100}
                className="mb-16"
              />
              <h5 className="mb-4">START</h5>
              <p className="mb-9">Para quem está começando</p>
              <ul className="text-left flex flex-col gap-2 mb-10">
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-accent w-4" />
                  <span>Site totalmente responsivo</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-accent w-4" />
                  <span>Banner com frase de efeito</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-accent w-4" />
                  <span>Botão flutuante para o WhatsApp</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-accent w-4" />
                  <span>Seção de sobre</span>
                </li>
                <li className="flex items-center gap-3 opacity-50 line-through">
                  <FontAwesomeIcon icon={faCheck} className="text-accent w-4" />
                  <span>Seção de produtos/serviços/preços</span>
                </li>
                <li className="flex items-center gap-3 opacity-50 line-through">
                  <FontAwesomeIcon icon={faCheck} className="text-accent w-4" />
                  <span>Avaliações do Google</span>
                </li>
                <li className="flex items-center gap-3 opacity-50 line-through">
                  <FontAwesomeIcon icon={faCheck} className="text-accent w-4" />
                  <span>Formulário de contato</span>
                </li>
              </ul>
              <div className="mb-10">
                <h5 className="mb-2">690,00<span className="text-accent">*</span></h5>
                <p>+ 54,90 mensal</p>
              </div>
              <Button href="/contratar">Quero um site Start</Button>
            </Card>
            <Card>
              <Image
                src="/img/icon-5.png"
                alt="Icone"
                width={100}
                height={100}
                className="mb-16"
              />
              <h5 className="mb-2">PLUS</h5>
              <p className="mb-9">Para negócios em crescimento</p>
              <ul className="text-left flex flex-col gap-2 mb-10">
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-accent w-4" />
                  <span>Site totalmente responsivo</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-accent w-4" />
                  <span>Banner com frase de efeito</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-accent w-4" />
                  <span>Botão flutuante para o WhatsApp</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-accent w-4" />
                  <span>Seção de sobre</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-accent w-4" />
                  <span>Seção de produtos/serviços/preços</span>
                </li>
                <li className="flex items-center gap-3 opacity-50 line-through">
                  <FontAwesomeIcon icon={faCheck} className="text-accent w-4" />
                  <span>Avaliações do Google</span>
                </li>
                <li className="flex items-center gap-3 opacity-50 line-through">
                  <FontAwesomeIcon icon={faCheck} className="text-accent w-4" />
                  <span>Formulário de contato</span>
                </li>
              </ul>
              <div className="mb-10">
                <h5 className="mb-2">890,00<span className="text-accent">*</span></h5>
                <p>+ 64,90 mensal</p>
              </div>
              <Button href="/contratar">Quero um site Plus</Button>
            </Card>
            <Card>
              <Image
                src="/img/icon-6.png"
                alt="Icone"
                width={100}
                height={100}
                className="mb-16"
              />
              <h5 className="mb-2">MASTER</h5>
              <p className="mb-9">Para marcas consolidadas</p>
              <ul className="text-left flex flex-col gap-2 mb-10">
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-accent w-4" />
                  <span>Site totalmente responsivo</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-accent w-4" />
                  <span>Banner com frase de efeito</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-accent w-4" />
                  <span>Botão flutuante para o WhatsApp</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-accent w-4" />
                  <span>Seção de sobre</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-accent w-4" />
                  <span>Seção de produtos/serviços/preços</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-accent w-4" />
                  <span>Avaliações do Google</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-accent w-4" />
                  <span>Formulário de contato</span>
                </li>
              </ul>
              <div className="mb-10">
                <h5 className="mb-2">1490,00<span className="text-accent">*</span></h5>
                <p>+ 74,90 mensal</p>
              </div>
              <Button href="/contratar">Quero um site Master</Button>
            </Card>
          </div>
        </Container>
      </Section>
      <Section variant="odd">
        <Divisor variant={2}/>
        <Container className="flex flex-col items-center pt-28 pb-42">
          <div className="mb-14">
            <Badge>Nossos clientes</Badge>
          </div>
          <div className="w-full flex flex-col xl:flex-row gap-8">
            <div className="w-[491px] max-w-full"> 
              <h1 className="bg-gradient-to-r from-accent to-dark-accent bg-clip-text text-transparent uppercase">Marcas que confiam no nosso trabalho e estão usando sites Insiderblue</h1>
            </div>
            <div className="flex flex-wrap gap-4 flex-1">
              <Image
                src="/img/logo-1.png"
                alt="Logo"
                width={139}
                height={139}
              />
              <Image
                src="/img/logo-2.png"
                alt="Logo"
                width={139}
                height={139}
              />
              <Image
                src="/img/logo-3.png"
                alt="Logo"
                width={139}
                height={139}
              />
              <Image
                src="/img/logo-4.png"
                alt="Logo"
                width={139}
                height={139}
              />
              <Image
                src="/img/logo-5.png"
                alt="Logo"
                width={139}
                height={139}
              />
              <Image
                src="/img/logo-6.png"
                alt="Logo"
                width={139}
                height={139}
              />
              <Image
                src="/img/logo-7.png"
                alt="Logo"
                width={139}
                height={139}
              />
              <Image
                src="/img/logo-8.png"
                alt="Logo"
                width={139}
                height={139}
              />
              <Image
                src="/img/logo-9.png"
                alt="Logo"
                width={139}
                height={139}
              />
              <Image
                src="/img/logo-10.png"
                alt="Logo"
                width={139}
                height={139}
              />
            </div>
          </div>
        </Container>
      </Section>
      <Section variant="even">
        <Divisor variant={1}/>
        <Container className="flex flex-col items-center pt-28 pb-42">
          <div className="mb-14">
            <Badge>Dúvidas frequentes</Badge>
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
                  <h6>{faq.question}</h6>
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
    </>
  );
}
