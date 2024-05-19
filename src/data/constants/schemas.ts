import { EmailSchema, PasswordSchema } from "../schemas/user/Login.schema";

export const schemas = {
    login: {
        email: EmailSchema,
        password: PasswordSchema,
    },
};