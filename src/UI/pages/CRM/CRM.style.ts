import { normalized } from "../../../core/helpers/Style.Helper";
import { Style } from "../../../data/classes/Style.class";

const styles: Record<string, Style> = {
    menuHeader: new Style({
        all: `text-2xl cursor-pointer my-4 border-b-2 border-transparent`,
        hover: `hover:border-black`,
    }),
    titleContainer: new Style({
        all: `text-center w-3/4 m-auto`,
        md: `md:w-full`,
        dark: `dark:text-white`,
    }),
    title: new Style({
        all: `p-3 text-4xl`,
    }),
    subtitle: new Style({
        all: `mb-3`,
    }),
    pagination: new Style({
        all: `h-[10vh]`,
    }),
    spinnerDiv: new Style({
        all: `h-[10vh] overflow-hidden`,
    }),
}

export default normalized(styles);
