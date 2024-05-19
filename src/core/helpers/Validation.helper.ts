import Joi from "joi";

export const validate = (data: Record<string, string>, schema: Joi.ObjectSchema) => {
    return schema.validate(data);
}