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

export default function Home(props) {
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
      <h1 style={{ color: "#E8E6E3" }}>{props.title}</h1>
      <div className={classes.root}>
        <Link
          to={props.location}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            textDecoration: "none",
          }}
        >
          <Button variant="contained">{props.locationName}</Button>
        </Link>
        <div style={{ marginBottom: 20 }} />
        <ReactPlayer url={props.url} controls={true} />
      </div>
    </div>
  );
}
