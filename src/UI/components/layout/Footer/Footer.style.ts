import { Style } from "../../../../data/classes/Style.class";
import { normalized } from "../../../../core/helpers/Style.Helper";

const styles: Record<string, Style> = {
    container: new Style({
        all: `h-[15vh] bg-blue-500`,
    }),
    containerInner: new Style({
        all: `w-[100vw]`,
    }),
    paragrapgh: new Style({
        all: `font-semibold p-10`,
        dark: `dark:text-white`,
        light: `light:text-black`,
    }),
    link: new Style({
        all: `cursor-pointer text-slate-800`,
        hover: `hover:text-slate-300`,
        dark: `dark:text-blue-300 dark:hover:text-blue-400`,
    })
}

export default normalized(styles);
