import { normalized } from "../../../../core/helpers/Style.Helper";
import { Style } from "../../../../data/classes/Style.class";

const styles: Record<string, Style> = {
    container: new Style({
        all: `w-[70vw] flex-wrap m-auto gap-10 mb-5`,
    }),
    spinnerDiv: new Style({
        all: `h-[10vh]`,
    }),
    titleContainer: new Style({
        all: `text-center w-3/4 m-auto`,
        md: `md:w-full`,
        dark: `dark:text-white`,
    }),
    title: new Style({
        all: `p-3 text-4xl`,
    }),
    subtitle: new Style({
        all: `mb-3`,
    }),
    emptyDiv: new Style({
        all: `h-[50vh] w-full`,
    }),
    pagination: new Style({
        all: `mb-6`,
    }),
    plusIcon: new Style({
        all: `cursor-pointer fixed right-2 top-[calc(90%-50px)] `,
        md: `md:right-24 md:top-[calc(80%-50px)]`,
    }),

}

export default normalized(styles);
