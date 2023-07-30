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

import SingleServer from "./components/SingleServer";
import ServerForm from "./components/ServerForm";
import DeleteServer from "./components/DeleteServer";
import EditServer from "./components/EditServer";


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
          <Route exact path="/:userId/servers/:serverId/:channelId" >
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
      <Route exact path="/login" >
            <LoginFormPage />
          </Route>
    </>
  );
}

export default App;
