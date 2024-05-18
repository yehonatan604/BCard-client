import axios from "axios";
import { httpMethods } from "./httpMethods";

export const axiosMethods = {
    [`${httpMethods.GET}`]: axios.get,
    [`${httpMethods.POST}`]: axios.post,
    [`${httpMethods.PUT}`]: axios.put,
    [`${httpMethods.DELETE}`]: axios.delete,
    [`${httpMethods.PATCH}`]: axios.patch
}
