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
        "<li>francescalorusso</li>" +
        "<li>emilyadams</li>" 
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
      text: "I studied painting at the San Francisco Art Institute and then Yale as a grad student. Then I taught painting and art history at some colleges across California for the better part of a decade. Recently I realized that teaching can't really support most people who do it and I started working as a software engineer. I'm still an artist though. These are just some thoughts that I wanted to write down before I forget them."
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
  ],
  [ // box 3 ------------------
    {
      tag: "img",
      src: "https://lh3.googleusercontent.com/proxy/b6FHY-WxW3OoPam0pZ8ZEiG6IOG6X4jTj5JcIGSrkAVn_oSFtapllGbOYksCOjcPKhnevLXeCvQ-lHA6GwIz67_yY98"
    },
    {
      tag: "h3",
      text: "Self expression is the exception, not the rule."
    },{
      tag: "p",
      text: "Many people assume that part of the fundamental definition of art is that it's free, and that if you aren't doing whatever you want then it's not really fine art. But for the vast majority of cultural history in most parts of the world the production of art was a mid-level or low-level working class occupation where artists made what they were told or paid to make. It's exceedingly rare to see examples of Egyptian or Mayan art where the artist is freely exploring their own psyche or creative voice, but if a 20th or 21st century artist isn't humanistically celebrating their individuality they might not even be identified as fine artists. There is value in both kinds of work, but it's important to note that these are two very different sets of cultural values and at the very least we should recognize that individual free expression is the exception not the rule and that if value it we may at some point need to take serious measures to ensure it's continuity."
    },
  ],
  [ // box 4 ------------------
    {
      tag: "h3",
      text: "Three days in the studio, try for four."
    },{
      tag: "p",
      text: "This one is about practicing art, not art history. When I got into grad school, I looked up to Rob Storr with a Pete Seeger level of folk hero reverence. He was the dean of the Yale School of Art while I was there and my proudest moment was selling a small painting of my even smaller studio apartment to him at the end of my time there. I think the most important thing I ever heard him say was that all we had to do to be artists after we graduated was to get into our studios three days a week, and to always try to make it four. And that all we had to seek in our studios were embers worth blowing on for years or decades. For those of us that faced challanging futures wrought with the frustrations of balancing our studio schedules with the necessity to work two or three jobs at a time to make ends meet these words were immeasurably empowering. They helped get me through some of the most difficult periods of my life."
    },
  ],
  [ // box 4 ------------------
    {
      tag: "img",
      src: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fstartswithabang%2Ffiles%2F2016%2F11%2F999px-Nasa_blue_marble.jpg"
    },
    {
      tag: "h3",
      text: "In the end, it might be all we have."
    },{
      tag: "p",
      text: "I was born in San Francisco and grew up in different parts of the bay area often around a lot of rich people. I never thought of us as poor because my parents worked in the arts and for cultural institutions, but rich and poor are relative terms. In any case I saw first hand what people do with their time when they no longer have to worry about money, and it consists of a healthy mix of yoga, expensive coffee and on the productive end music and visual art. In my more optimistic moments I can imagine a future that follows the most positive of neo-liberal bedtime stories where technology gradually replaces workforces and creates the economic abundance necessary for a universal basic income and we find ourselves in a eutopic post-labor state of everlasting global peace. In this world the only labor that would still be best done by humans would be the production of art. It seems to me that that may already be the direction in which art is headed. The non-automatable. I wouldn't be altogether suprised if the reason no advanced alien civilizations have contacted us is because they are all too busy painting and playing in their ameature jazz bands in between pilates classes. In any case my point is that making art may be the only thing we have left to do, if everything goes rediculously well for our species. This was often my justification for why my art courses were considered required classes for students getting economics and biology degrees."
    },
  ],
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