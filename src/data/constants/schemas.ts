import {
    EmailSchema,
    UrlSchema,
    PasswordSchema,
    PhoneSchema,
    StringSchema,
    StringAlloWSchema,
    IntegerSchema
} from "../schemas/Schemas";

export const schemas = {
    login: {
        email: EmailSchema,
        password: PasswordSchema("password")
    },
    register: {
        email: EmailSchema,
        password: PasswordSchema("password"),
        confirmPassword: PasswordSchema("confirmPassword"),
        first: StringSchema("first"),
        middle: StringAlloWSchema("middle"),
        last: StringSchema("last"),
        phone: PhoneSchema,
        imageUrl: UrlSchema("imageUrl"),
        imageAlt: StringAlloWSchema("imageAlt"),
        city: StringSchema("city"),
        country: StringSchema("country"),
        zip: IntegerSchema("zip"),
        houseNumber: IntegerSchema("houseNumber"),
        state: StringAlloWSchema("state"),
        street: StringSchema("street")
    },
    addCard: {
        title: StringSchema("title"),
        subtitle: StringSchema("subtitle"),
        description: StringSchema("description"),
        phone: PhoneSchema,
        email: EmailSchema,
        web: UrlSchema("web"),
        imageUrl: UrlSchema("imageUrl"),
        imageAlt: StringAlloWSchema("imageAlt"),
        city: StringSchema("city"),
        country: StringSchema("country"),
        zip: IntegerSchema("zip"),
        houseNumber: IntegerSchema("houseNumber"),
        state: StringAlloWSchema("state"),
        street: StringSchema("street")
    },
    editProfile: {
        first: StringSchema("first"),
        middle: StringAlloWSchema("middle"),
        last: StringSchema("last"),
        phone: PhoneSchema,
        imageUrl: UrlSchema("imageUrl"),
        imageAlt: StringAlloWSchema("imageAlt"),
        city: StringSchema("city"),
        country: StringSchema("country"),
        zip: IntegerSchema("zip"),
        houseNumber: IntegerSchema("houseNumber"),
        state: StringAlloWSchema("state"),
        street: StringSchema("street")
    }
};