import { AuthLevels } from "../../../data/enums/AuthLevels.enum";

export type RouteGuardProps = {
    children: React.ReactNode;
    authLevel: AuthLevels;
    minimumLevel: AuthLevels;
};