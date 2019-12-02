export const TOKEN_KEY = "token";
export const USER = "user";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = (token, user) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER, user);

};
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER);
};