export type IUser = {
    _id: string;
    email: string;
    password: string;
    name: {
        first: string;
        middle?: string;
        last: string;
    };
    phone: string;
    image?: {
        url?: string;
        alt?: string;
    };
    address: {
        country: string;
        state?: string;
        city: string;
        street: string;
        houseNumber: number;
        zip: number;
    }
    isBusiness: boolean;
    isAdmin: boolean;
};