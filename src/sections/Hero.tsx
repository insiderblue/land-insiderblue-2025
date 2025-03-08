import Link from 'next/link';
import Image from 'next/image';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

export default function Hero() {

    const logo = {
        src: '/img/logo.png',
        alt: 'Insiderblue',
    };

    const menu = [
        {
            title: 'Diferenciais',
            href: '#differentials'
        },
        {
            title: 'Sobre nós',
            href: '#about'
        },
        {
            title: 'Preços',
            href: '#prices'
        },
        {
            title: 'Clientes',
            href: '#clients'
        },
        {
            title: 'Dúvidas frequentes',
            href: '#faq'
        }
    ];

    const video = '/videos/hero.mp4';

    const title = 'Dê ao seu negócio a presença online que ele merece !!! y y y y x';

    const description = 'Transforme visitantes em clientes com um site profissional, moderno e totalmente pronto para publicar. Escolha seu modelo e comece agora!';

    const button = {
        title: 'Ver planos',
        href: '#prices'
    };

    return (
        <Section id="hero" variant="odd" className="xl:h-screen w-full">
            <video src={video} autoPlay playsInline muted loop className="object-cover w-full h-full absolute"></video>
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <Container className="flex flex-col items-center py-32 z-10 relative">
                <div className="flex justify-between items-center xl:w-full mb-24">
                    <Link href="/" target="_self" aria-label="Insiderblue">
                        <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={207}
                        height={36}
                        />
                    </Link>
                    <nav className="hidden xl:block">
                        <ul className="flex gap-8 items-center">
                            {menu.map((item,index) => (
                                <li key={index}>
                                    <a className="uppercase transition-all ease-in-out duration-300 hover:text-accent" href={item.href}>
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <h1 className="mb-6 max-w-4xl mx-auto">{title}</h1>
                    <h6 className="mb-10 max-w-3xl mx-auto">{description}</h6>
                    <Button href={button.href}>{button.title}</Button>
                </div>
            </Container>
        </Section>
    )
}