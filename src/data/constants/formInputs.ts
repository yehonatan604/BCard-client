export const registerationFormInputs = (errors: any) => [
    [
        {
            id: "fName",
            type: "text",
            label: "First Name",
            isRequired: true,
            error: errors.fName,
        },
        {
            id: "mName",
            type: "text",
            label: "Middle Name",
            isRequired: true,
            error: errors.mName,
        },
        {
            id: "lName",
            type: "text",
            label: "Last Name",
            isRequired: true,
            error: errors.lName,
        },
    ],
    [
        {
            id: "state",
            type: "text",
            label: "State",
            isRequired: false,
            error: errors.state,
        },
        {
            id: "country",
            type: "text",
            label: "Country",
            isRequired: true,
            error: errors.country,
        },
        {
            id: "city",
            type: "text",
            label: "City",
            isRequired: true,
            error: errors.city,
        },
    ],
    [
        {
            id: "street",
            type: "text",
            label: "Street",
            isRequired: true,
            error: errors.street,
        },
        {
            id: "houseNumber",
            type: "number",
            label: "House Number",
            isRequired: true,
            error: errors.houseNumber,
        },
        {
            id: "zip",
            type: "number",
            label: "Zip",
            isRequired: true,
            error: errors.zip,
        },
    ],
    [
        {
            id: "phone",
            type: "text",
            label: "Phone",
            isRequired: true,
            error: errors.phone,
        },
        {
            id: "email",
            type: "email",
            label: "Email",
            isRequired: true,
            error: errors.email,
        },
    ],
    [
        {
            id: "imageUrl",
            type: "text",
            label: "Image Url",
            isRequired: false,
            error: errors.imageUrl,
        },
        {
            id: "imageAlt",
            type: "text",
            label: "Image Alt",
            isRequired: false,
            error: errors.imageAlt,
        },
    ],
    [
        {
            id: "password",
            type: "password",
            label: "Password",
            isRequired: false,
            error: errors.password,
        },
        {
            id: "confirmPassword",
            type: "password",
            label: "Confirm Password",
            isRequired: false,
            error: errors.confirmPassword,
        },
    ],
];

export const loginFormInputs = (errors: any) => [
    {
        id: "email",
        type: "email",
        label: "Email",
        isRequired: true,
        error: errors.email,
    },
    {
        id: "password",
        type: "password",
        label: "Password",
        isRequired: true,
        error: errors.password,
    },
];