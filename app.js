const body = document.querySelector("body");

const boxes2 = [
  [
    {
      tag: "h1",
      text: "🤔 how are you <br>🤔 i miss you<br>🤔 are you ok?"
    },
    {
      tag: 'ul',
      text: "<li>erinkaczkowski</li>" +
        "<li>tombetthauser</li>" +
        "<li>danieltrejo</li>" +
        "<li>justinamartino</li>" +
        "<li>ivanbridges</li>" +
        "<li>raebridges</li>" +
        "<li>jeffersonjenson</li>" +
        "<li>jenjefferson</li>" +
        "<li>kikijohnson</li>" +
        "<li>danielherwitt</li>" +
        "<li>evannesbit</li>" +
        "<li>michellfishugh</li>" +
        "<li>francescalorusso</li>"
    }  
  ],
  [
    {
      tag: "p",
      text: "I miss my friends, I miss their art, I miss getting to see them in person. It's an oppourtunity to –I don't want to say connect, it's a meaningless word– it's a way for us to come together, to have our work come together. A way to see our community I guess? This is what our community looks like, this is what our friends look like. I don't know, that's probably all too sentimental..."
    }
  ]
]

const boxes = [
  [ // box 0 ------------------
    {
      tag: "h1",
      text: "Things I think I learned while I was learning and teaching art."
    },
    {
      tag: "p",
      text: "I studied painting at the San Francisco Art Institute and then Yale as a grad student. Then I taught painting and art history at some colleges across California for the better part of a decade. Recently I realized that teaching can't really support most people who do it and I started working as a software engineer. I'm still an artist though. These are just some things I learned that I wanted to write down before I forget them."
    }
  ],
  [ // box 1 ------------------
    {
      tag: "img",
      src: "https://www.donsmaps.com/images33/pebbleface.jpg"
    },
    {
      tag: "h3",
      text: "Art is the oldest thing ever."
    },{
      tag: "p",
      text: "Visual art and music are the oldest activities that distinguish us from other animals. We share these activities in common only with other archaic proto-humans such as Neanderthals. The earliest direct evidence of visual art and music hovers around 75-50,000 years ago and primarily takes the form of preserved cave paintings, sculptures and bone flutes. The oldest indirect evidence of pigment grinding and mixing however dates back to approximately 400,000 years ago, we just don't know what was being painted. It is plausible enough that paintings were just being made outdoors or as body art and because all paintings from this period were water soluable they naturally wouldn't have been preserved. Cave paintings are all water soluable too and are so sensitive they get damaged when people breath on them. Really it's amazing that we have any preserved pre-historic paintings at all. And indirect evidence that proto-humans valued objects purely for thier aesthetic qualities goes back even further, to one of the strangest art historical objects of all time, the Makapansgat Cobble. It's a small stone that appears to have a face that was carried around seemingly for several generations by a group of Australopithecus 2.8 million years ago. It's horrifying."
    }
  ],
  [ // box 2 ------------------
    {
      tag: "h3",
      text: "It began in Africa."
    },{
      tag: "p",
      text: "There's a somewhat common misconception that the oldest visual art is found in France, Spain and Germany. This is super inaccurate, the oldest evidence of visual art is found in East Africa and South Africa. Often we only have the implements of pre-historic African art production or incomplete artworks as the oldest examples, wheras many of the oldest European works have been shockingly well preserved. This might just be due to differences in geology, with Europe simply having more caves whose walls were better suited to preserving paintings. But there's also a better than good chance that European nationalism and concepts of historical narrative also played some kind of role in this descrepency. In any case when we learn about the origins of art history books often start by focusing on European cave paintings because we have so many well preserved examples of them, but archaic proto-humans were clearly making visual art at least 200,000 years before anyone in Europe, even if most of it hasn't been preserved."
    }
  ]
]

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
      if (object.tag === "img") {
        alert(ele)
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