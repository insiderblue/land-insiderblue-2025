import Image from 'next/image';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

export default function Hero() {
    return (
        <Section id="hero" variant="odd" className="bg-[url('/img/hero.png')] bg-cover bg-center h-screen w-full">
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
                        <a className="uppercase transition-all ease-in-out duration-300 hover:text-accent" href="#prices" aria-label="Vai para a seção contendo os nossos planos">
                        Nossos planos
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