const url_api = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const register_request = async (body_request) => {
    try {
        const request = await fetch(`${url_api}/users/register-entity`, {
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            },
            method: 'POST',
            body: JSON.stringify(body_request),
        });

        const data = await request.json();

        if (data.err) {
            return data.err;
        }

        if (!data?.id) {
            return false;
        }

        return data;
    } catch (error) {
        return false;
    }
};
