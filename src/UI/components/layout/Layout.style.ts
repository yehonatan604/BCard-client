import { Style } from "../../../data/classes/Style.class";
import { normalized } from "../../../core/helpers/Style.Helper";

const styles: Record<string, Style> = {
    container: new Style({
        all: `mt-[14vh]`,
        maxMd: `max-md:mt-[40vh]`,
        light: `light:bg-slate-200`,
        dark: `dark:bg-slate-700`,
    }),
}

export default normalized(styles);
