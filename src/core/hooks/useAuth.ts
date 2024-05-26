//** Dependencies **//
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { authActions } from "../store/AuthSlice";
import { paths } from "../../data/constants/paths";
import useAPI from "./useAPI";
import { HttpMethods } from "../../data/enums/HttpMethods.enum";
import { getToken, removeToken, setToken } from "../helpers/Storage.helper";
import { decode } from "../helpers/Decoder.helper";
import { IToken } from "../../data/types/IToken";
import { getAuthLevel } from "../helpers/AuthLevel.helper";
import { IUser } from "../../data/types/IUser";

// *** custom hook for authentication *** //
const useAuth = () => {
    const dispatch = useDispatch();
    const { data, error, loading, sendApiRequest } = useAPI();
    const [users, setUsers] = useState<IUser[]>([]);

    // Login
    const login = useCallback(async (token: string) => {
        const decodedToken = decode(token) as unknown as IToken;
        const authLevel = getAuthLevel(decodedToken);
        const user = await getUserById(decodedToken._id) as IUser;
        dispatch(authActions.login({ id: decodedToken._id, authLevel: authLevel, img: user.image }));
    }, [dispatch]);

    // Try login
    const tryLogin = useCallback(async (credentials: Record<string, string>) => {
        const token = await sendApiRequest(`${paths.login}`, HttpMethods.POST, credentials);
        setToken(token);
        login(token);
        toast("Logged in successfully", { type: "success" });
    }, [sendApiRequest, login]);

    // Register
    const register = useCallback(async (user: IUser) => {
        await sendApiRequest(`${paths.users}`, HttpMethods.POST, user);
        toast("Registered successfully", { type: "success" });
    }, [sendApiRequest]);

    // Logout
    const logout = useCallback(() => {
        dispatch(authActions.logout());
        removeToken();
        toast(`Logged out successfully`, { type: "success" });
    }, [dispatch]);

    // Get user by id
    const getUserById = useCallback(async (id: string) => {
        return await sendApiRequest(`${paths.users}/${id}`, HttpMethods.GET);
    }, [sendApiRequest]);

    // Update user
    const updateUser = useCallback(async (user: any) => {
        const id = (decode(localStorage.getItem('token')!) as any)._id;
        const res = await sendApiRequest(`${paths.users}/${id}`, HttpMethods.PUT, user);
        toast("Profile updated successfully", { type: "success" });
        return res;
    }, [sendApiRequest]);

    // Patch user business status
    const patchUserBizStatus = useCallback(async (id: string) => {
        const res = await sendApiRequest(`${paths.users}/${id}`, HttpMethods.PATCH);
        toast("User's status updated successfully", { type: "success" });
        return res;
    }, [sendApiRequest]);

    //Get all users
    const getAllUsers = useCallback(async () => {
        const decodedToken = decode(getToken()) as unknown as IToken;
        const authLevel = getAuthLevel(decodedToken);
        if (authLevel !== 3) return toast("Unauthorized", { type: "error" });
        const res = await sendApiRequest(`${paths.users}`, HttpMethods.GET);
        setUsers(res);
    }, [sendApiRequest]);

    //Delete user
    const deleteUser = useCallback(async (id: string) => {
        const res = await sendApiRequest(`${paths.users}/${id}`, HttpMethods.DELETE);
        toast("User deleted successfully", { type: "success" });
        return res;
    }, [sendApiRequest]);

    return {
        loading, error, data, login, tryLogin, logout, register,
        getUserById, updateUser, getAllUsers, users, patchUserBizStatus, deleteUser
    };
}

export default useAuth;
