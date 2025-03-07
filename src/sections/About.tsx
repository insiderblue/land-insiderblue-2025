import Image from 'next/image';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Divisor } from '@/components/Divisor';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';

export default function About() {
    return (
        <Section variant="odd" id="about">
            <Divisor variant={2}/>
            <Container className="flex flex-col items-center pt-28 pb-42">
                <div className="mb-14">
                <Badge>Conheça nossa empresa</Badge>
                </div>
                <div className="w-full">
                    <h1 className="bg-gradient-to-r from-accent to-dark-accent bg-clip-text text-transparent uppercase max-w-[630px] mb-6">Especialistas Em Desenvolvento</h1>
                    <div className="max-w-[630px] mb-8">
                        <p className="mb-6">Somos uma agência <strong>especializada em criar sites para pequenos e médios negócios</strong>. Acreditamos que um site bem-feito é essencial para fortalecer a presença online e atrair novos clientes.</p>
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
    )
}