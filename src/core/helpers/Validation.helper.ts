//** Dependencies **//
import Joi from "joi";

// this function validates the data against the schema
export const validate = (data: Record<string, string>, schema: Joi.ObjectSchema) => {
    return schema.validate(data);
}