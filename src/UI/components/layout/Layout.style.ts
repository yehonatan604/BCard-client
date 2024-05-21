import { Style } from "../../../data/models/Style.model";
import { normalized } from "../../../core/helpers/Style.Helper";

const styles: Record<string, Style> = {
    container: new Style({
        all: `mt-[11vh] max-md:mt-[28vh] light:bg-slate-200 dark:bg-slate-700`,
    }),
}

export default normalized(styles);
