const body = document.querySelector("body");

const blocks = [
  [
    {
      tag: "h1",
      text: "Things I think I learned while I was learning and teaching art."
    },
    {
      tag: "p",
      text: "The world's a fucked up place man..."
    }
  ]
]

const spacer = div => {
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  const width = 200 + Math.random() * 300;

  div.setAttribute("style", `margin:${top}px 0 0 ${left}px; width:${width}px`);
}

const populate = () => {
  blocks.forEach(block => {
    const div = document.createElement("div");
    div.setAttribute("class", "box")
    
    block.forEach(object => {
      const ele = document.createElement(object.tag);
      ele.innerHTML = object.text;
      div.appendChild(ele)
    })

    spacer(div);
    body.appendChild(div);
  })
}

populate();