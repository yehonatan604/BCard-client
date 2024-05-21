import { IRegisterForm } from "../types/IRegisterForm";

export const registerInitialForm: IRegisterForm = {
    email: "",
    password: "",
    fName: "",
    mName: "",
    lName: "",
    phone: "",
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