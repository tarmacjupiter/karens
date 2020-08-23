import React from "react";
import BorderWrapper from "react-border-wrapper";

export default function Reflection() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ textDecoration: "underline", marginTop: 30 }}>Reflection</h1>
      <p>For my teacher</p>
      <div style={{ margin: 50 }}>
        <BorderWrapper innerPadding={25}>
          <h3 style={{ fontSize: 25 }}>
            The target I was trying to bring attention to is a certain type of
            people called "Karens". This term is a slang definition for, "a
            women who is entitled or overly demanding beyond the scope of what
            is reasonable or neccesary." Many of these "Karens" are portrayed in
            the media, they are either screaming, causing a scene, or being
            arrested.
            <br />
            <br />
            Some methods I used in this assignment sarcasm and hyperboles. I
            joked around the fact that "Karens" dont know how to wear masks in
            public because they never wear them. But in reality, they do know
            how to wear masks, they just choose not to. Also, in my skit of
            pretending to be a "Karen", I was overly emphasizes the bad
            characteristics most "Karens" demonstrate. (Although, It may not be
            such an exaggertation.)
            <br />
            <br />
            The purpose of my satire was to make fun of the ridiculousness of
            how "Karens" act. From the previous videos you can see extreme cases
            of "Karens" being completely unreasonable, hostile, and loud.
          </h3>
        </BorderWrapper>
      </div>
    </div>
  );
}
