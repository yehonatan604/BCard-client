import { normalized } from "../../../core/helpers/Style.Helper";
import { Style } from "../../../data/classes/Style.class";

const styles: Record<string, Style> = {
    container: new Style({
        light: `light:text-dark`,
        dark: `dark:text-white`,
    }),
    title: new Style({
        all: `overflow-hidden text-center text-3xl m-4`,
    }),
    link: new Style({
        all: `cursor-pointer text-slate-600`,
        dark: `dark:text-slate-300 dark:hover:text-blue-500`,
        hover: `hover:text-blue-500`,
    }),
    mapContainer: new Style({
        all: `my-10 h-[300px] w-3/4 shadow-xl shadow-slate-300 dark:shadow-slate-500 rounded-lg border border-violet-300`,
        md: `md:h-[500px]`,
    }),
    map: new Style({
        all: `h-full w-full rounded-lg border border-violet-300`,
    }),
}

export default normalized(styles);
