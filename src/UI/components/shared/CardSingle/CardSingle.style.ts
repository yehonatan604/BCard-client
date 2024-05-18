import { normalized } from "../../../../core/helpers/Style.Helper";
import { Style } from "../../../../data/models/Style.model";

const styles: Record<string, Style> = {
    card: new Style({
        all: `w-[350px] h-[500px] rounded-[20px] transition-all cursor-pointer`,
        maxMd: `w-3/4`,
        hover: `scale-[99%]`
    }),
    cardInnerContainer: new Style({
        all: `max-h-[300px]`,
    }),
    cardImg: new Style({
        all: `w-[100%] max-h-[250px] h-[300px] object-cover rounded-t-[20px] shadow-lg`,
    }),
    cardTitle: {
        all: `text-2xl h-[100px] font-bold  tracking-tight text-gray-900 dark:text-white truncate text-wrap`,
    },
    cardSubtitle: new Style({
        all: `mt-3 h-[70px] text-center font-bold tracking-tight text-gray-900 dark:text-white truncate`,
    }),
    cardDescription: new Style({
        all: `text-xs tracking-tight text-gray-700 dark:text-gray-400 elip h-[15vh] text-center`,
    }),
    iconsDiv: new Style({
        all: `w-full overflow-hidden h-[50px]`,
    }),
    icon: new Style({
        hover: `border-x-2`,
    }),
    seperator: new Style({
        all: `w-full my-3`,
    }),
}

export default normalized(styles);
