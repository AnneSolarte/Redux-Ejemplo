import Card, { CardProps } from "../components/card/card";
import { addObserver, appState, dispatch } from "../store/index";
import { getCharactersData } from "../store/actions";

class Dashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    async connectedCallback() {
        const action = await getCharactersData()
        dispatch(action)
    }

    render() {
        appState.characters.forEach((character: any) =>{
            const card = this.ownerDocument.createElement('my-card') as Card;
            card.setAttribute(CardProps.name, character.name)
            card.setAttribute(CardProps.birth_year, character.birth_year)
            card.setAttribute(CardProps.gender, character.gender)
            card.setAttribute(CardProps.height, character.height)
            this.shadowRoot?.appendChild(card)

        })



    }
}

customElements.define('app-dashboard', Dashboard)
