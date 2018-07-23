import React from "react";
import { render } from "react-dom";

const ce = React.createElement;

const MyTitle = function(props) {
  return ce(
    "div",
    null,
    ce("h1", { style: { color: props.color } }, props.title)
  );
};

const MyFirstComponent = function() {
  return ce(
    "div",
    { id: "my-first-component" },
    ce(MyTitle, { title: "Rick and Morty", color: "Red" }),
    ce(MyTitle, { title: "Rick and Morty", color: "Teal" }),
    ce(MyTitle, { title: "Rick and Morty", color: "Lime" }),
    ce(MyTitle, { title: "Rick and Morty", color: "Peru" }),
    [ce(MyTitle), ce(MyTitle), ce(MyTitle)],
    ce("h1", null, "My first component!")
  );
};

render(ce(MyFirstComponent), document.getElementById("app"));
