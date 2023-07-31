import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import Servers from "./components/Servers";

import Chat from "./components/chat-socket";

import SingleServer from "./components/SingleServer";
import ServerForm from "./components/ServerForm";
import DeleteServer from "./components/DeleteServer";
import EditServer from "./components/EditServer";
import ChannelTest from "./components/channel-socket";
import LandingPage from "./components/LandingPage";


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

          <Route exact path='/'>
            <LandingPage />
          </Route>

          <Route exact path='/channel/:channelId/:serverId'>
            <ChannelTest />
          </Route>

          <Route exact path='/chat'>
            <Chat />
          </Route>
          <Route exact path="/login" >
            <LoginFormPage />
          </Route>
          <Route exact path="/:userId/servers/edit/:serverId" >
            <EditServer />
          </Route>
          <Route exact path="/:userId/servers/delete/:serverId" >
            <DeleteServer/>
          </Route>
          <Route exact path="/:userId/servers/new" >
            <ServerForm />
          </Route>
          <Route exact path="/:userId/servers/:serverId" >//dont think we need this route its jsut for getting single server to edit
            <SingleServer />
          </Route>
          <Route exact path="/:userId/servers" >
            <Servers />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
