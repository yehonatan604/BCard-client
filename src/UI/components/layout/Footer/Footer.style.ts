import { Style } from "../../../../data/classes/Style.class";
import { normalized } from "../../../../core/helpers/Style.Helper";

const styles: Record<string, Style> = {
    container: new Style({
        all: `h-[15vh] bg-blue-500`,
    }),
    containerInner: new Style({
        all: `w-full gap-20`,
    }),
    
}

export default normalized(styles);
