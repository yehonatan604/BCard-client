// *** Depndencies *** //
import { IStyle } from "../../data/types/IStyle";

// this function takes a style object and returns a string that represents the normalized style
const normalizeStyle = (style: IStyle): string => {
    const md = style.md && style.md?.split(' ').map((item) => 'md:' + item).join(' ');
    const maxMd = style.maxMd && style.maxMd?.split(' ').map((item) => ' max-md:' + item).join(' ');
    const hover = style.hover && style.hover?.split(' ').map((item) => 'hover:' + item).join(' ');
    const transition = style.transition && style.transition?.split(' ').map((item) => 'transition:' + item).join(' ');
    const light = style.light && style.light?.split(' ').map((item) => 'light:' + item).join(' ');
    const dark = style.dark && style.dark?.split(' ').map((item) => 'dark:' + item).join(' ');
    const focus = style.focus && style.focus?.split(' ').map((item) => 'focus:' + item).join(' ');
    return `${maxMd!} ${md!} ${light!} ${dark!} ${hover!} ${transition!} ${focus!} ${style.all}`;
}

// this function takes a styles object and returns a normalized styles object
export const normalized = (styles: Record<string, IStyle>): Record<string, string> => {
    return Object.keys(styles).reduce((acc, key) => {
        acc[key] = normalizeStyle(styles[key]);
        return acc;
    }, {} as Record<string, string>);
};
