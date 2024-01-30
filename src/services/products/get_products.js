const url_api = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const get_related_products = async (organization_id) => {
    try {
        const request = await fetch(
            `${url_api}/products/get-products/${organization_id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    // Add any additional headers if needed
                },
                method: 'GET',
            },
        );

        const data = await request.json();
        return data;
    } catch (error) {
        return false;
    }
};
