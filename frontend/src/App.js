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

function App() {
  return (
    <div>
      <Logo />
      <CopyUrl />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to={`/documents/${uuidV4()}`} />
          </Route>
          <Route path="/documents/:id">
            <TextEditor />
          </Route>
        </Switch>
      </Router>
      <PDFfn />
    </div>
  );
}

export default App;
