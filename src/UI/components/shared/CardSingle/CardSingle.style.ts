import { normalized } from "../../../../core/helpers/Style.Helper";
import { Style } from "../../../../data/classes/Style.class";

const styles: Record<string, Style> = {
    card: new Style({
        all: `w-[350px] h-[60vh] rounded-[20px] transition-all cursor-pointer`,
        hover: `hover:scale-[99%]`,
    }),
    cardImg: new Style({
        all: `w-full h-full object-cover rounded-t-[20px] m-autoborder border-violet-300 shadow-lg shadow-slate-600`,
    }),
    cardTitle: {
        all: `text-2xl h-[65vh] font-bold tracking-tight text-gray-900 truncate text-wrap`,
        maxMd: `max-md:text-sm`,
        dark: `dark:text-white `
    },
    cardSubtitle: new Style({
        all: `mt-3 h-[45vh] text-center font-bold tracking-tight text-gray-900 truncate`,
        maxMd: `max-md:text-xs max-md:mt-1`,
        dark: `dark:text-white`,
    }),
    cardDescription: new Style({
        all: `text-xs tracking-tight text-gray-700 elip h-[50vh] text-center`,
        dark: `dark:text-gray-400`
    }),
    iconsDiv: new Style({
        all: `w-full overflow-hidden h-[50vh]`,
    }),
    icon: new Style({
        hover: `hover:border-x-2`,
    }),
    seperator: new Style({
        all: `w-full my-3`,
    }),
}

export default normalized(styles);
