import Joi from "joi";

export const EmailSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .min(5)
        .message("user's email address mast be a valid email address")
        .required(),
});

export const PasswordSchema = Joi.object({
    password: Joi.string()
        .min(9)
        .ruleset.regex(
            /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{8,20})/
        )
        .message(`
            user "password" must be at least nine characters long and contain an uppercase letter, 
            a lowercase letter, a number and one of the following characters !@#$%^&*-
        `,)
        .required()
});
