// *** Imports *** //
import { IStyle } from "../../data/types/IStyle";

// this function takes a style object and returns a string that represents the normalized style
const normalizeStyle = (style: IStyle): string => {
    const md = style.md && style.md?.split(' ').map((item) => 'md:' + item).join(' ');
    const maxMd = style.maxMd && style.maxMd?.split(' ').map((item) => ' max-md:' + item).join(' ');
    const hover = style.hover && style.hover?.split(' ').map((item) => 'hover:' + item).join(' ');
    const transition = style.transition && style.transition?.split(' ').map((item) => 'transition:' + item).join(' ');
    return `${style.all} ${md!} ${maxMd!} ${hover!} ${transition!}`;
}

// this function takes a styles object and returns a normalized styles object
export const normalized = (styles: Record<string, IStyle>): Record<string, string> => {
    return Object.keys(styles).reduce((acc, key) => {
        acc[key] = normalizeStyle(styles[key]);
        return acc;
    }, {} as Record<string, string>);
};
