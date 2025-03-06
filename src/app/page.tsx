import Image from 'next/image';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

export default function Home() {
  return (
    <>
      <section className="bg-[url('/img/hero.png')] bg-cover bg-center h-[100dvh] w-full">
        <Container className="flex flex-col items-center py-32">
          <div className="flex justify-between items-center w-full">
            <a href="/" target="_self" aria-label="Insiderblue">
              <Image
                src="/img/logo.png"
                alt="Logo"
                width={207}
                height={36}
              />
            </a>
            <nav>
              <ul>
                <li>
                  <a className="uppercase transition-all ease-in-out duration-300 hover:text-accent" href="#nossos-planos" aria-label="Vai para a seção contendo os nossos planos">
                    Nossos planos
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl">
            <h1 className="mb-8">Dê ao seu negócio a presença online que ele merece!</h1>
            <h5 className="mb-8">Transforme visitantes em clientes com um site profissional, moderno e totalmente pronto para publicar. Escolha seu modelo e comece agora!</h5>
            <Button href="#nossos-planos">Ver planos</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
