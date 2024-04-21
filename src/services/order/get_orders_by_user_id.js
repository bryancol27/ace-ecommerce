const url_api = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const get_orders_by_user_id = async (user_id) => {
    try {
        const request = await fetch(
            `${url_api}/buy-order/get-orders-user/${user_id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': 'true',
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