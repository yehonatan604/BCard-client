import { normalized } from "../../../../core/helpers/Style.Helper";
import { Style } from "../../../../data/models/Style.model";

const styles: Record<string, Style> = {
    navbar: new Style({
        all: `fixed w-full z-10 border-b-1 border-solid border-gray-200 shadow-lg`,
    }),
    container: new Style({
        md: 'flex-row',
        all: `flex flex-col m-auto w-full`,
    }),
    navbarL: new Style({
        all: `bg-blue-500`
    }),
    navbarD: new Style({
        all: `bg-dark`
    }),
    bcardContainer: new Style({
        all: `mb-2 flex justify-center w-[fit-content] md:mr-10`,
    }),
    bcard: new Style({
        maxMd: `m-auto my-3`,
        hover: `font-bold`,
        all: `font-semibold text-2xl`,
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
        md: `mr-10`
    },
    navLink: new Style({
        all: `p-1`,
        hover: `text-black scale-105`,
    }),
    rightContainer: new Style({
        all: `md:gap-10 md:ml-10`,
    }),
    themeToggleContainer: new Style({
        all: `flex justify-center items-center px-2`,
        md: `w-[3.5vw] h-[12vh]`
    }),
    themeToggle: new Style({
        all: `p-2 rounded-full`,
        hover: `bg-opacity-50`,
    }),
    img: new Style({
        all: `rounded-full m-auto w-[15vw] md:w-[4vw] px-2`,
        md: `w-[4vw]`,
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
        all: `font-medium border-0`,
        hover: 'text-black'
    }),
}

export default normalized(styles);
