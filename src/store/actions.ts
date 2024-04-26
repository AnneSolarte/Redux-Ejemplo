import { getCharacters } from "../services/data";
import { GetCharactersAction, CharacterActions } from "../types/store";

export const getCharactersData = async(): Promise<GetCharactersAction> => {
    const data = await getCharacters()
    return {
        action: CharacterActions.GET,
        payload: data
    }
}
