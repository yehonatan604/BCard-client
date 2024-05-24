import { IStyle } from "../types/IStyle";

export class Style implements IStyle {
    all?: string = "";
    md?: string = "";
    maxMd?: string = "";
    hover?: string = "";
    transition?: string = "";

    constructor(props: IStyle) {
        Object.assign(this, props);
    }
}