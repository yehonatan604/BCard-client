import { normalized } from "../../../../core/helpers/Style.Helper";
import { Style } from "../../../../data/classes/Style.class";

const styles: Record<string, Style> = {
    card: new Style({
        all: `w-[350px] h-[60vh] rounded-[20px] transition-all cursor-pointer hover:scale-[99%]`,
        maxMd: `w-3/4`,
    }),
    cardInnerContainer: new Style({
        all: ``,
    }),
    cardImg: new Style({
        all: `w-full h-full object-cover  rounded-t-[20px] m-autoborder border-violet-300 shadow-xl shadow-slate-800`,
    }),
    cardTitle: {
        all: `text-2xl h-[60vh] font-bold  tracking-tight text-gray-900 dark:text-white truncate text-wrap`
    },
    cardSubtitle: new Style({
        all: `mt-3 h-[40vh] text-center font-bold tracking-tight text-gray-900 dark:text-white truncate`,
    }),
    cardDescription: new Style({
        all: `text-xs tracking-tight text-gray-700 dark:text-gray-400 elip h-[50vh] text-center`,
    }),
    iconsDiv: new Style({
        all: `w-full overflow-hidden h-[50vh]`,
    }),
    icon: new Style({
        all: `hover:border-x-2`,
    }),
    seperator: new Style({
        all: `w-full my-3`,
    }),
}

export default normalized(styles);
