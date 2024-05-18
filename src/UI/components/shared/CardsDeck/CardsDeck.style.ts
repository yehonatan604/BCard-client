import { normalized } from "../../../../core/helpers/Style.Helper";
import { Style } from "../../../../data/models/Style.model";

const styles: Record<string, Style> = {
    container: new Style({
        all: `w-[70vw] flex-wrap m-auto gap-10 mb-5`,
    }),
    spinnerDiv: new Style({
        all: `h-[10vh]`,
    }),
}

export default normalized(styles);
