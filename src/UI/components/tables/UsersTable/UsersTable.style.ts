import { normalized } from "../../../../core/helpers/Style.Helper";
import { Style } from "../../../../data/classes/Style.class";

const styles: Record<string, Style> = {
    tableRow: new Style({
        all: `cursor-pointer`,
    }),
    tableCell: new Style({
        all: `max-w-[100px] md:truncate text-center text-sm`,
    }),
}

export default normalized(styles);
