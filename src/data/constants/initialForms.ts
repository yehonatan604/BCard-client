import { IRegisterForm } from "../types/IRegisterForm";

export const registerInitialForm: IRegisterForm = {
    email: "",
    password: "",
    first: "",
    middle: "",
    last: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    street: "",
    houseNumber: null,
    zip: null,
};

export const editProfileInitialForm = {
    first: "",
    middle: "",
    last: "",
    phone: "",
    imageUrl: "",
    imageAlt: "",
    country: "",
    state: "",
    city: "",
    street: "",
    houseNumber: null,
    zip: null,
};

export const loginInitialForm = {
    email: "",
    password: "",
};

export const addCardInitialForm = {
    title: "",
    subtitle: "",
    description: "",
    phone: "",
    email: "",
    web: "",
    imageUrl: "",
    imageAlt: "",
    city: "",
    country: "",
    zip: null,
    houseNumber: null,
    state: "",
};