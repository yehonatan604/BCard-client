import { normalized } from "../../../../core/helpers/Style.Helper";
import { Style } from "../../../../data/classes/Style.class";



const styles: Record<string, Style> = {
    navbar: new Style({
        all: `fixed w-full z-10 border-b-1 border-solid border-gray-200 shadow-lg`,
    }),
    container: new Style({
        all: `flex flex-col m-auto w-full`,
        md: 'md:flex-row',
    }),
    navbarL: new Style({
        all: `bg-blue-500`
    }),
    navbarD: new Style({
        all: `bg-dark`
    }),
    bcardContainer: new Style({
        all: `flex justify-center w-[fit-content]`,
        md: `md:mr-10 md:mb-2`
    }),
    bcard: new Style({
        all: `font-semibold text-2xl text-slate-800 m-auto my-1`,
        md: `md:my-3`,
        hover: `hover:text-white`,
        dark: `dark:text-slate-400 dark:hover:text-white`
    }),
    search: {
        all: `p-2 mt-3`,
        md: `md:mt-0`
    },
    hamburger: new Style({
        all: `mb-[.5em]`,
    }),
    navLinksContainer: {
        all: `flex gap-5 flex-wrap mb-4`,
        md: `md:mr-10 md:gap-10 md:mb-0`
    },
    navLink: new Style({
        all: `font-semibold text-slate-800 p-0 text-center border-0`,
        md: `md:hover:text-white`,
    }),
    rightContainer: new Style({
        md: `md:gap-10 md:ml-10`,
    }),
    themeToggleContainer: new Style({
        all: `flex justify-center items-center px-2`,
        md: `md:w-[3.5vw] md:h-[12vh]`
    }),
    themeToggle: new Style({
        all: `p-2 rounded-full text-slate-600`,
        md: `md:hover:text-white`,
        hover: `hover:bg-transparent`,
        dark: `dark:hover:bg-transparent`,
        focus: `focus:ring-0`,
    }),
    img: new Style({
        all: `rounded-full m-auto w-[6vw]`,
        md: `md:w-[2vw]`,
        hover: `hover:scale-[90%]`,
    }),
    authContainer: new Style({
        all: `list-none`,
    }),
    authContainerL: new Style({
        all: ``,
    }),
    authContainerD: new Style({
        all: `text-slate-900`,
    }),
    authLink: new Style({
        all: `font-medium border-0 `,
        md: `md:hover:text-white`,
    }),
}

export default normalized(styles);
