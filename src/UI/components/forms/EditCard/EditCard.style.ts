import { Style } from "../../../../data/classes/Style.class";
import { normalized } from "../../../../core/helpers/Style.Helper";

const styles: Record<string, Style> = {
    container: new Style({
        all: `flex flex-wrap justify-center items-start flex-col gap-4 w-[100%]`,
        md: `md:flex-row md:gap-10`,
    }),
    section: new Style({
        all: `w-[100%]`,
        md: `md:w-[45%]`,
    }),
    textareaLabel: new Style({
        all: `h-[auto]`,
    }),
    textarea: new Style({
        all: `mb-0 pb-0 h-20`,
    }),
    error: new Style({
        all: `border-red-500`,
        dark: `dark:border-red-500`
    }),
    input: new Style({
        all: `mb-0 pb-0 w-[100vw]`,
        md: `md:w-[80%]`
    }),
    seperator: new Style({
        all: `m-auto my-4 w-3/4`,
    }),
    btn: new Style({
        all: `m-auto mb-1 mt-4`,
    }),
    formError: new Style({
        all: `pt-2 text-center`,
    }),
}

export default normalized(styles);
