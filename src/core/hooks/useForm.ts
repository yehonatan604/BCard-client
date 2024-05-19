import { useState } from "react";
import { validate } from "../helpers/Validation.helper";
import { ChangeEvent } from "react";
import Joi from "joi";

const useForm = (initialState: Record<string, string>, schema: Joi.ObjectSchema) => {
    const [errors, setErrors] = useState({ ...initialState });
    const [form, setForm] = useState({ ...initialState });

    const updateForm = (e: ChangeEvent<HTMLInputElement>) => {
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
        });
    };

    return { form, errors, updateForm };
};

export default useForm;