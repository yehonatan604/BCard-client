//** Dependencies **//
import axios from "axios";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { axiosMethods } from "../../data/constants/axiosMethods";
import { HttpMethods } from "../../data/enums/HttpMethods.enum";
import { getToken } from "../helpers/Storage.helper";

// *** custom hook for API calls *** //
const useAPI = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | Error>(null);
    const [data, setData] = useState<null | Array<object> | unknown[]>(null);

    // send API request
    const sendApiRequest = useCallback(async (url: string, method: HttpMethods, data?: object) => {
        // Set axios default headers
        axios.defaults.headers.common['x-auth-token'] = getToken();

        setLoading(true);
        try {
            const result = await axiosMethods[method](url, data);
            setData(result?.data);
            return result?.data;
        } catch (err) {
            setError(err as Error);
            console.log(err);
            
            toast(`${`Error!!!`}\n\n${err}`, { type: "error" });
        } finally {
            setLoading(false);
        }
    }, []);

    return { loading, error, data, sendApiRequest };
};

export default useAPI;
