import { normalized } from "../../../../core/helpers/Style.Helper";
import { Style } from "../../../../data/classes/Style.class";

const styles: Record<string, Style> = {
    container: new Style({
        all: `md:w-[70vw]`,
    }),
    tBody: new Style({
        all: `divide-y`,
    }),
}

export default normalized(styles);
