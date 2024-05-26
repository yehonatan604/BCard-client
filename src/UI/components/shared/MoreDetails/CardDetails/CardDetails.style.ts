import { normalized } from "../../../../../core/helpers/Style.Helper";
import { Style } from "../../../../../data/classes/Style.class";

const styles: Record<string, Style> = {
    paragraph: new Style({
        all: ``,
    }),
    link: new Style({
        all: `cursor-pointer text-sm`,
        hover: `hover:text-blue-500`,
    }),

}

export default normalized(styles);
