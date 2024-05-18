// *** Imports *** //
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { authActions } from "../store/AuthSlice";
import { useNavigate } from "react-router-dom";
import { paths } from "../../data/constants/paths";
import useAPI from "./useAPI";
import { httpMethods } from "../../data/constants/httpMethods";
import { removeToken, setToken } from "../helpers/Storage.helper";

// *** custom hook for authentication *** //
const useAuth = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const { data, error, loading, sendApiRequest } = useAPI();

    // Login phase 1 - send email
    const login = useCallback(async (credentials: Record<string, string>) => {
        const token = await sendApiRequest(`${paths.login}`, httpMethods.POST, credentials);
        setToken(token);
        toast("Logged in successfully", { type: "success" });
    }, [sendApiRequest]);

    // Logout
    const logout = useCallback(() => {
        dispatch(authActions.logout());
        removeToken();
        toast(`Logged out successfully`, { type: "success" });
        nav("/");
    }, [dispatch, nav]);

    return { loading, error, data, login, logout };
}

export default useAuth;
// Path: src/Core/hooks/useAPI.ts
