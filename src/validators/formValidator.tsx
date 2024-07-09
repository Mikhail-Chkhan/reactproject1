import Joi from "joi";
import IForm from "../modules/IForm";

let postValidator: Joi.ObjectSchema<IForm> =
    Joi.object({
        title: Joi.string()
            .min(3)
            .max(255)
            .messages({
                    "string.min": "min: 3 characters",
                    "string.max": "max: 255 characters",
                }
            ),
        body: Joi.string()
            .min(5)
            .max(1000)
            .messages({
                "string.min": "min: 5 characters",
                "string.max": "max: 1000 characters",
            }),
        userId: Joi.number()
            .min(1)
            .max(10)
            .message("UserId must be from 1 to 10")

    });

export {postValidator}