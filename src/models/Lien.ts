import type {Article} from "./Article.ts";

export interface Lien {
    Texte: string;
    article: Article;
    Ordre:number;
}