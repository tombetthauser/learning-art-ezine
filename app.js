const body = document.querySelector("body");

const spacer = (div, squish = true) => {
  const top = 50 + Math.random() * 100;
  const left = 50 + Math.random() * 100;
  let width;
  
  let string = `margin:${top}px 0 0 ${left}px;`
  if (squish) {
    width = 300 + Math.random() * 300;
  } else {
    width = div.style.width
    width = width.slice(0, width.length - 2)
  }
  string += `width:${width}px;`

  div.setAttribute("style", string);
}

const shifter = () => {
  const time = 250 + Math.floor(Math.random() * 300000) / boxes.length;

  setTimeout(() => {
    console.log(`Setting new shift timeout for ${time / 1000} seconds.`)
    const boxes = document.querySelectorAll('.box');
    const box = boxes[Math.floor(Math.random() * boxes.length)];

    spacer(box)
    shifter();
  }, time);
}

const populate = () => {
  boxes.forEach(box => {
    const div = document.createElement("div");
    div.setAttribute("class", "box")
    
    box.forEach(object => {
      const ele = document.createElement(object.tag);
      if (object.tag === "img") {
        ele.setAttribute("src", object.src);
      } else {
        ele.innerHTML = object.text;
      }
      div.appendChild(ele)
    })

    spacer(div);
    body.appendChild(div);
  })

  shifter();
}

populate();