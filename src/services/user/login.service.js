const url_api = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const login_request = async (body_request) => {
    try {
        const request = await fetch(`${url_api}/users/login`, {
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true',
                // Add any additional headers if needed
            },
            method: 'POST',
            body: JSON.stringify(body_request),
        });

        const data = await request.json();

        if (!data?.token) {
            return false;
        }

        return data;
    } catch (error) {
        return false;
    }
};
