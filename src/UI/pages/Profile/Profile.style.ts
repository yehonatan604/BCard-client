import { normalized } from "../../../core/helpers/Style.Helper";
import { Style } from "../../../data/classes/Style.class";

const styles: Record<string, Style> = {
    map: new Style({
        all: `h-full w-full rounded-lg border border-violet-300`,
    }),
}

export default normalized(styles);
