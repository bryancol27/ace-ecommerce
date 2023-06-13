//  Import components
import { TitleSearch } from '@/components/TitleSearch';

//  Import templates
import { Products } from '@/template/Products';

export default function Home() {
    return (
        <main>
            <TitleSearch
                placerHolder="Busca lo que deseas"
                title="¿Qué vas a querer comprar hoy?"
            />

            <Products />
        </main>
    );
}
