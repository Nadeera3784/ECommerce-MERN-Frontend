export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('jwtEcom')) {
        return JSON.parse(localStorage.getItem('jwtEcom'));
    } else {
        return false;
    }
};