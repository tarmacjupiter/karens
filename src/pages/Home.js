import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

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
      <h1>{props.title}</h1>
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
      </div>
    </div>
  );
}
