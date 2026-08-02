const colors = [
  "red",
  "crimson",
  "tomato",
  "coral",
  "salmon",
  "darkred",
  "firebrick",
  "indianred",
  "orangered",
  "maroon",
  "pink",
  "hotpink",
  "deeppink",
  "lightpink",
  "palevioletred",
  "mediumvioletred",
  "purple",
  "violet",
  "plum",
  "orchid",
  "mediumorchid",
  "darkorchid",
  "blueviolet",
  "darkviolet",
  "magenta",
  "fuchsia",
  "indigo",
  "lavender",
  "thistle",
  "rebeccapurple",
  "blue",
  "dodgerblue",
  "deepskyblue",
  "lightskyblue",
  "skyblue",
  "steelblue",
  "royalblue",
  "cornflowerblue",
  "mediumblue",
  "navy",
  "midnightblue",
  "cyan",
  "aqua",
  "turquoise",
  "darkturquoise",
  "mediumturquoise",
  "paleturquoise",
  "lightseagreen",
  "teal",
  "cadetblue",
  "green",
  "lime",
  "limegreen",
  "forestgreen",
  "darkgreen",
  "seagreen",
  "mediumseagreen",
  "springgreen",
  "mediumspringgreen",
  "lawngreen",
  "greenyellow",
  "chartreuse",
  "yellowgreen",
  "olive",
  "olivedrab",
  "darkolivegreen",
  "palegreen",
  "lightgreen",
  "mintcream",
  "yellow",
  "gold",
  "goldenrod",
  "darkgoldenrod",
  "khaki",
  "darkkhaki",
  "lemonchiffon",
  "lightyellow",
  "beige",
  "ivory",
  "orange",
  "darkorange",
  "peachpuff",
  "moccasin",
  "bisque",
  "wheat",
  "tan",
  "chocolate",
  "sienna",
  "saddlebrown",
  "brown",
  "peru",
  "white",
  "snow",
  "whitesmoke",
  "gainsboro",
  "silver",
  "gray",
  "dimgray",
  "darkgray",
  "black",
];
let count = 0;
const el = document.getElementById("sara-arjun");

function ChangeColor() {
  count = count + 1;

  el.style.color = colors[count];

  if (count === colors.length) {
    count = 0;
  }

  el.style.color = colors[count];

  // Scale up
  el.style.transform = "scale(1.2)";

  // Scale back down
  setTimeout(() => {
    el.style.transform = "scale(1)";
  }, 200);
}
