import { Style } from "../../../../data/classes/Style.class";
import { normalized } from "../../../../core/helpers/Style.Helper";

const styles: Record<string, Style> = {
    container: new Style({
        all: `flex flex-wrap w-[100%] justify-center items-start flex-col gap-4`,
        md: `md:flex-row md:gap-10`
    }),
    section: new Style({
        all: `w-[100%]`,
        md: `md:w-[40%]`
    }),
    error: new Style({
        all: `border-red-500`,
        dark: `dark:border-red-500`
    }),
    input: new Style({
        all: `mb-0 pb-0 m-auto`,
    }),
    btn: new Style({
        all: `m-auto mt-4`,
    }),
    formError: new Style({
        all: `pt-2 text-center`,
    }),
}

export default normalized(styles);
