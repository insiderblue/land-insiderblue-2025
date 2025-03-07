import Image from 'next/image';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Divisor } from '@/components/Divisor';
import { Card } from '@/components/Card';
import { Badge } from '@/components/Badge';

export default function Differentials() {

    const title = 'Estrutura Completa';

    const cards = [
        {
            icon: '/img/icon-1.png',
            title: 'Sites gerenciáveis',
            description: 'Você pode alterar o conteúdo do seu site sempre que quiser.'
        },
        {
            icon: '/img/icon-2.png',
            title: 'Sites responsivos',
            description: 'Nossos sites são compatíveis com celulares e computadores.'
        },
        {
            icon: '/img/icon-3.png',
            title: 'Sites otimizados',
            description: 'Nossos sites são leves e não apresentam qualquer tipo de lentidão.'
        }
    ];

    return (
        <Section id="differentials" variant="even">
            <Divisor variant={1}/>
            <Container className="flex flex-col items-center pt-28 pb-42">
                <div className="mb-14">
                <Badge>{title}</Badge>
                </div>
                <div className="flex flex-col xl:flex-row gap-5">
                    {cards.map((card,index) => (
                        <Card key={index}>
                            <Image
                            src={card.icon}
                            alt=""
                            width={80}
                            height={80}
                            className="mb-16"
                            />
                            <h5 className="mb-3 uppercase">{card.title}</h5>
                            <p>{card.description}</p>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    )
}