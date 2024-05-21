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
