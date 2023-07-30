import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import Servers from "./components/Servers";
import Chat from "./components/chat-socket";
import ChannelTest from "./components/create-channel";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>

          <Route exact path='/chat'>
            <Chat />
          </Route>


          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route path="/:userId/servers" >
            <Servers />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
      <Route exact path="/login" >
            <LoginFormPage />
          </Route>
    </>
  );
}

export default App;
