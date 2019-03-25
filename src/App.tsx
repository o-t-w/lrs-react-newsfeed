import "@pixelpusher/atomize/dist/compile.css";
import "./App.scss";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import {
  IonApp,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonToggle
} from "@ionic/react";

import Card from "./components/Card";
import React from "react";

function App() {
  return (
    <IonApp>
      <IonContent>
        <div className="App">
          <IonToggle />
          <div className="grid mx-auto">
            <Card span={2} />
            <Card />
            <Card />
            <Card span={3} />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </IonContent>
    </IonApp>
  );
}

export default App;
