//** Dependencies **//
import { jwtDecode } from "jwt-decode"

// this function decodes a jwt token
export const decode = (str: string) => {
    return jwtDecode(str);
}