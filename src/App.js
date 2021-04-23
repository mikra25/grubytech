import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import MainPage from './Pages/MainPage';
import Post from './Pages/Post';
import Contact from "./Pages/Contact";
import Categories from "./Pages/Categories";
import MainHeader from "./Components/MainHeader";

import Header from "./Components/Header";

function App() {
  return (
      <Router>
        <div className="App">
            <Header />
            <div className="container">
                <MainHeader />
                <main>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route path="/kategorie" component={Categories} />
                        <Route path="/kontakt" component={Contact} />
                        <Route path="/:slug" component={Post} />
                    </Switch>
                </main>
            </div>

        </div>
      </Router>

  );
}

export default App;
