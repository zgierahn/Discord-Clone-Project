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
import Channels from "./components/Channels";
import ChannelForm from "./components/ChannelForm";
import DeleteChannel from "./components/DeleteChannel";
import EditChannel from "./components/EditChannel";
import SingleChannel from "./components/SingleChannel";
import DeleteReaction from "./components/DeleteReaction";
import CreateReaction from "./components/CreateReaction";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <Switch>

          <Route exact path='/'>
            <Navigation isLoaded={isLoaded} />
            <LandingPage />
          </Route>

          {/* <Route exact path='/channel/:channelId/:serverId'>
            <ChannelTest />
          </Route> */}
          {/* <Route exact path='/:userId/servers/:serverId/channels'>
            <Channels />
          </Route> */}
          {/* <Route exact path='/chat'>
            <Chat />
          </Route> */}
          {/* <Route exact path='/:userId/message/:messageId/delete'>
            <DeleteMessage />
          </Route> */}

          <Route exact path="/login" >
            <LoginFormPage />
          </Route>
          <Route exact path="/:userId/servers/edit/:serverId" >
            <EditServer />
          </Route>
          <Route exact path="/:userId/messages/:messageId/reaction/new" >
            <CreateReaction />
          </Route>
          <Route exact path="/:userId/servers/:serverId/channels/edit/:channelId" >
            <EditChannel />
          </Route>
          <Route exact path="/:userId/servers/delete/:serverId" >
            <DeleteServer/>
          </Route>
          <Route exact path="/:userId/servers/:serverId/message/:messageId/reaction/:reactionId/delete" >
            <DeleteReaction/>
          </Route>
          <Route exact path="/:userId/servers/:serverId/channels/delete/:channelId" >
            <DeleteChannel/>
          </Route>
          <Route exact path="/:userId/servers/new" >
            <ServerForm />
          </Route>
          <Route exact path="/:userId/servers/:serverId/:channelId" >
            <SingleServer />
          </Route>
          <Route exact path="/:userId/servers/:serverId/channels/new" >
            <ChannelForm />
          </Route>
          <Route exact path="/:userId/servers/:serverId/channels/:channelId" >
            <SingleChannel />
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
