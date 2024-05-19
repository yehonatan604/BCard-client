export const getToken = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        removeToken();
        return '';
    }
    return token;
}

export const setToken = (token: string) => {
    localStorage.setItem('token', token);
}

export const removeToken = () => {
    setToken('');
}

// Path: tshirt-client/src/Core/helpers/Storage.helper.ts
