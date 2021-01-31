
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Instructions from './components/Instructions';
import Credit from './components/Credits';
import Topics from './components/Topics';
import Questions from './components/Questions';
import Thankyou from './components/Thankyou';
import Technology from './components/Categories/technology';
import History from './components/Categories/history';
import Sports from './components/Categories/sports';
import Geography from './components/Categories/geography';
import General from './components/Categories/general_knowledge';
import Answer from './components/AnswerSheet';
// import Practice from './components/Practice';


function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Switch>
            <Route path="/instructions" component={Instructions} />
            <Route path="/credits" component={Credit} />
            <Route path="/topics" component={Topics} />
            <Route path="/questions" component={Questions} />
            <Route path="/thankyou" component={Thankyou} />
            <Route path="/technology" component={Technology} />
            <Route path="/history" component={History} />
            <Route path="/sports" component={Sports} />
            <Route path="/geography" component={Geography} />
            <Route path="/generalKnowledge" component={General} />
            <Route path="/answer" component={Answer} />
            {/* <Route path="/topics" component={Practice} /> */}

          </Switch>
        </>
      </Router>



    </div>
  );
}

export default App;
