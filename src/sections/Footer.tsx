
import { Container } from '@/components/Container';

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-accent">
            <Container className="flex flex-col items-center justify-center gap-5 text-center xl:flex-row xl:justify-between py-4 text-[12px]">
                <span>© {currentYear} Insiderblue - All rights reserved</span>
                <span>FEITO COM ❤️ POR INSIDERBLUE. & <a href="https://lucidesigner.com/" target="_blank">LUCIANA D. DESIGNER</a></span>
            </Container>
        </footer>
    )
}