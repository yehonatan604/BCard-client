//** Dependencies **//
import { useState } from "react";
import { validate } from "../helpers/Validation.helper";
import { ChangeEvent } from "react";
import Joi from "joi";

//** useForm hook **//
const useForm = (initialState: Record<string, any>, schema: Joi.ObjectSchema) => {
    //** State **//
    const [errors, setErrors] = useState({ ...initialState });
    const [form, setForm] = useState({ ...initialState });

    //** Functions **//
    const chechErrors = () => {
        let res;
        console.log(errors);
        
        for (const key in errors) {
            if (errors[key] !== "") {
                res = true;
                break;
            } else {
                res = false;
            }
        }
        return res;

    }

    const updateForm = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const id: string = e.target.id;
        const value = e.target.value;

        Promise.resolve(
            setForm({
                ...form,
                [id]: value,
            }),
        ).then(() => {
            const validation = validate(
                { [id]: value },
                schema[id as keyof typeof schema] as Joi.ObjectSchema,
            );
            
            if (validation.error) {
                setErrors((old) => ({
                    ...old,
                    [e.target.id]: validation.error?.message,
                }));
            } else {
                setErrors((old) => ({
                    ...old,
                    [e.target.id]: "",
                }));
            }
            
            const passwordMatch = form.password === form.confirmPassword;
            if (id === "confirmPassword" && !passwordMatch) {
                setErrors((old) => ({
                    ...old,
                    confirmPassword: "Passwords do not match",
                }));
            } else if (id === "confirmPassword" && passwordMatch) {
                setErrors((old) => ({
                    ...old,
                    confirmPassword: "",
                }));
            }

        });
    };


    return { form, errors, updateForm, chechErrors };
};

export default useForm;