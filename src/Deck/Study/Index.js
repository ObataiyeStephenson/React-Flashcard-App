import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import StudyCard from "./StudyCard";
import StudyPage from "./StudyPage";
import StudyNotEnough from "./StudyNotEnough";

function Study(){
    const { deckId } = useParams();
    const [deck, setDeck] = useState({ name: "Loading...", cards: []});
    const [cardNum, setCardNum] = useState(1);

    const history = useHistory();
    useEffect(() => {
        readDeck(deckId).then(setDeck);
    }, [deckId]);
    const cardCountNum = deck.cards.length;
    const nextHandler = () => {
        if(cardNum === cardCountNum) {
            const restartToHome = !window.confirm("Restart cards?\n\nClick 'cancel' to return to the home page.")
            return restartToHome ? history.push("/") : setCardNum(1)
        }
        setCardNum((prevState) => Math.min(cardCountNum, prevState + 1))
    }
    const cardTitleText = `Card ${cardNum} of ${cardCountNum}`;
    const card = deck.cards[cardNum - 1];
    if(cardCountNum <= 2){
        return(
            <StudyPage name={deck.name} deckId={deckId}>
                <StudyNotEnough deckId={deckId}  cardCountNum={cardCountNum}/>
            </StudyPage>
        )
    }
    return (
        <StudyPage name={deck.name} deckId={deckId}>
            <StudyCard card={card} title={cardTitleText}>
                <button type="button" className="btn btn-primary" onClick={nextHandler}>
                    Next
                </button>
            </StudyCard>
        </StudyPage>
    )
}
export default Study;