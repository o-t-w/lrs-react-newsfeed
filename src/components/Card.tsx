/** @jsx jsx */

import { IonButton, IonIcon } from "@ionic/react";
import React, { useRef } from "react";
import { css, jsx } from "@emotion/core";

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
    borderRadius: 5,
    overflow: "hidden",
    display: "flex",
    flexDirection: width > 600 ? "row" : "column",
    "& div": {
      marginTop: width > 600 ? 0 : 10,
      flex: 1
    },
    "& img": {
      objectFit: "cover",
      flex: 1
    },
    "& h2": {
      paddingLeft: 10,
      paddingRight: 10,
      marginBottom: 10
    },
    "& p": {
      paddingLeft: 10,
      paddingRight: 10
    }
  });

  return (
    <div css={style} ref={ref}>
      <img src={ribena} alt="" />
      <div>
        <h2>placeholder</h2>
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
