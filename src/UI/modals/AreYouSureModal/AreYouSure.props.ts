export type AreYouSureModalProps = {
    isOpen: boolean;
    setIsOpen: (bool: boolean) => void;
    onYes: () => void;
    onNo?: () => void;
    title: string;
    question: string;
};
