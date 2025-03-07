import Image from 'next/image';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Divisor } from '@/components/Divisor';
import { Badge } from '@/components/Badge';

export default function Hero() {

    const title = 'Nossos clientes';

    const text = 'Marcas que confiam no nosso trabalho e estão usando sites Insiderblue';

    const clients = [
      {
        name: 'Sagrado Design',
        logo: '/img/logo-1.png',
      },
      {
        name: 'Alisson Jordão',
        logo: '/img/logo-2.png',
      },
      {
        name: 'Dra. Evelyne Borges de Mattos',
        logo: '/img/logo-3.png',
      },
      {
        name: 'Fadiva',
        logo: '/img/logo-4.png',
      },
      {
        name: 'Cardiocenter',
        logo: '/img/logo-5.png',
      },
      {
        name: 'Ferr English',
        logo: '/img/logo-6.png',
      },
      {
        name: 'Rava Imóveis',
        logo: '/img/logo-7.png',
      },
      {
        name: 'RAD Advogados',
        logo: '/img/logo-8.png',
      },
      {
        name: 'Ferreira Júnior',
        logo: '/img/logo-9.png',
      },
      {
        name: 'GSL Advogados',
        logo: '/img/logo-10.png',
      },
      {
        name: 'MZ Group',
        logo: '/img/logo-11.png',
      },
      {
        name: 'Viana & Arantes Advogados',
        logo: '/img/logo-12.png',
      }
    ];

    return (
      <Section id="clients" variant="odd">
          <Divisor variant={2}/>
          <Container className="flex flex-col items-center pt-28 pb-42">
            <div className="mb-14">
              <Badge>{title}</Badge>
            </div>
            <div className="w-full flex flex-col xl:flex-row gap-8 items-center">
              <div className="w-[491px] max-w-full"> 
                <h1 className="bg-gradient-to-r from-accent to-dark-accent bg-clip-text text-transparent uppercase">{text}</h1>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 flex-1">
                {clients.map((client,index) => (
                    <Image
                      key={index}
                      src={client.logo}
                      alt={client.name}
                      width={139}
                      height={139}
                    />
                ))}
              </div>
            </div>
          </Container>
      </Section>
    )
}