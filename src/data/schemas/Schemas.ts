import Joi from "joi";
import { passwordRegex, phoneRegex, urlRegex } from "../constants/regex";

export const EmailSchema = Joi.object({
    email: Joi.string()
        .min(5)
        .max(256)
        .email({ tlds: { allow: false } })
        .required(),
});

export const PasswordSchema = (key: string) => Joi.object({
    [key]: Joi.string()
        .min(9)
        .ruleset.regex(passwordRegex)
        .rule({
            message: "password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
        })
        .required()
});

export const PhoneSchema = Joi.object({
    phone: Joi.string()
        .min(9)
        .max(11)
        .ruleset.regex(phoneRegex)
        .rule({
            message: "phone number must be a valid israeli phone number"
        })
        .required()
});

export const UrlSchema = (key: string) => Joi.object({
    [key]: Joi.string()
        .min(10)
        .ruleset.regex(urlRegex)
        .rule({
            message: "Url must be a valid Url"
        })
        .allow("", null)
});

export const IntegerSchema = (key: string) => Joi.object({
    [key]: Joi.number()
        .integer()
        .required()
});

export const StringSchema = (key: string) => Joi.object({
    [key]: Joi.string()
        .min(2)
        .max(256)
        .required()
});

export const StringAlloWSchema = (key: string) => Joi.object({
    [key]: Joi.string()
        .min(2)
        .max(256)
        .allow("", null)
});
