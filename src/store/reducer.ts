import { Actions,  AppState, CharacterActions } from "../types/store";
import { appState } from "./index";

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
    const { action, payload } = currentAction;
    console.log(action,payload);
    switch (action) {

        case CharacterActions.GET:
            return {
                ...currentState,
                characters: payload
            }

        default:
            return currentState;
    }
}