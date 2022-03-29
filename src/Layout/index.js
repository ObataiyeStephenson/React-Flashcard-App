// import React from "react";
// import Header from "./Header";
// import NotFound from "./NotFound";
// import { Switch, Route } from "react-router-dom";
// import Home from "../Routes/home";
// import AddDeck from "../Routes/addDeck";
// import Study from "../utils/decks/study";


// ted
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../Home";
import Study from "../Deck/Study/StudyCard";
import NotFound from "./NotFound";
import Header from "./Header";
import DeckEdit from "../Deck/Edit";
import DeckView from "../Deck/View";
import CardEdit from "../Card/Edit";
import CardCreate from "../Card/Create";
import DeckCreate from "../Deck/Create";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/decks/new">
            <DeckCreate />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/edit">
            <DeckEdit />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CardCreate />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <CardEdit />
          </Route>
          <Route exact path="/decks/:deckId">
            <DeckView />
          </Route>
          <Route exact path="/decks">
            <Redirect to="/" />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}
// function Layout() {
//   return (
//     <>
//       <Header />
//       <div className="container">
//         {/* TODO: Implement the screen starting here */}
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>

//           <Route path="/decks/new">
//             <AddDeck />
//           </Route>

//           <Route path="/decks/:deckId/study">
//             <Study />
//           </Route>

//           <NotFound />
//         </Switch>
//       </div>
//     </>
//   );
// }

export default Layout;