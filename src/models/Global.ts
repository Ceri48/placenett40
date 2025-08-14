import type {StrapiItem} from "./StrapiItem.ts";
import type {Image} from "./Image.ts";

export interface Global extends StrapiItem {
    overlayColor: string;
    overlayOpacity: number;
    backgroundColor: string;
    backgroundSize: "cover" | "contain" | "auto";
    backgroundPosition: "center" | "center top";
    backgroundRepeat: "no-repeat" | "repeat" | "repeat-x" | "repeat-y";
    backgroundAttachment: "fixed" | "scroll";
    background: Image[] | null;
    backgroundMobile: Image[] | null;
}