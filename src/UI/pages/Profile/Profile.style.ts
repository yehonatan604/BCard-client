import { normalized } from "../../../core/helpers/Style.Helper";
import { Style } from "../../../data/classes/Style.class";

const styles: Record<string, Style> = {
    container: new Style({
        all: "mb-4 h-[100vh] mt-4",
        md: `md:h-[1000px]`
    }),
    title: new Style({
        all: `my-2 overflow-hidden text-3xl`,
    }),
    card: new Style({
        all: `w-[80%] mt-4 rounded-lg border border-violet-300 p-4 shadow-xl shadow-slate-800`,
        md: `md:w-96`,
    }),
    img: new Style({
        all: `m-auto h-20 w-20 rounded-full border border-violet-300 shadow-lg shadow-slate-800`,
    }),
    paragraph: new Style({
        all: `turncate overflow-hidden text-sm`,
        md: `md:text-base`,
    }),
    mapContainer: new Style({
        all: `mt-4 h-[25vh] w-full`,
    }),
    map: new Style({
        all: `h-full w-full rounded-lg border border-violet-300`,
    }),
    btn: new Style({
        all: `m-auto my-4`,
    }),
}

export default normalized(styles);
