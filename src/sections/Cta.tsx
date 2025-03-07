import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Divisor } from '@/components/Divisor';
import { Button } from '@/components/Button';

export default function Cta() {

    const title = 'Pronto Para Ter O Seu Site?';

    const description = 'Escolha o plano que mais se adeque e vamos começar!';

    const button = {
        title: 'Ver planos',
        href: '#prices'
    };

    return (
        <Section variant="odd">
            <Divisor variant={2}/>
            <Container className="flex flex-col items-center py-28">
                <h1 className="bg-gradient-to-r from-accent to-dark-accent bg-clip-text text-transparent uppercase mb-2">{title}</h1>
                <p className="mb-8">{description}</p>
                <Button href={button.href}>{button.title}</Button>
            </Container>
        </Section>
    )
}