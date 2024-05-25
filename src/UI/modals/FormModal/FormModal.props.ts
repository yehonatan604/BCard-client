import { ReactNode } from "react";

export type FormModalProps = {
    children: ReactNode[] | ReactNode;
    isOpen: boolean;
    setIsOpen: (bool: boolean) => void;
    isLoading: boolean;
    formName: string;
};
