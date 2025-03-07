
import { Container } from '@/components/Container';

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-accent">
            <Container className="flex justify-between py-4">
                <span>© {currentYear} Insiderblue - All rights reserved</span>
                <span>FEITO COM ❤️ POR INSIDERBLUE. & <a href="https://lucidesigner.com/" target="_blank">LUCIANA D. DESIGNER</a></span>
            </Container>
        </footer>
    )
}