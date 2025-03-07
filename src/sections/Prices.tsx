import Image from 'next/image';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Card } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';

export default function Prices() {

    const whatsapp = '5535984365367';

    const features = [
        'Site totalmente responsivo',
        'Banner com frase de efeito',
        'Botão flutuante para o WhatsApp',
        'Seção de sobre',
        'Seção de produtos/serviços/preços',
        'Avaliações do Google',
        'Formulário de contato'
    ];

    const cards = [
        {
            icon: '/img/icon-4.png',
            title: 'START',
            description: 'Para quem está começando',
            features: [0,1,2,3],
            price: '690,00',
            subscription: '+ 54,90 mensal',
            button: 'Quero um site START',
            message: 'Olá. Gostaria de um site Start!',
        },
        {
            icon: '/img/icon-5.png',
            title: 'PLUS',
            description: 'Para negócios em crescimento',
            features: [0,1,2,3,4],
            price: '890,00',
            subscription: '+ 64,90 mensal',
            button: 'Quero um site PLUS',
            message: 'Olá. Gostaria de um site Plus!',
        },
        {
            icon: '/img/icon-6.png',
            title: 'MASTER',
            description: 'Para marcas consolidadas',
            features: [0,1,2,3,4,5,6],
            price: '1490,00',
            subscription: '+ 74,90 mensal',
            button: 'Quero um site MASTER',
            message: 'Olá. Gostaria de um site Master!',
        },
    ];

    const disclaimer = '* O valor referente ao desenvolvimento pode ser pago em duas parcelas, sendo a primeira anteriormente ao inicio do projeto e a segunda durante a entrega.';

    return (
        <Section id="prices" variant="even">
            <Container className="flex flex-col items-center py-28 pb-34">
                <div className="mb-14">
                <Badge>Nossos planos</Badge>
                </div>
                <div className="flex gap-5">
                    {cards.map((card,i) => (
                        <Card key={i}>
                            <Image
                            src={card.icon}
                            alt=""
                            width={100}
                            height={100}
                            className="mb-16"
                            />
                            <h5 className="mb-2">{card.title}</h5>
                            <p className="mb-9">{card.description}</p>
                            <ul className="text-left flex flex-col gap-2 mb-10">
                                {features.map((feature,j) => (
                                    <li key={j} className={`flex items-center gap-3 ${!card.features.includes(j)?'opacity-50 line-through':''}`}>
                                        <FontAwesomeIcon icon={faCheck} className="text-accent w-4" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mb-10">
                            <h5 className="mb-2">{card.price}<span className="text-accent">*</span></h5>
                            <p>{card.subscription}</p>
                            </div>
                            <Button href={`https://web.whatsapp.com/send?phone=${whatsapp}&text=${card.message}`} target="_blank">{card.button}</Button>
                        </Card>
                    ))}
                </div>
                <div className="mt-14 text-center max-w-[600px]">{disclaimer}</div>
            </Container>
        </Section>
    )
}