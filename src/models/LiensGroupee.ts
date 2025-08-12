import type {Lien} from "./Lien.ts";

export interface LiensGroupee {
    Texte: string;
    Liens: Lien[];
    Ordre:number;
}