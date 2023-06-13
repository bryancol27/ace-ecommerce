//  Import components
import { TitleSearch } from '@/components/TitleSearch';

//  Import templates
import { Products } from '@/template/Products';

export default function Search() {
    return (
        <main>
            <TitleSearch
                placerHolder="Busca lo que deseas"
                title="¿Qué tienes en mente para hoy?"
            />

            <Products />
        </main>
    );
}
