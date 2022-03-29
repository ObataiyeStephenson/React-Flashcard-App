import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { FaEye, FaSave, FaTrash } from "react-icons/fa";
import { listDecks } from "../utils/api";

export default function Home() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then(setDecks).catch(console.log);
    return () => abortController.abort();
  }, []);

  function handleDelete(id) {
    setDecks(decks.filter((item) => item.id !== id));
    const confirm = window.confirm(
      "Are you sure you want to delete this deck?"
    );
  }

  return (
    <div>
      <Link to="/decks/new" className="btn btn-secondary">
        <AiOutlinePlus size={20} />
        Create Deck
      </Link>
      {decks.map((item) => (
        <div className="card card-body mt-3">
          <div className="top d-flex justify-content-between">
            <p>{item.name}</p>
            <p>{item.cards.length}</p>
          </div>
          <p>{item.description}</p>
          <div className="bottom d-flex">
            <Link
              to="#"
              className="btn btn-secondary mr-3 d-flex align-items-center"
            >
              <FaEye size={20} className="mr-2" />
              View
            </Link>
            <Link
              to="/decks/:deckId/study"
              className="btn btn-primary d-flex align-items-center"
            >
              <FaSave size={20} className="mr-2" /> Study
            </Link>
            <button
              to="#"
              onClick={() => handleDelete(item.id)}
              className="btn btn-danger ml-auto"
            >
              <FaTrash size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
