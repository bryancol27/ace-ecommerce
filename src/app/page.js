import Image from 'next/image';
// import styles from './page.module.css';

//  Import components
import { TitleSearch } from '@/components/TitleSearch';

export default function Home() {
    return (
        <main>
            <TitleSearch
                placerHolder="Busca lo que deseas"
                title="¿Qué vas a querer comprar hoy?"
            />
        </main>
    );
}
