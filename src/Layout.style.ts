import { Style } from "./data/classes/Style.class";
import { normalized } from "./core/helpers/Style.Helper";

const styles: Record<string, Style> = {
    main: new Style({
        all: `mt-[32vh]`,
        md: `md:mt-[14vh]`,
        light: `light:bg-slate-200 light:text-black`,
        dark: `dark:bg-slate-700 dark:text-white`,
    }),
}

export default normalized(styles);
