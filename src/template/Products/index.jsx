'use client';

import React, { useEffect, useState } from 'react';

// Import styles
import { ProductsContainerSection } from './styles';

// Import componets
import { ProductCard } from '@/components/ProductCard';

// Import mock data
import { MOCK_DATA } from './mock/data.sections';

// Import services
import { get_products_home } from '@/services/products/get_products_home';

// Import local storage
import { save_local_storage, get_local_storage } from '@/utils/localStorage';

export const Products = ({ keyword }) => {
    const [products, setProducts] = useState([]);
    const [currentSaved, setCurrentSaved] = useState([]);

    const toggleStateSaved = (id) => {
        if (currentSaved.includes(id)) {
            setCurrentSaved(currentSaved.filter((id_store) => id_store != id));
        }

        setCurrentSaved([...currentSaved, id]);
        save_local_storage('shopping_card', { objects: [...currentSaved, id] });
    };

    useEffect(() => {
        get_products_home(keyword).then((data) => {
            setProducts(data.products);
        });
    }, [keyword]);

    useEffect(() => {
        if (typeof localStorage != 'undefined') {
            const saveds = get_local_storage('shopping_card');

            if (saveds.objects) {
                setCurrentSaved(saveds.objects);
            }
        }
    }, []);

    return (
        <ProductsContainerSection>
            {products.length &&
                products.map((element, i) => (
                    <ProductCard
                        key={i}
                        {...element}
                        storage_selected={currentSaved}
                        fnToggleState={toggleStateSaved}
                    />
                ))}
        </ProductsContainerSection>
    );
};
