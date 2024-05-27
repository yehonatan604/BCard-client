import { normalized } from "../../../core/helpers/Style.Helper";
import { Style } from "../../../data/classes/Style.class";

const styles: Record<string, Style> = {
    container: new Style({
        all: "mb-4 h-[100vh] p-8",
        md: `md:h-[1000px]`
    }),
    title: new Style({
        all: `h-[15vh] overflow-hidden text-3xl`,
    }),
    card: new Style({
        all: `w-[80vw] h-[150vh] rounded-lg border border-violet-300 p-4 shadow-xl shadow-slate-800`,
        md: `md:w-[30vw]`,
    }),
    subtitle: new Style({
        all: `m-auto h-[20vh] overflow-hidden truncate text-2xl`,
    }),
    img: new Style({
        all: `m-auto h-3/4 rounded-lg border border-violet-300 object-contain shadow-xl shadow-slate-600 dark:shadow-slate-500`,
    }),
    description: new Style({
        all: `m-auto mt-5 h-[15vh] overflow-auto text-sm`,
    }),
    paragraph: new Style({
        all: `text-sm h-[12vh] overflow-hidden truncate w-[100%]`,
    }),
    link: new Style({
        all: `cursor-pointer text-sm text-blue-500`,
        md: `md:text-black`,
        hover: `hover:text-blue-500`,
    }),
    mapContainer: new Style({
        all: `mt-4 h-[70vh] w-full`,
    }),
    map: new Style({
        all: `h-full w-full rounded-lg`,
    }),

}

export default normalized(styles);
