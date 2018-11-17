import { User } from "./user";

export class Coment {
    id: string;
    idProblem: string;
    user?: User;
    Text: string;
}

export class fsComent {
    id: string;
    idUser: string;
    idProblem: string;
    Text: string;
}