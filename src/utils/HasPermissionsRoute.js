// MODEL RESPONSE FUNCTION
const response_function = {
    not_session: 'not_session', // Not need a session of login for this routes
    not_permissions: 'not_permissions', // Not have the needed requeriments to this route
    has_the_token_and_type: 'has_the_token_and_type', // Has a valid token
};

// Fill the routes what have permissions in the user
const WITHOUT_SESSIONS = ['/', '/login', '/register'];
const NEEDS_BE_USER = ['/shoppingCart', '/business-management'];
const NEEDS_BE_BUSINESS = [];

// Import utils

const HasPermissionsRoute = (path, user_object) => {
    if (WITHOUT_SESSIONS.includes(path)) {
        return response_function.not_session;
    }

    if (
        user_object &&
        (user_object?.type == 'user' || user_object?.type == 'bussines') &&
        NEEDS_BE_USER.some((path_array) => path.includes(path_array))
    ) {
        return response_function.has_the_token_and_type;
    }

    if (
        user_object &&
        user_object?.type == 'bussines' &&
        NEEDS_BE_BUSINESS.some((path_array) => path.includes(path_array))
    ) {
        return response_function.has_the_token_and_type;
    }

    return response_function.not_permissions;
};

export { response_function, HasPermissionsRoute };
