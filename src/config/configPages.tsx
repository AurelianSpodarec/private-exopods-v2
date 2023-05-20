export const configPages = {
    DASHBOARD: {
        path: "/"
    },
    SITES: {
        path: "/sites"
    },

    // Self-service
    // ====================================================
    MY_ACCOUNT: {
        path: "/my-account"
    },

    // Authentication Gate
    // ====================================================
    LOGIN: {
        path: "/login"
    },
    FORGOTTEN_PASSWORD: {
        path: "/forgotten-password"
    },
    RESET_PASSWORD: {
        path: "/reset-password"
    },
    TWO_FACTOR_AUTH: {
        path: "/two-factor-authentication"
    },
    ACTIVATE_USER: {
        path: "/activate-user"
    },
    REGISTER: {
        path: "/register"
    },
    REGISTRATION_CONFIRMATION: {
        path: "/registration-confirmation"
    },
    PASSWORD_CHANGE_CONFIRMATION: {
        path: "/password-change-confirmation"
    },

    // Something Went Wrong
    // ====================================================
    FORBIDDEN: {
        path: "/403"
    },
    NOT_FOUND: {
        path: "*"
    }
}
