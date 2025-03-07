import Image from 'next/image';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Card } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';

export default function Prices() {
    return (
        <Section id="prices" variant="even">
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
                    <Button href="https://web.whatsapp.com/send?phone=5535984442779&text=Olá. Gostaria de um site Start!" target="_blank">Quero um site Start</Button>
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
                    <Button href="https://web.whatsapp.com/send?phone=5535984442779&text=Olá. Gostaria de um site Plus!" target="_blank">Quero um site Plus</Button>
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
                    <Button href="https://web.whatsapp.com/send?phone=5535984442779&text=Olá. Gostaria de um site Master!" target="_blank">Quero um site Master</Button>
                </Card>
                </div>
            </Container>
        </Section>
    )
}