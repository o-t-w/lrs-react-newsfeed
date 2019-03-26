import {
  IonAvatar,
  IonButton,
  IonChip,
  IonIcon,
  IonLabel,
  IonToolbar
} from "@ionic/react";
import React, { useRef } from "react";
import { css, jsx } from "@emotion/core";

import frusions from "../frusions.png";
/** @jsx jsx */
// import Pill from "./Pill";
import nev from "../nev.png";
import ribena from "../ribena.webp";
import useComponentSize from "@rehooks/component-size";

function Card(props: any) {
  const ref = useRef(null);

  let size = useComponentSize(ref);
  let { width } = size;

  const style = css({
    color: "var(--white)",
    backgroundColor: "var(--dark2)",
    boxShadow: "rgba(0,0,0, .5) 0px 2px 8px",
    // borderRadius: 5,
    overflow: "hidden",
    display: "flex",
    flexDirection: width > 600 ? "row" : "column",
    "& > div": {
      marginLeft: 15,
      marginRight: 15,
      marginTop: width > 600 ? 0 : 10,
      flex: 1
    },
    "& img": {
      maxHeight: 300,
      objectFit: "cover",
      flex: 1
    }
  });

  return (
    <div css={style} ref={ref}>
      <img src={frusions} alt="" />
      <div>
        <div className="flex mb15">
          <img src={nev} className="small circle flex0" />

          <div className="ml10 min-height self-center">
            <h2 className="text-base h5 m0">Nev</h2>
            <h3 className="text-sm gray m0">29 March 2019</h3>
          </div>
          <IonChip color="tertiary" class="ml-auto" outline={true}>
            <IonLabel>category</IonLabel>
          </IonChip>
          {/* <Pill>lorem ipsum</Pill> */}
        </div>
        <h2 className="mb10 mt0">Introducing Frusions</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          molestiae, vitae esse et dignissimos consequuntur provident eligendi
          labore beatae laboriosam.
        </p>
        <div className="flex child-flex-1 border-top icon-container">
          <IonButton fill="clear">
            <IonIcon slot="icon-only" size="large" name="thumbs-up" />
          </IonButton>
          <IonButton fill="clear">
            <IonIcon size="large" name="star-outline" />
          </IonButton>
          <IonButton fill="clear">
            <IonIcon size="large" name="heart" />
          </IonButton>
          <IonButton fill="clear">
            <IonIcon size="large" name="ios-more" />
          </IonButton>
        </div>
      </div>
    </div>
  );
}

export default Card;
