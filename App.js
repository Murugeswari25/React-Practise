import React from "react";
import { createRoot } from "react-dom/client";

const heading = React.createElement("h1", {}, "Hello World form React!");
const root = createRoot(document.getElementById("root"));
root.render(heading);

const parent = React.createElement("div", {id: "parent"},
    React.createElement("div",{id: "child1"},
        React.createElement("h1",{}, "Hi, I'm the child one"),
        React.createElement("h2",{}, "Hi, I'm the child two"),
    ),
    React.createElement("div",{id: "child2"},
        React.createElement("p",{}, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, distinctio!")
    )
);
const headings = createRoot(document.getElementById("headings"));
headings.render(parent);