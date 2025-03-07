import Image from 'next/image';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Divisor } from '@/components/Divisor';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';

export default function About() {

    const title = 'Conheça nossa empresa';

    const giant_title = 'Especialistas Em Desenvolvento';

    const text = `<p style="margin-bottom: 18px">Somos uma agência <strong>especializada em criar sites para pequenos e médios negócios</strong>. Acreditamos que um site bem-feito é essencial para fortalecer a presença online e atrair novos clientes.</p><p>Nosso compromisso é desenvolver sites que reflitam a essência da sua marca, com um design atrativo e funcional, ajudando o seu negócio a crescer e se destacar no mercado.</p>`;

    const button = {
        title: 'Ver planos',
        href: '#prices'
    };
    
    return (
        <Section variant="odd" id="about">
            <Divisor variant={2}/>
            <Container className="flex flex-col items-center pt-28 pb-42">
                <div className="mb-14">
                <Badge>{title}</Badge>
                </div>
                <div className="w-full">
                    <h1 className="bg-gradient-to-r from-accent to-dark-accent bg-clip-text text-transparent uppercase max-w-[630px] mb-6">{giant_title}</h1>
                    <div className="max-w-[630px] mb-8" dangerouslySetInnerHTML={{ __html: text }}></div>
                    <Button href={button.href}>{button.title}</Button>
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