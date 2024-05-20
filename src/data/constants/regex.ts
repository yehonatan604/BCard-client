// *** Regular Expressions *** //
const phoneRegex = /0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-])[A-Za-z\d!@#$%^&*-]{6,}$/;

export { phoneRegex, passwordRegex };
