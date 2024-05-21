import {
    CitySchema,
    CountrySchema,
    EmailSchema,
    FNameSchema,
    HouseNumSchema,
    ImgAltSchema,
    ImgUrlSchema,
    LNameSchema,
    MNameSchema,
    PasswordSchema,
    PhoneSchema,
    ConfirmPasswordSchema,
    StateSchema,
    StreetSchema,
    ZipSchema
} from "../schemas/user/User.schema";

export const schemas = {
    login: {
        email: EmailSchema,
        password: PasswordSchema,
    },
    register: {
        email: EmailSchema,
        password: PasswordSchema,
        confirmPassword: ConfirmPasswordSchema,
        fName: FNameSchema,
        mName: MNameSchema,
        lName: LNameSchema,
        phone: PhoneSchema,
        imageUrl: ImgUrlSchema,
        imageAlt: ImgAltSchema,
        city: CitySchema,
        country: CountrySchema,
        zip: ZipSchema,
        houseNumber: HouseNumSchema,
        state: StateSchema,
        street: StreetSchema,
    },
};