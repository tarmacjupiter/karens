import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function WhatdoWeDo(props) {
  const classes = useStyles();

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "#E8E6E3" }}>What do we do about these Karens?</h2>
      <div className={classes.root}>
        <div style={{ flexDirection: "column", display: "flex" }}>
          <Link
            to="/reflection"
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              textDecoration: "none",
            }}
          >
            <Button variant="contained">Reflection</Button>
          </Link>
          <div style={{ margin: 10 }} />
          <div
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              textDecoration: "none",
            }}
          >
            <a
              style={{ textDecoration: "none", marginBottom: 10 }}
              target="_blank"
              href="https://github.com/tarmacjupiter/karens"
            >
              <Button variant="contained">GitHub</Button>
            </a>
          </div>
        </div>

        <ReactPlayer
          url="https://www.youtube.com/watch?v=KVcJDhBsQXQ"
          controls={true}
        />
      </div>
    </div>
  );
}
