import { normalized } from "../../../core/helpers/Style.Helper";
import { Style } from "../../../data/classes/Style.class";

const styles: Record<string, Style> = {
    question: new Style({
        all: `text-2xl`,
    }),
    footer: new Style({
        all: `flex w-full justify-center gap-5`,
    }),
}

export default normalized(styles);
