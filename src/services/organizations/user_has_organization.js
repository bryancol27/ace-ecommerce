const url_api = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const user_has_organization = async (user_id) => {
    try {
        const request = await fetch(
            `${url_api}/business/user-has-organization/${user_id}`,
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
