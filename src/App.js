import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Admin from "./Components/Backend/Admin/Admin";
import AddCategory from "./Components/Backend/Category/AddCategory";
import Category from "./Components/Backend/Category/Category";
import EditCategory from "./Components/Backend/Category/EditCategory";
import TopBar from "./Components/Backend/TopBar/TopBar";
function App() {
  return (
    <Router>
      <TopBar></TopBar>
      <Switch>
        <Route exact path="/">
          <h1>Home Page</h1>
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/category">
          <>
            <Category />
          </>
        </Route>
        <Route exact path="/category/add">
          <AddCategory />
        </Route>
        <Route exact path="/category/edit/:id">
          <EditCategory />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
