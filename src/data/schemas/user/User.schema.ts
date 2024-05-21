import Joi from "joi";
import { passwordRegex, phoneRegex } from "../../constants/regex";

export const EmailSchema = Joi.object({
    email: Joi.string()
        .min(5)
        .max(256)
        .email({ tlds: { allow: false } })
        .required(),
});

export const PasswordSchema = Joi.object({
    password: Joi.string()
        .min(9)
        .ruleset.regex(passwordRegex)
        .rule({
            message: "password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
        })
        .required()
});
export const ConfirmPasswordSchema = Joi.object({
    confirmPassword: Joi.string()
        .min(9)
        .ruleset.regex(passwordRegex)
        .rule({
            message: "password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
        })
        .required()
});

export const FNameSchema = Joi.object({
    fName: Joi.string()
        .min(2)
        .max(256)
        .required()
});
export const LNameSchema = Joi.object({
    lName: Joi.string()
        .min(2)
        .max(256)
        .required()
});
export const MNameSchema = Joi.object({
    mName: Joi.string()
        .min(2)
        .max(256)
        .allow("", null)
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

export const ImgUrlSchema = Joi.object({
    imageUrl: Joi.string()
        .min(14)
        .uri()
        .allow("", null)
});

export const ImgAltSchema = Joi.object({
    imageAlt: Joi.string()
        .min(2)
        .max(256)
        .allow("", null)
});

export const CountrySchema = Joi.object({
    country: Joi.string()
        .min(2)
        .max(256)
        .required()
});

export const StateSchema = Joi.object({
    state: Joi.string()
        .min(2)
        .max(256)
        .allow("", null)
});

export const CitySchema = Joi.object({
    city: Joi.string()
        .min(2)
        .max(256)
        .required()
});

export const StreetSchema = Joi.object({
    street: Joi.string()
        .min(2)
        .max(256)
        .required()
});

export const ZipSchema = Joi.object({
    zip: Joi.number()
        .integer()
        .required()
});
export const HouseNumSchema = Joi.object({
    houseNumber: Joi.number()
        .integer()
        .required()
});
