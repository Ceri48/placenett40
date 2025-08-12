import type {Lien} from "./Lien.ts";
import type {LiensGroupee} from "./LiensGroupee.ts";

export interface Menu {
    Nombre: string;
    slug:string;
    Liens:Lien[];
    LiensGroupee:LiensGroupee[];
}