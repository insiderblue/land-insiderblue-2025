import Image from 'next/image';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Divisor } from '@/components/Divisor';
import { Badge } from '@/components/Badge';

export default function Hero() {
    return (
        <Section variant="odd">
        <Divisor variant={2}/>
        <Container className="flex flex-col items-center pt-28 pb-42">
          <div className="mb-14">
            <Badge>Nossos clientes</Badge>
          </div>
          <div className="w-full flex flex-col xl:flex-row gap-8">
            <div className="w-[491px] max-w-full"> 
              <h1 className="bg-gradient-to-r from-accent to-dark-accent bg-clip-text text-transparent uppercase">Marcas que confiam no nosso trabalho e estão usando sites Insiderblue</h1>
            </div>
            <div className="flex flex-wrap gap-4 flex-1">
              <Image
                src="/img/logo-1.png"
                alt="Logo"
                width={139}
                height={139}
              />
              <Image
                src="/img/logo-2.png"
                alt="Logo"
                width={139}
                height={139}
              />
              <Image
                src="/img/logo-3.png"
                alt="Logo"
                width={139}
                height={139}
              />
              <Image
                src="/img/logo-4.png"
                alt="Logo"
                width={139}
                height={139}
              />
              <Image
                src="/img/logo-5.png"
                alt="Logo"
                width={139}
                height={139}
              />
              <Image
                src="/img/logo-6.png"
                alt="Logo"
                width={139}
                height={139}
              />
              <Image
                src="/img/logo-7.png"
                alt="Logo"
                width={139}
                height={139}
              />
              <Image
                src="/img/logo-8.png"
                alt="Logo"
                width={139}
                height={139}
              />
              <Image
                src="/img/logo-9.png"
                alt="Logo"
                width={139}
                height={139}
              />
              <Image
                src="/img/logo-10.png"
                alt="Logo"
                width={139}
                height={139}
              />
            </div>
          </div>
        </Container>
      </Section>
    )
}