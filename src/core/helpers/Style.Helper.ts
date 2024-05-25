// *** Depndencies *** //
import { IStyle } from "../../data/types/IStyle";

// this function takes a styles object and returns a normalized styles object
export const normalized = (styles: Record<string, IStyle>): Record<string, string> => {
    return Object.keys(styles).reduce((acc, key) => {
        const value = Object.values(styles[key]).join(' ');
        acc[key] = value.replace(/\s{2,}/g, ' ').trim();
        return acc;
    }, {} as Record<string, string>);
};
