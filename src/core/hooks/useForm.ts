//** Dependencies **//
import { useState } from "react";
import { validate } from "../helpers/Validation.helper";
import { ChangeEvent } from "react";
import Joi from "joi";

// *** custom hook for forms *** //
const useForm = (initialState: Record<string, any>, schema: Joi.ObjectSchema) => {
    //** State **//
    const [errors, setErrors] = useState(initialState);
    const [form, setForm] = useState(initialState);

    //** Functions **//
    const chechErrors = () => {
        let res;
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

    const updateForm = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any) => {
        const id: string = e.target.id;
        const value = e.target.value;

        Promise.resolve(
            setForm({
                ...form,
                [id]: value,
            }),
        ).then(() => {
            const comma =
                form.password === form.confirmPassword ? "" : ", ";
            const passwordMatch =
                form.password === form.confirmPassword ? "" : `${comma}Passwords do not match`;
            const validation = validate(
                { [id]: value },
                schema[id as keyof typeof schema] as Joi.ObjectSchema,
            );


            if (validation.error) {
                if (id === "confirmPassword") {
                    setErrors((old) => ({
                        ...old,
                        [e.target.id]: validation.error?.message,
                        confirmPassword: `${validation.error?.message}${passwordMatch}`,
                    }));
                } else {
                    setErrors((old) => ({
                        ...old,
                        [e.target.id]: validation.error?.message,
                    }));
                }
            } else {
                if (id === "confirmPassword") {
                    setErrors((old) => ({
                        ...old,
                        [e.target.id]: "",
                        confirmPassword: passwordMatch,
                    }));
                } else {
                    setErrors((old) => ({
                        ...old,
                        [e.target.id]: "",
                    }));
                }
            }
        });
    };


    return { form, errors, updateForm, setForm, chechErrors };
};

export default useForm;
