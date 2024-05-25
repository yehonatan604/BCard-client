import { normalized } from "../../../core/helpers/Style.Helper";
import { Style } from "../../../data/classes/Style.class";

const styles: Record<string, Style> = {
    container: new Style({
        all: `h-[80vh]`,
    }),
    status404: new Style({
        all: `overflow-hidden text-5xl`,
    }),
    img: new Style({
        all: `m-10 w-1/4`,
    })
}

export default normalized(styles);
