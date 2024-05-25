import { normalized } from "../../../core/helpers/Style.Helper";
import { Style } from "../../../data/classes/Style.class";

const styles: Record<string, Style> = {
    container: new Style({
        light: `light:text-dark`,
        dark: `dark:text-white`,
    }),
    title: new Style({
        all: `overflow-hidden text-center text-3xl m-4`,
    })
}

export default normalized(styles);
