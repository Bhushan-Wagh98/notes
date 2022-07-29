import TextEditor from "./TextEditor";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import Logo from "./Logo";
import CopyUrl from "./CopyUrl";
import PDFfn from "./PDF";
import Helpfn from "./Help";

function App() {
  return (
    <div>
      <Logo />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to={`/documents/${uuidV4()}`} />
          </Route>
          <Route path="/documents/:id">
            <CopyUrl />
            <TextEditor />
            <PDFfn />
          </Route>
          <Route path="/help" exact>
            <Helpfn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
