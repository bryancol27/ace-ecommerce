const url_api = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const create_buy_order = async (body_to_send) => {
    try {
        const request = await fetch(`${url_api}/buy-order/create-order`, {
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true',
                // Add any additional headers if needed
            },
            method: 'POST',
            body: JSON.stringify(body_to_send),
        });

        const data = await request.json();
        return data;
    } catch (error) {
        return false;
    }
};
