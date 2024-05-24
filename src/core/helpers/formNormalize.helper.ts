import { IUser } from "../../data/types/IUser";

export const normalizeUser = (user: any) => {
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
};

export const normalizeCard = (card: any) => {
    return {
        title: card.title,
        subtitle: card.subtitle,
        description: card.description,
        phone: card.phone,
        email: card.email,
        web: card.web,
        image: {
            url: card.imageUrl,
            alt: card.imageAlt
        },
        address: {
            country: card.country,
            state: card.state,
            city: card.city,
            street: card.street,
            houseNumber: card.houseNumber,
            zip: card.zip
        }
    }
};

export const deNormalizeCard = (form: any, card: any) => {
    return {
        ...form,
        title: card.title,
        subtitle: card.subtitle,
        description: card.description,
        phone: card.phone,
        email: card.email,
        web: card.web,
        imageUrl: card.image.url,
        imageAlt: card.image.alt,
        country: card.address.country,
        state: card.address.state,
        city: card.address.city,
        street: card.address.street,
        houseNumber: card.address.houseNumber,
        zip: card.address.zip
    }
};

export const deNormalizeUser = (user: IUser) => {
    return {
        first: user.name.first,
        middle: user.name.middle,
        last: user.name.last,
        phone: user.phone,
        imageUrl: user.image?.url,
        imageAlt: user.image?.alt,
        country: user.address.country,
        state: user.address.state,
        city: user.address.city,
        street: user.address.street,
        houseNumber: user.address.houseNumber,
        zip: user.address.zip,
    };
}

export const normalizeEditProfile = (user: any) => {
    console.log(user);
    
    return {
        name: {
            first: user.first,
            middle: user.middle,
            last: user.last
        },
        phone: user.phone,
        image: {
            url: user.url,
            alt: user.alt
        },
        address: {
            country: user.country,
            state: user.state,
            city: user.city,
            street: user.street,
            houseNumber: user.houseNumber,
            zip: user.zip
        }
    }
};

