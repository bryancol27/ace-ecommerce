const url_api = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const post_products = async (object, product_id = 0) => {
    try {
        const request = await fetch(
            `${url_api}/products/save-product/${product_id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true',
                },
                method: 'POST',
                body: JSON.stringify(object),
            },
        );

        const data = await request.json();
        return data;
    } catch (error) {
        return false;
    }
};
