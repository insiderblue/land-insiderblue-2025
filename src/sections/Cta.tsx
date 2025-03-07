import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Divisor } from '@/components/Divisor';
import { Button } from '@/components/Button';

export default function Cta() {
    return (
        <Section variant="odd">
            <Divisor variant={2}/>
            <Container className="flex flex-col items-center py-28">
                <h1 className="bg-gradient-to-r from-accent to-dark-accent bg-clip-text text-transparent uppercase mb-2">Pronto Para Ter O Seu Site?</h1>
                <p className="mb-8">Escolha o plano que mais se adeque e vamos começar!</p>
                <Button href="#prices">Ver planos</Button>
            </Container>
        </Section>
    )
}