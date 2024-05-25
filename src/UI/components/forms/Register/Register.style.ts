import { Style } from "../../../../data/classes/Style.class";
import { normalized } from "../../../../core/helpers/Style.Helper";

const styles: Record<string, Style> = {
    container: new Style({
        all: `flex flex-wrap w-[100%] justify-center items-start md:flex-row flex-col gap-4`,
    }),
    section: new Style({
        all: `md:w-[30%] w-[100%]`,
    }),
    error: new Style({
        all: `border-red-500 dark:border-red-500`,
    }),
    input: new Style({
        all: `mb-0 pb-0 w-[100vw] md:w-[80%]`,
    }),
    seperator: new Style({
        all: `md:m-10 m-4`,
    }),
    chkboxContainer: new Style({
        all: `ml-1 gap-3`,
    }),
    chkBox: new Style({
        all: `ml-1`,
    }),
    btn: new Style({
        all: `m-auto`,
    }),
    formError: new Style({
        all: `pt-2 text-center`,
    }),
}

export default normalized(styles);
