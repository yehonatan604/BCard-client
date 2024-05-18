import { ReactNode } from "react";

export type FlexProps = {
    children: ReactNode[] | ReactNode;
    dir?: string;
    rtl?: boolean;
    justify?: string;
    items?: string;
    width?: string;
    className?: string;
    onClick?: () => void;
}
// Path: tshirt-client/src/UI/components/wrappers/Flex/Flex.component.tsx
