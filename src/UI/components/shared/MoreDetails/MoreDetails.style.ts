import { normalized } from "../../../../core/helpers/Style.Helper";
import { Style } from "../../../../data/classes/Style.class";

const styles: Record<string, Style> = {
    title: new Style({
        all: `my-2 overflow-hidden text-xl`,
    }),
    container: new Style({
        all: `m-auto mt-4 w-full`,
    }),
    containerInner: new Style({
        all: `m-auto mb-6 gap-4 rounded-lg border border-violet-300 p-4 shadow-xl shadow-slate-800 md:w-1/2`,
    }),

}

export default normalized(styles);
