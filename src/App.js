import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./screens/dashboard/Dashboard";
import HowToTrade from "./screens/HowToTrade/HowToTrade";
import SideBar from "./components/Sidebar/SideBar";
import Trade from "./screens/Trade/Trade";
import Account_Settings from "./screens/Account_Settings/Account_Settings";
import SignUp from "./screens/Authentication/SignUp";
import SignIn from "./screens/Authentication/SignIn";
import TradeHistory from "./screens/TradeHistory/Trade_History";
import Wallet from "./screens/Wallet/Wallet";
import Page2 from "./screens/TradeHistory/Page2";
import Page3 from "./screens/TradeHistory/Page3";
import Page4 from "./screens/TradeHistory/Page4";
import Page5 from "./screens/TradeHistory/Page5";
import Page6 from "./screens/TradeHistory/Page6";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup" exact component={SignUp} />
          <Route path="/signin" exact component={SignIn} />
          <SideBar>
            <Route exact path="/" component={Dashboard} />
            {/* <Redirect to="/dashboard" />
        </Route> */}
            {/* <Route path="/dashboard" exact component={Dashboard} /> */}
            <Route
              path="/dashboard"
              key="main-dashboard"
              component={Dashboard}
            />
            <Route path="/wallet" exact component={Wallet} />
            <Route path="/trade" exact component={Trade} />
            <Route path="/tradehistory" exact component={TradeHistory} />
            <Route path="/howtotrade" exact component={HowToTrade} />
            <Route path="/accountsettings" exact component={Account_Settings} />
            <Route path="/Page2" exact component={Page2} />
            <Route path="/Page3" exact component={Page3} />
            <Route path="/Page4" exact component={Page4} />
            <Route path="/Page5" exact component={Page5} />
            <Route path="/Page6" exact component={Page6} />
          </SideBar>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
