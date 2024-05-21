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