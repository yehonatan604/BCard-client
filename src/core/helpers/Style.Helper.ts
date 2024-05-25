// *** Depndencies *** //
import { IStyle } from "../../data/types/IStyle";

// this function takes a style object and returns a string that represents the normalized style
const normalizeStyle = (style: IStyle): string => {
    return `
        ${style.all} ${style.maxMd} ${style.md} 
        ${style.hover} ${style.focus} ${style.transition}
        ${style.light} ${style.dark} 
    `;
}

// this function takes a styles object and returns a normalized styles object
export const normalized = (styles: Record<string, IStyle>): Record<string, string> => {
    return Object.keys(styles).reduce((acc, key) => {
        acc[key] = normalizeStyle(styles[key]).replace(/\s{2,}/g, ' ').trim();
        return acc;
    }, {} as Record<string, string>);
};
