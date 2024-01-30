const url_api = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const post_image_products = async (formData, product_id = 0) => {
    try {
        const request = await fetch(
            `${url_api}/products/upload-product-image/${product_id}`,
            {
                method: 'POST',
                body: formData,
            },
        );

        const data = await request.json();
        return data._id;
    } catch (error) {
        return false;
    }
};
