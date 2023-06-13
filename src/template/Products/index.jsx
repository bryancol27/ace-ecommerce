'use client';

// Import styles
import { ProductsContainerSection } from './styles';

// Import componets
import { ProductCard } from '@/components/ProductCard';

// Import mock data
import { MOCK_DATA } from './mock/data.sections';

export const Products = () => {
    return (
        <ProductsContainerSection>
            {MOCK_DATA.map((element, i) => (
                <ProductCard key={i} {...element} />
            ))}
        </ProductsContainerSection>
    );
};
