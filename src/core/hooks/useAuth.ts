// *** Imports *** //
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { authActions } from "../store/AuthSlice";
import { useNavigate } from "react-router-dom";
import { paths } from "../../data/constants/paths";
import useAPI from "./useAPI";
import { HttpMethods } from "../../data/enums/HttpMethods.enum";
import { removeToken, setToken } from "../helpers/Storage.helper";
import { decode } from "../helpers/Decoder.helper";
import { IToken } from "../../data/types/IToken";
import { getAuthLevel } from "../helpers/AuthLevel.helper";

// *** custom hook for authentication *** //
const useAuth = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const { data, error, loading, sendApiRequest } = useAPI();

    const login = useCallback((token: string) => {
        const decodedToken = decode(token) as unknown as IToken;
        const authLevel = getAuthLevel(decodedToken);
        dispatch(authActions.login({ id: decodedToken._id, authLevel: authLevel }));
    }, [dispatch]);

    const tryLogin = useCallback(async (credentials: Record<string, string>) => {
        const token = await sendApiRequest(`${paths.login}`, HttpMethods.POST, credentials);
        setToken(token);
        login(token);
        toast("Logged in successfully", { type: "success" });
    }, [sendApiRequest, login]);


    // Logout
    const logout = useCallback(() => {
        dispatch(authActions.logout());
        removeToken();
        toast(`Logged out successfully`, { type: "success" });
        nav("/");
    }, [dispatch, nav]);

    return { loading, error, data, login, tryLogin, logout };
}

export default useAuth;
// Path: src/Core/hooks/useAPI.ts
