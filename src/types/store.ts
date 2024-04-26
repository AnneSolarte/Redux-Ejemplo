import { War } from "./data";

export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    characters: War[]
}

export enum CharacterActions {
    'GET' = 'GET'
}

export interface GetCharactersAction {
    action: CharacterActions.GET
    payload: War[]
}

export type Actions = GetCharactersAction