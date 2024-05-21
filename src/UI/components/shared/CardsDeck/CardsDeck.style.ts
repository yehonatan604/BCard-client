import { normalized } from "../../../../core/helpers/Style.Helper";
import { Style } from "../../../../data/models/Style.model";

const styles: Record<string, Style> = {
    container: new Style({
        all: `w-[70vw] flex-wrap m-auto gap-10 mb-5`,
    }),
    spinnerDiv: new Style({
        all: `h-[10vh]`,
    }),
    titleContainer: new Style({
        dark: `text-white`,
        all: `text-center`,
    }),
    title: new Style({
        all: `p-3 text-4xl`,
    }),
    subtitle: new Style({
        all: `mb-3`,
    }),
    emptyDiv: new Style({
        all: `h-[50vh] w-full`,
    }),

}

export default normalized(styles);
