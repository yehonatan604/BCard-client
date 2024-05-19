import { normalized } from "../../../../core/helpers/Style.Helper";
import { Style } from "../../../../data/models/Style.model";

const styles: Record<string, Style> = {
    navbar: new Style({
        all: `fixed w-full z-10 border-b-1 border-solid border-gray-200 shadow-lg`,
    }),
    container: new Style({
        all: `flex flex-col m-auto w-full`,
        md: 'flex-row'
    }),
    navbarL: new Style({
        all: `bg-blue-500`
    }),
    navbarD: new Style({
        all: `bg-dark`
    }),
    bcardContainer: new Style({
        all: `w-full mb-2 flex justify-center md:w-[10vw]`,
    }),
    bcard: new Style({
        all: `font-semibold text-2xl`,
        md: `mr-5`,
        maxMd: `m-auto my-3`,
        hover: `font-bold`
    }),
    bcardL: new Style({
        all: `text-slate-800`
    }),
    bcardD: new Style({
        all: `text-white`
    }),
    search: {
        all: `p-2`,
    },
    navLinksContainer: {
        all: `flex gap-10 flex-wrap`,
    },
    navLink: new Style({
        all: `p-1`,
        hover: `text-black scale-105`,
    }),
    rightContainer: new Style({
        all: `gap-5`,
    }),
    themeToggleContainer: new Style({
        all: `flex justify-center items-center`,
        md: `w-[3.5vw] h-[12vh]`
    }),
    themeToggle: new Style({
        all: `p-2 rounded-full`,
        hover: `bg-opacity-50`,
    }),
    img: new Style({
        all: `w-[10vw] rounded-full md:w-[3vw]`,
        md: `w-[3vw]`
    }),
    authContainer: new Style({
        all: `list-none`,
    }),
    authContainerL: new Style({
        all: `text-dark`,
    }),
    authContainerD: new Style({
        all: `text-slate-400`,
    }),
    authLink: new Style({
        all: `p-1 w-[fit-content] font-medium border-0`,
        hover: 'text-black'
    }),
}

export default normalized(styles);
