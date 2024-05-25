import { normalized } from "../../../../core/helpers/Style.Helper";
import { Style } from "../../../../data/classes/Style.class";

const styles: Record<string, Style> = {
    card: new Style({
        all: `w-[200px] h-[400px] rounded-[20px] transition-all cursor-pointer`,
        md: `md:w-[350px] md:h-[500px]`,
        hover: `hover:scale-[99%]`,
    }),
    cardImg: new Style({
        all: `w-full h-full object-cover rounded-t-[20px] m-autoborder border-violet-300 shadow-lg shadow-slate-600`,
    }),
    cardTitle: {
        all: `text-sm mt-[-1vh] h-[65vh] font-bold tracking-tight text-gray-900 truncate text-wrap`,
        md: `md:text-2xl`,
        dark: `dark:text-white `
    },
    cardSubtitle: new Style({
        all: `mt-3 h-[55vh] text-center font-bold tracking-tight text-gray-900 truncate`,
        md: `md:h-[45vh]`,
        maxMd: `max-md:text-xs max-md:mt-1`,
        dark: `dark:text-white`,
    }),
    cardDescription: new Style({
        all: `text-xs tracking-tight text-gray-700 elip h-[60vh] text-center overflow-auto`,
        md: `md:h-[50vh]`,
        dark: `dark:text-gray-400`
    }),
    iconsDiv: new Style({
        all: `w-full overflow-hidden h-[60vh]`,
    }),
    icon: new Style({
        hover: `hover:border-x-2`,
    }),
    seperator: new Style({
        all: `w-full my-3`,
    }),
}

export default normalized(styles);
