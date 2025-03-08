import Link from 'next/link';
import Image from 'next/image';

import { performRequest } from '@/lib/datocms';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

// Get content from 'layout'

interface Layout {
    title: string,
    logo: {
        url: string
    }
}

const layoutQuery = `{
    layout {
        title,
        logo {
            url
        } 
    }
}`;

const layout = ((await performRequest(layoutQuery)) as { layout: Layout }).layout;

// Get content from 'heroSection'

interface HeroSection {
    title: string,
    description: string,
    buttonLink: string,
    buttonTitle: string,
    video: {
        url: string
    }
}

const heroSectionQuery = `{
  heroSection {
    title,
    description,
    buttonLink,
    buttonTitle,
    video {
      url
    } 
  }
}`;

const hero = ((await performRequest(heroSectionQuery)) as { heroSection: HeroSection }).heroSection;

// Get content from 'allMenus'

interface Menu {
    title: string,
    href: string,
}

const menuQuery = `{
    allMenus(orderBy: order_ASC) {
        title,
        href,
        order
    }
}`;

const menu = ((await performRequest(menuQuery)) as { allMenus: Menu[] }).allMenus;

export default async function Hero() {

    return (
        <Section id="hero" variant="odd" className="xl:h-screen w-full">
            <video src={hero.video.url} autoPlay playsInline muted loop className="object-cover w-full h-full absolute"></video>
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <Container className="flex flex-col items-center py-32 z-10 relative">
                <div className="flex justify-between items-center xl:w-full mb-24">
                    <Link href="/" target="_self" aria-label="Insiderblue"> 
                        <Image
                        src={layout.logo.url}
                        alt={layout.title}
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
                    <h1 className="mb-6 max-w-4xl mx-auto">{hero.title}</h1>
                    <h6 className="mb-10 max-w-3xl mx-auto">{hero.description}</h6>
                    <Button href={hero.buttonLink}>{hero.buttonTitle}</Button>
                </div>
            </Container>
        </Section>
    )
}