export const getToken = () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
        removeToken();
        return '';
    }
    return token;
}

export const setToken = (token: string) => {
    sessionStorage.setItem('token', token);
}

export const removeToken = () => {
    setToken('');
}

// Path: tshirt-client/src/Core/helpers/Storage.helper.ts
