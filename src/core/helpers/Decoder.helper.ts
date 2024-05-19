import { jwtDecode } from "jwt-decode"

export const decode = (str: string): string => {
    return jwtDecode(str);
}