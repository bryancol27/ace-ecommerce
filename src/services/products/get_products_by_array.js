const url_api = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const get_products_from_array = async (array_ids) => {
    try {
        const request = await fetch(
            `${url_api}/products/get-array-products-by-id`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    // Add any additional headers if needed
                },
                method: 'POST',
                body: JSON.stringify({ array_ids: array_ids }),
            },
        );

        const data = await request.json();
        return data;
    } catch (error) {
        return false;
    }
};
