import { jwtDecode } from "jwt-decode"

export const decode = (str: string) => {
    return jwtDecode(str);
}