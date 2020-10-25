const body = document.querySelector("body");

const boxes = [
  [ // box 0 ------------------
    {
      tag: "h1",
      text: "Things I think I learned while I was learning and teaching art."
    },
    {
      tag: "p",
      text: "The world's a fucked up place man..."
    }
  ],
  [ // box 1 ------------------
    {
      tag: "p",
      text: "Once upon a midnight dreary, while I pondered, weak and weary. Over many a quaint and curious volume of forgotten lore. While I nodded, nearly napping, suddenly there came a tapping. As of some one gently rapping, rapping at my chamber door. 'Tis some visiter, I muttered, tapping at my chamber door. Only this, and nothing more. Ah, distinctly I remember it was in the bleak December. And each separate dying ember wrought its ghost upon the floor. Eagerly I wished the morrow;—vainly I had sought to borrow. From my books surcease of sorrow—sorrow for the lost Lenore. For the rare and radiant maiden whom the angels name Lenore. Nameless here for evermore. And the silken sad uncertain rustling of each purple curtain Thrilled me, filled me with fantastic terrors never felt before; So that now, to still the beating of my heart, I stood repeating Tis some visiter entreating entrance at my chamber door. Some late visiter entreating entrance at my chamber door. This it is, and nothing more."
    }
  ]
]

const spacer = (div, squish = true) => {
  const top = 50 + Math.random() * 100;
  const left = 50 + Math.random() * 100;
  let width;
  
  let string = `margin:${top}px 0 0 ${left}px;`
  if (squish) {
    width = 200 + Math.random() * 300;
  } else {
    width = div.style.width
    width = width.slice(0, width.length - 2)
  }
  string += `width:${width}px;`

  div.setAttribute("style", string);
}

const shifter = () => {
  const time = 250 + Math.floor(Math.random() * 30000) / boxes.length;

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
      ele.innerHTML = object.text;
      div.appendChild(ele)
    })

    spacer(div);
    body.appendChild(div);
  })

  shifter();
}

populate();