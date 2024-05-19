import axios from "axios";
import { HttpMethods } from "../enums/HttpMethods.enum";

export const axiosMethods = {
    [`${HttpMethods.GET}`]: axios.get,
    [`${HttpMethods.POST}`]: axios.post,
    [`${HttpMethods.PUT}`]: axios.put,
    [`${HttpMethods.DELETE}`]: axios.delete,
    [`${HttpMethods.PATCH}`]: axios.patch
}
