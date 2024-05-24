import { normalized } from "../../../core/helpers/Style.Helper";
import { Style } from "../../../data/models/Style.model";

const styles: Record<string, Style> = {
    container: new Style({
        all: `m-auto w-[60vw]`,
    }),
    titleContainer: new Style({
        all: `my-2 w-full`,
    }),
    title: new Style({
        all: `overflow-hidden text-3xl`,
    }),
    subtitleContainer: new Style({
        all: `my-4 w-full`,
    }),
    subtitle: new Style({
        all: `text-xl`,
    }),
    img: new Style({
        all: `m-auto my-5 w-3/5 max-h-[35vh] overflow-hidden bg-slate-100 border border-violet-300 shadow-xl shadow-slate-500 rounded-xl`,
    }),
    descriptionContainer: new Style({
        all: `m-auto my-5 w-1/2 bg-slate-100 border border-violet-300 shadow-xl shadow-slate-500 rounded-xl`,
    }),
    description: new Style({
        all: `h-[15vh] p-3 cursor-default`,
    }),
    linksContainer: new Style({
        all: `m-auto my-5 w-1/2`,
    }),
    linksContainerItem: new Style({
        all: `gap-2`,
    }),
    link: new Style({
        all: `cursor-pointer hover:text-blue-500`,
    }),
    mapContainer: new Style({
        all: `mb-7 shadow-xl shadow-slate-800 rounded-xl overflow-hidden m-auto  border border-violet-300`,
    }),
    map: new Style({
        all: `h-full  w-full rounded-lg`,
    }),
    warning: new Style({
        all: `text-3xl text-center m-4`,
    }),
}

export default normalized(styles);
