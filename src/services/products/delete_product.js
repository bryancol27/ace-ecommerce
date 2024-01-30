const url_api = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const delete_products = async (product_id) => {
    console.log(`${url_api}/products/delete-product/${product_id}`);

    try {
        const request = await fetch(
            `${url_api}/products/delete-product/${product_id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    // Add any additional headers if needed
                },
                method: 'DELETE',
            },
        );

        const data = await request.json();
        return data;
    } catch (error) {
        return false;
    }
};
