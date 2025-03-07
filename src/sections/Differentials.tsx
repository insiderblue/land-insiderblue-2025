import Image from 'next/image';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Divisor } from '@/components/Divisor';
import { Card } from '@/components/Card';
import { Badge } from '@/components/Badge';

export default function Differentials() {
    return (
        <Section id="differentials" variant="even">
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
                    <h5 className="mb-3 uppercase">Sites gerenciáveis</h5>
                    <p>Você pode alterar o conteúdo do seu site sempre que quiser.</p>
                </Card>
                <Card>
                    <Image
                    src="/img/icon-2.png"
                    alt="Icone"
                    width={80}
                    height={80}
                    className="mb-16"
                    />
                    <h5 className="mb-3 uppercase">Sites responsivos</h5>
                    <p>Nossos sites são compatíveis com celulares e computadores.</p>
                </Card>
                <Card>
                    <Image
                    src="/img/icon-3.png"
                    alt="Icone"
                    width={80}
                    height={80}
                    className="mb-16"
                    />
                    <h5 className="mb-3 uppercase">Sites otimizados</h5>
                    <p>Nossos sites são leves e não apresentam qualquer tipo de lentidão.</p>
                </Card>
                </div>
            </Container>
        </Section>
    )
}