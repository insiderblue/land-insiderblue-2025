import Link from 'next/link';
import Image from 'next/image';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

export default function Hero() {
    return (
        <Section id="hero" variant="odd" className="bg-[url('/img/hero.png')] bg-cover bg-center h-screen w-full">
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <Container className="flex flex-col items-center py-32 z-10 relative">
                <div className="flex justify-between items-center xl:w-full mb-24">
                    <Link href="/" target="_self" aria-label="Insiderblue">
                        <Image
                        src="/img/logo.png"
                        alt="Logo"
                        width={207}
                        height={36}
                        />
                    </Link>
                    <nav className="hidden xl:block">
                        <ul className="flex gap-8 items-center">
                            <li>
                                <a className="uppercase transition-all ease-in-out duration-300 hover:text-accent" href="#differentials">
                                    Diferenciais
                                </a>
                            </li>
                            <li>
                                <a className="uppercase transition-all ease-in-out duration-300 hover:text-accent" href="#about">
                                    Sobre nós
                                </a>
                            </li>
                            <li>
                                <a className="uppercase transition-all ease-in-out duration-300 hover:text-accent" href="#prices">
                                    Preços
                                </a>
                            </li>
                            <li>
                                <a className="uppercase transition-all ease-in-out duration-300 hover:text-accent" href="#clients">
                                    Clientes
                                </a>
                            </li>
                            <li>
                                <a className="uppercase transition-all ease-in-out duration-300 hover:text-accent" href="#faq">
                                    Dúvidas frequentes
                                </a>
                            </li>
                        </ul>
                    </nav>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <h1 className="mb-6 max-w-4xl mx-auto">Dê ao seu negócio a presença online que ele merece!</h1>
                    <h6 className="mb-10 max-w-3xl mx-auto">Transforme visitantes em clientes com um site profissional, moderno e totalmente pronto para publicar. Escolha seu modelo e comece agora!</h6>
                    <Button href="#prices">Ver planos</Button>
                </div>
            </Container>
        </Section>
    )
}