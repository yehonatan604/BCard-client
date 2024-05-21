import { IUser } from "../../data/types/IUser";

export const normalizeUser = (user: any): IUser => {
    return {
        email: user.email,
        password: user.password,
        name: {
            first: user.fName,
            middle: user.mName,
            last: user.lName
        },
        phone: user.phone,
        image: {
            url: user.imageUrl,
            alt: user.imageAlt
        },
        address: {
            country: user.country,
            state: user.state,
            city: user.city,
            street: user.street,
            houseNumber: user.houseNumber,
            zip: user.zip
        },
        isBusiness: false,
        isAdmin: false
    }
}