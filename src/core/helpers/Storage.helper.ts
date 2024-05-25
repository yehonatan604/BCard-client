// this function is used to get token from local storage, 
// if token is not found or is undefined, it will reset token
export const getToken = () => {
    const token = localStorage.getItem('token');
    if (!token || token === 'undefined') {
        removeToken();
        return '';
    }
    return token;
}

// this function is used to set token in local storage
export const setToken = (token: string) => {
    localStorage.setItem('token', token);
}

// this function is used to remove token from local storage
export const removeToken = () => {
    setToken('');
}