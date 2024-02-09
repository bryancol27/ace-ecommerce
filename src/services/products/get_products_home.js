const url_api = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const get_products_home = async (keyword, organization_id) => {
    console.log(keyword);

    try {
        const request = await fetch(
            `${url_api}/products/get-products-home?keyword=${keyword}`,
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
