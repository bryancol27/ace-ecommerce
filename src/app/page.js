'use client';

//  Import components
import { TitleSearch } from '@/components/TitleSearch';

//  Import templates
import { Products } from '@/template/Products';
import { useState } from 'react';

export default function Home() {
    const [keyword, useKeyword] = useState('');

    console.log(keyword);

    return (
        <main>
            <TitleSearch
                placerHolder="Busca lo que deseas"
                title="¿Qué vas a querer comprar hoy?"
                fnSearchByInput={useKeyword}
            />

            <Products keyword={keyword} />
        </main>
    );
}
