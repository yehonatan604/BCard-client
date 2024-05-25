import { normalized } from "../../../core/helpers/Style.Helper";
import { Style } from "../../../data/classes/Style.class";

const styles: Record<string, Style> = {
    header: new Style({
        all: `h-[15vh] overflow-hidden`,
    }),
    footer: new Style({
        all: `flex w-full justify-center`,
    }),
}

export default normalized(styles);
