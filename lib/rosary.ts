// Rosary content — verified against standard Catholic sources.
// Sources: USCCB scripture references, Rosarium Virginis Mariae (St. John Paul II, 2002),
// and the traditional 15 Promises attributed to the Blessed Virgin Mary
// through St. Dominic and Bl. Alan de la Roche.

export type MysterySlug = "joyful" | "sorrowful" | "glorious" | "luminous";

export type Mystery = {
  number: 1 | 2 | 3 | 4 | 5;
  title: string;
  fruit: string;
  scriptureRef: string;
  scriptureText: string;
  meditation: string;
};

export type MysterySet = {
  slug: MysterySlug;
  name: string;
  shortName: string;
  prayedOn: string;
  intro: string;
  image: string;
  imageAlt: string;
  mysteries: Mystery[];
};

export const MYSTERY_SETS: Record<MysterySlug, MysterySet> = {
  joyful: {
    slug: "joyful",
    name: "The Joyful Mysteries",
    shortName: "Joyful",
    prayedOn: "Monday & Saturday",
    intro:
      "The Joyful Mysteries draw us into the wonder of the Incarnation — God-with-us, hidden in the womb of a humble virgin and the daily life of a holy family.",
    image: "/ourLadyofAfrica.jpg",
    imageAlt: "Our Lady of Africa",
    mysteries: [
      {
        number: 1,
        title: "The Annunciation",
        fruit: "Humility",
        scriptureRef: "Luke 1:26–38",
        scriptureText:
          "The angel said to her, “Do not be afraid, Mary, for you have found favor with God. Behold, you will conceive in your womb and bear a son, and you shall name him Jesus.” … Mary said, “Behold, I am the handmaid of the Lord. May it be done to me according to your word.”",
        meditation:
          "The angel Gabriel announces to the Blessed Virgin Mary that she has been chosen to be the Mother of God. Mary, with perfect trust, gives her fiat — her yes — and the Word becomes flesh within her.",
      },
      {
        number: 2,
        title: "The Visitation",
        fruit: "Love of neighbor",
        scriptureRef: "Luke 1:39–56",
        scriptureText:
          "When Elizabeth heard Mary’s greeting, the infant leaped in her womb, and Elizabeth, filled with the Holy Spirit, cried out in a loud voice and said, “Blessed are you among women, and blessed is the fruit of your womb.”",
        meditation:
          "Mary hastens to serve her cousin Elizabeth. At the sound of Mary’s greeting, John the Baptist leaps for joy in the womb. The first to recognize the presence of Christ is an unborn child.",
      },
      {
        number: 3,
        title: "The Nativity",
        fruit: "Poverty of spirit",
        scriptureRef: "Luke 2:1–20",
        scriptureText:
          "She gave birth to her firstborn son. She wrapped him in swaddling clothes and laid him in a manger, because there was no room for them in the inn.",
        meditation:
          "The Eternal Word is born in a stable. The King of Heaven is laid in a feeding trough. Shepherds — the poor and unnoticed — are the first to behold the face of God.",
      },
      {
        number: 4,
        title: "The Presentation in the Temple",
        fruit: "Obedience",
        scriptureRef: "Luke 2:22–38",
        scriptureText:
          "Simeon blessed them and said to Mary his mother, “Behold, this child is destined for the fall and rise of many in Israel, and to be a sign that will be contradicted — and you yourself a sword will pierce — so that the thoughts of many hearts may be revealed.”",
        meditation:
          "Mary and Joseph present the Child Jesus in the Temple, fulfilling the Law. Simeon prophesies the sword that will pierce Mary’s soul, foreshadowing her share in her Son’s passion.",
      },
      {
        number: 5,
        title: "The Finding of Jesus in the Temple",
        fruit: "Joy in finding Jesus",
        scriptureRef: "Luke 2:41–52",
        scriptureText:
          "After three days they found him in the temple, sitting in the midst of the teachers, listening to them and asking them questions. … He said to them, “Why were you looking for me? Did you not know that I must be in my Father’s house?”",
        meditation:
          "After three days of anxious searching, Mary and Joseph find Jesus in the Temple — a foreshadowing of the three days of the Tomb. He must always be about His Father’s business.",
      },
    ],
  },
  sorrowful: {
    slug: "sorrowful",
    name: "The Sorrowful Mysteries",
    shortName: "Sorrowful",
    prayedOn: "Tuesday & Friday",
    intro:
      "The Sorrowful Mysteries unite us to the Passion of Christ — the price of our redemption, poured out in love.",
    image: "/ourLadyofKibeho.jpg",
    imageAlt: "Our Lady of Kibeho",
    mysteries: [
      {
        number: 1,
        title: "The Agony in the Garden",
        fruit: "Sorrow for sin",
        scriptureRef: "Luke 22:39–46",
        scriptureText:
          "He was in such agony and he prayed so fervently that his sweat became like drops of blood falling on the ground. … “Father, if you are willing, take this cup away from me; still, not my will but yours be done.”",
        meditation:
          "In Gethsemane, Jesus takes the weight of every sin into His Sacred Heart. He sweats blood. And yet, He surrenders: not my will, but Yours be done.",
      },
      {
        number: 2,
        title: "The Scourging at the Pillar",
        fruit: "Purity",
        scriptureRef: "John 19:1; Isaiah 53:5",
        scriptureText:
          "Then Pilate took Jesus and had him scourged. … He was pierced for our offenses, crushed for our sins; upon him was the chastisement that makes us whole, by his stripes we were healed.",
        meditation:
          "The sinless Lamb is torn open for love of sinners. Every lash is a prayer for our purification, every wound a mouth crying mercy on us.",
      },
      {
        number: 3,
        title: "The Crowning with Thorns",
        fruit: "Courage",
        scriptureRef: "Matthew 27:27–31",
        scriptureText:
          "Weaving a crown out of thorns, they placed it on his head, and a reed in his right hand. And kneeling before him, they mocked him, saying, “Hail, King of the Jews!”",
        meditation:
          "Soldiers mock the King of Kings, crowning Him with thorns. Pride is dethroned by the meekness of the Lamb. He is silent, and His silence is His sermon.",
      },
      {
        number: 4,
        title: "The Carrying of the Cross",
        fruit: "Patience",
        scriptureRef: "Luke 23:26–32",
        scriptureText:
          "As they led him away they took hold of a certain Simon, a Cyrenian, who was coming in from the country; and after laying the cross on him, they made him carry it behind Jesus.",
        meditation:
          "Jesus walks the road of Calvary, bearing the wood of the cross. Mary meets Him on the way. He falls, and rises, and falls again — for us.",
      },
      {
        number: 5,
        title: "The Crucifixion and Death of Jesus",
        fruit: "Self-denial / love of enemies",
        scriptureRef: "Luke 23:33–46",
        scriptureText:
          "Jesus cried out in a loud voice, “Father, into your hands I commend my spirit”; and when he had said this he breathed his last.",
        meditation:
          "Christ is lifted up on the Cross. He forgives His executioners, opens paradise to the thief, gives His Mother to John — and to us — and surrenders His Spirit to the Father. It is finished. It is begun.",
      },
    ],
  },
  glorious: {
    slug: "glorious",
    name: "The Glorious Mysteries",
    shortName: "Glorious",
    prayedOn: "Wednesday & Sunday",
    intro:
      "The Glorious Mysteries open the doors of heaven — the triumph of Christ over death and the radiance of the life that has no end.",
    image: "/ourLadyofAfrica2.jpg",
    imageAlt: "Our Lady of Africa",
    mysteries: [
      {
        number: 1,
        title: "The Resurrection",
        fruit: "Faith",
        scriptureRef: "Matthew 28:1–10",
        scriptureText:
          "The angel said to the women in reply, “Do not be afraid! I know that you are seeking Jesus the crucified. He is not here, for he has been raised just as he said. Come and see the place where he lay.”",
        meditation:
          "On the third day, the tomb is empty. Death is undone. The wounds of love now shine like stars on the risen Body of the Lord.",
      },
      {
        number: 2,
        title: "The Ascension",
        fruit: "Hope / desire for heaven",
        scriptureRef: "Acts 1:6–11",
        scriptureText:
          "When he had said this, as they were looking on, he was lifted up, and a cloud took him from their sight. … “This Jesus who has been taken up from you into heaven will return in the same way as you have seen him going into heaven.”",
        meditation:
          "Jesus ascends to the right hand of the Father, opening heaven for us and promising to return. Our true home is no longer earth.",
      },
      {
        number: 3,
        title: "The Descent of the Holy Spirit at Pentecost",
        fruit: "Love of God / wisdom",
        scriptureRef: "Acts 2:1–4",
        scriptureText:
          "Suddenly there came from the sky a noise like a strong driving wind, and it filled the entire house in which they were. Then there appeared to them tongues as of fire, which parted and came to rest on each one of them.",
        meditation:
          "Mary and the apostles wait in prayer. The Holy Spirit descends as fire — and the Church is born. Fear becomes courage, silence becomes preaching, weakness becomes witness.",
      },
      {
        number: 4,
        title: "The Assumption of Mary into Heaven",
        fruit: "Grace of a happy death",
        scriptureRef: "Cf. Revelation 12:1; tradition of the Church",
        scriptureText:
          "A great sign appeared in the sky, a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars.",
        meditation:
          "At the close of her earthly life, Mary is taken body and soul into the glory of heaven — the first fruits of her Son’s Resurrection, the great sign of our own hope.",
      },
      {
        number: 5,
        title: "The Coronation of Mary as Queen of Heaven and Earth",
        fruit: "Trust in Mary’s intercession",
        scriptureRef: "Cf. Revelation 12:1",
        scriptureText:
          "On her head a crown of twelve stars. … The dragon became angry with the woman and went off to wage war against the rest of her offspring.",
        meditation:
          "The handmaid of the Lord is crowned Queen. She does not forget her children. She intercedes for us. She crushes the head of the serpent.",
      },
    ],
  },
  luminous: {
    slug: "luminous",
    name: "The Luminous Mysteries",
    shortName: "Luminous",
    prayedOn: "Thursday",
    intro:
      "Given to the Church by St. John Paul II in 2002 (Rosarium Virginis Mariae), the Luminous Mysteries — the Mysteries of Light — meditate on the public ministry of Jesus, from His Baptism to the Eucharist.",
    image: "/ourLadyofKibeho2.jpg",
    imageAlt: "Our Lady of Kibeho",
    mysteries: [
      {
        number: 1,
        title: "The Baptism of Jesus in the Jordan",
        fruit: "Openness to the Holy Spirit",
        scriptureRef: "Matthew 3:13–17",
        scriptureText:
          "After Jesus was baptized, he came up from the water and behold, the heavens were opened for him, and he saw the Spirit of God descending like a dove and coming upon him. And a voice came from the heavens, saying, “This is my beloved Son, with whom I am well pleased.”",
        meditation:
          "Heaven is torn open. The Father speaks, the Spirit descends, the Son is revealed. Our baptism, too, makes us beloved children of the Father.",
      },
      {
        number: 2,
        title: "The Wedding at Cana",
        fruit: "To Jesus through Mary",
        scriptureRef: "John 2:1–11",
        scriptureText:
          "His mother said to the servers, “Do whatever he tells you.” … Jesus did this as the beginning of his signs at Cana in Galilee and so revealed his glory, and his disciples began to believe in him.",
        meditation:
          "At Mary’s prayer, Jesus performs His first sign. Water becomes wine. She still says to us today: do whatever He tells you.",
      },
      {
        number: 3,
        title: "The Proclamation of the Kingdom of God",
        fruit: "Repentance and trust in God",
        scriptureRef: "Mark 1:14–15",
        scriptureText:
          "Jesus came to Galilee proclaiming the gospel of God: “This is the time of fulfillment. The kingdom of God is at hand. Repent, and believe in the gospel.”",
        meditation:
          "Jesus calls us to conversion. The Kingdom is not far — it is here, breaking in through every word and work of mercy.",
      },
      {
        number: 4,
        title: "The Transfiguration",
        fruit: "Desire for holiness",
        scriptureRef: "Matthew 17:1–8",
        scriptureText:
          "He was transfigured before them; his face shone like the sun and his clothes became white as light. … A bright cloud cast a shadow over them, then from the cloud came a voice that said, “This is my beloved Son, with whom I am well pleased; listen to him.”",
        meditation:
          "On Mount Tabor, Jesus is revealed in glory. For a moment, the disciples see Him as He is. He gives them this light to carry into the darkness of His Passion — and ours.",
      },
      {
        number: 5,
        title: "The Institution of the Holy Eucharist",
        fruit: "Eucharistic adoration / love of the Eucharist",
        scriptureRef: "Matthew 26:26–28",
        scriptureText:
          "While they were eating, Jesus took bread, said the blessing, broke it, and giving it to his disciples said, “Take and eat; this is my body.” Then he took a cup, gave thanks, and gave it to them, saying, “Drink from it, all of you, for this is my blood of the covenant, which will be shed on behalf of many for the forgiveness of sins.”",
        meditation:
          "On the night He is betrayed, Jesus gives us Himself — Body, Blood, Soul, and Divinity — under the appearance of bread and wine. The Cross and the Altar are one.",
      },
    ],
  },
};

export const MYSTERY_ORDER: MysterySlug[] = [
  "joyful",
  "sorrowful",
  "glorious",
  "luminous",
];

// The 15 Promises of the Holy Rosary
// Traditionally attributed to the Blessed Virgin Mary through St. Dominic
// and Blessed Alan de la Roche.
export const FIFTEEN_PROMISES: string[] = [
  "Whoever shall faithfully serve me by the recitation of the Rosary shall receive signal graces.",
  "I promise my special protection and the greatest graces to all those who shall recite the Rosary.",
  "The Rosary shall be a powerful armor against hell, it will destroy vice, decrease sin, and defeat heresies.",
  "It will cause virtue and good works to flourish; it will obtain for souls the abundant mercy of God; it will withdraw the hearts of men from the love of the world and its vanities, and will lift them to the desire of eternal things. Oh, that souls would sanctify themselves by this means.",
  "The soul which recommends itself to me by the recitation of the Rosary shall not perish.",
  "Whoever shall recite the Rosary devoutly, applying himself to the consideration of its sacred mysteries, shall never be conquered by misfortune. God will not chastise him in his justice, he shall not perish by an unprovided death; if he be just, he shall remain in the grace of God, and become worthy of eternal life.",
  "Whoever shall have a true devotion for the Rosary shall not die without the Sacraments of the Church.",
  "Those who are faithful to recite the Rosary shall have during their life and at their death the light of God and the plenitude of His graces; at the moment of death they shall participate in the merits of the saints in paradise.",
  "I shall deliver from purgatory those who have been devoted to the Rosary.",
  "The faithful children of the Rosary shall merit a high degree of glory in heaven.",
  "You shall obtain all you ask of me by the recitation of the Rosary.",
  "All those who propagate the Holy Rosary shall be aided by me in their necessities.",
  "I have obtained from my Divine Son that all the advocates of the Rosary shall have for intercessors the entire celestial court during their life and at the hour of death.",
  "All who recite the Rosary are my sons and daughters, and brothers and sisters of my only Son, Jesus Christ.",
  "Devotion to my Rosary is a great sign of predestination.",
];

// "Inspiration to start" — videos shown on the homepage in modal dialogs.
// User-provided sources. Titles/authors fetched from YouTube metadata.
export type InspirationVideo = {
  videoId: string;
  title: string;
  author: string;
  orientation?: "landscape" | "portrait";
};

export const INSPIRATION_VIDEOS: InspirationVideo[] = [
  {
    videoId: "5K-k60-glSE",
    title: "Pray the Rosary!",
    author: "Gabi After Hours",
  },
  {
    videoId: "xPOtHkcLEdY",
    title: "Gabriel Castillo Conversion",
    author: "Gabi After Hours",
  },
  {
    videoId: "lBdrG_D0YsE",
    title: "When Apologetics Fails",
    author: "Gabi After Hours",
  },
  {
    videoId: "2bPTC6xdFow",
    title: "The Virgin Mary and The Protestant Minister",
    author: "Gabi After Hours",
  },
  {
    videoId: "RwWOn5vinFk",
    title: "An Easy way to be a Saint",
    author: "Gabi After Hours",
  },
  {
    videoId: "eDrrkvjguDY",
    title: "I ran to the Devil, but Mary caught me",
    author: "Gabi After Hours",
  },
  {
    videoId: "MuAyDtqpkqU",
    title: "15 Promises of The Rosary Simply Explained (2026)",
    author: "Cameron Riecker",
  },
];

// Pray-along channels — guided rosary videos grouped by channel and mystery.
export type PrayVideo = {
  mystery: MysterySlug | "all";
  videoId: string;
  youtubeTitle: string;
};

export type PrayChannel = {
  slug: string;
  name: string;
  presenter?: string;
  description: string;
  videos: PrayVideo[];
};

export const PRAY_CHANNELS: PrayChannel[] = [
  {
    slug: "ascension-presents",
    name: "Ascension Presents",
    presenter: "Fr. Mike Schmitz",
    description:
      "Fr. Mike Schmitz prays each set of mysteries paired with sacred art — reverent, scripture-rooted, and steady.",
    videos: [
      {
        mystery: "joyful",
        videoId: "gdZuweae75M",
        youtubeTitle:
          "The Joyful Mysteries of the Rosary with Fr. Mike Schmitz (Sacred Art Version)",
      },
      {
        mystery: "sorrowful",
        videoId: "fucgiDu-Fd0",
        youtubeTitle:
          "Pray with Us: The Sorrowful Mysteries of the Rosary with Fr. Mike Schmitz (Tuesdays & Fridays)",
      },
      {
        mystery: "glorious",
        videoId: "hSYGWGFl-W8",
        youtubeTitle:
          "Pray the Glorious Mysteries of the Rosary with Fr. Mike Schmitz (Sacred Art Version)",
      },
      {
        mystery: "luminous",
        videoId: "11dVyWAm_GM",
        youtubeTitle:
          "The Luminous Mysteries of the Rosary with Fr. Mike Schmitz (Sacred Art Version)",
      },
    ],
  },
  {
    slug: "catholic-minute",
    name: "Catholic Minute",
    presenter: "Ken Yasinski",
    description:
      "Ken Yasinski leads a calm, steady rosary that is easy to pray along with — good for daily use.",
    videos: [
      {
        mystery: "joyful",
        videoId: "GkMf8gh2HOQ",
        youtubeTitle: "Holy Rosary - Joyful Mysteries (Saturday & Monday)",
      },
      {
        mystery: "sorrowful",
        videoId: "J1k1kUKsR0k",
        youtubeTitle:
          "HOLY ROSARY - Sorrowful Mysteries: Tuesday & Friday (Catholic)",
      },
      {
        mystery: "glorious",
        videoId: "gMdvx7DrDEM",
        youtubeTitle: "HOLY ROSARY - Glorious Mysteries (Sunday & Wednesday)",
      },
      {
        mystery: "luminous",
        videoId: "QvnVQ2xizVA",
        youtubeTitle: "HOLY ROSARY - Luminous Mysteries [Thursday]",
      },
      {
        mystery: "all",
        videoId: "MhTHMBdyXBg",
        youtubeTitle: "Rosary All Mysteries (20 Decades)",
      },
    ],
  },
  {
    slug: "my-mother-mary",
    name: "My Mother Mary",
    description:
      "A quiet, prayerful version of the rosary — simple, devotional, and unhurried.",
    videos: [
      {
        mystery: "joyful",
        videoId: "gTQRMyxqDhU",
        youtubeTitle: "Holy Rosary - Joyful Mysteries - Monday & Saturday",
      },
      {
        mystery: "sorrowful",
        videoId: "9brjjCeaHgc",
        youtubeTitle: "Holy Rosary - Sorrowful Mysteries - Tuesday & Friday",
      },
      {
        mystery: "glorious",
        videoId: "__esFrmpYcA",
        youtubeTitle: "Holy Rosary - Glorious Mysteries - Wednesday & Sunday",
      },
      {
        mystery: "luminous",
        videoId: "r8TePYRBvMk",
        youtubeTitle: "Holy Rosary - Luminous Mysteries - Thursday",
      },
    ],
  },
];

// Display label for a video's mystery slot in the pray-along grid.
export function prayVideoLabel(v: PrayVideo): string {
  if (v.mystery === "all") return "All Mysteries (20 decades)";
  return MYSTERY_SETS[v.mystery].name;
}

// Gregorian chant rosary videos — sung in the ancient liturgical tradition.
export type GregorianVideo = {
  videoId: string;
  title: string;
  author: string;
  description: string;
};

export const GREGORIAN_VIDEOS: GregorianVideo[] = [
  {
    videoId: "s95rz_GKZek",
    title: "Rosary to Calm the Mind and Heal the Heart — Gregorian Chant",
    author: "Celestial Gregorian Chant",
    description:
      "A sung rosary in the Gregorian tradition — chant carrying the prayers of the Church across centuries. Quiet, slow, and healing.",
  },
  {
    videoId: "8HiLJSA1xCQ",
    title:
      "This Rosary Calms the Mind and Ends the Night Anxiety | Gregorian Chant",
    author: "Gregorian Chants Global",
    description:
      "A second Gregorian version — gentle and steady. A good companion at the end of an anxious day.",
  },
];

// Donna's sung rosaries — the rosary set to song. Files in /public/01-donna
export type DonnaTrack = {
  title: string;
  file: string;
  description: string;
};

export const DONNA_TRACKS: DonnaTrack[] = [
  {
    title: "The Joyful Mysteries — sung by Donna",
    file: "/01-donna/1-The-Joyful-Mystery.mp3",
    description: "Monday & Saturday — the Incarnation and hidden life of Jesus.",
  },
  {
    title: "The Sorrowful Mysteries — sung by Donna",
    file: "/01-donna/2-The-Sorrowful-Mysteries.mp3",
    description: "Tuesday & Friday — the Passion of Our Lord.",
  },
  {
    title: "The Luminous Mysteries — sung by Donna",
    file: "/01-donna/3-The-Luminous-Mysteries.mp3",
    description: "Thursday — the Mysteries of Light, the public ministry of Christ.",
  },
  {
    title: "The Glorious Mysteries — sung by Donna",
    file: "/01-donna/5-The-Glorious-Mysteries.mp3",
    description: "Wednesday & Sunday — the Resurrection and the life of glory.",
  },
  {
    title: "Hail Mary — a cappella, sung by Donna",
    file: "/01-donna/4-Hail-Mary-Accapella.mp3",
    description: "A sung Ave Maria for quiet meditation.",
  },
];

// Marian writeups — apparitions, devotions, and other Marian facts.
// Verified against publicly available Catholic sources; kept brief and devotional.
export type MarianDevotion = {
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  feastDay?: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  invocation: string;
};

export const MARIAN_DEVOTIONS: MarianDevotion[] = [
  {
    slug: "our-lady-of-kibeho",
    title: "Our Lady of Kibeho",
    subtitle: "Nyina wa Jambo — Mother of the Word",
    location: "Kibeho, Rwanda",
    feastDay: "November 28",
    image: "/ourLadyofKibeho.jpg",
    imageAlt: "Our Lady of Kibeho",
    paragraphs: [
      "On November 28, 1981, the Blessed Virgin Mary appeared at the Kibeho College for Girls in southern Rwanda. The first visionary, Alphonsine Mumureke, was joined in the following months by Nathalie Mukamazimpaka and Marie Claire Mukangango. To these three young women — and through them, to the whole world — Our Lady identified herself in Kinyarwanda as Nyina wa Jambo, the Mother of the Word.",
      "She called the people of Rwanda, and through them all of us, to conversion of heart, to deep and sincere prayer, to fasting, to repentance for sin, and especially to a renewed love of the Holy Rosary and the Seven Sorrows of Mary. She warned, with sorrow, of a great calamity to come if hearts did not turn back to God — words that many would later remember in the bitter aftermath of the 1994 Rwandan genocide.",
      "On June 29, 2001, the local bishop, with the approval of the Holy See, formally recognized the apparitions of Our Lady to the three principal visionaries as authentic. To this day, Kibeho is the only Marian apparition site on the African continent officially recognized by the Catholic Church.",
    ],
    invocation: "Our Lady of Kibeho, Mother of the Word — pray for us.",
  },
  {
    slug: "our-lady-of-africa",
    title: "Our Lady of Africa",
    subtitle: "Notre-Dame d'Afrique — Mother of a Continent",
    location: "Algiers, Algeria",
    feastDay: "April 30",
    image: "/ourLadyofAfrica2.jpg",
    imageAlt: "Our Lady of Africa",
    paragraphs: [
      "On a hilltop overlooking the Bay of Algiers stands the Basilica of Notre-Dame d’Afrique — Our Lady of Africa. Its foundation was laid in 1858, and the basilica was consecrated in 1872, the work of Cardinal Charles Lavigerie and the missionary congregation he founded, the Society of the Missionaries of Africa (the “White Fathers”).",
      "Inside, a quiet bronze statue of Our Lady has received the prayers of pilgrims for over a century and a half. Above the altar is one of the most beautiful inscriptions in Catholic devotion: “Notre Dame d’Afrique, priez pour nous et pour les musulmans” — “Our Lady of Africa, pray for us and for the Muslims.” A mother does not divide her children.",
      "The title and the shrine together hold up a particular intention: that the Mother of God would gather all the peoples of Africa, Christian and Muslim alike, under her mantle, and lead each one to her Son.",
    ],
    invocation: "Our Lady of Africa, pray for us and for all who live on this continent.",
  },
  {
    slug: "our-lady-of-guadalupe",
    title: "Our Lady of Guadalupe",
    subtitle: "La Morenita — Patroness of the Americas",
    location: "Tepeyac Hill, Mexico City",
    feastDay: "December 12",
    image: "/ourLadyofGuadalupe.jpg",
    imageAlt: "Our Lady of Guadalupe",
    paragraphs: [
      "Between December 9 and 12, 1531, the Blessed Virgin Mary appeared four times to a humble Nahua convert, Saint Juan Diego Cuauhtlatoatzin, on the hill of Tepeyac just north of Mexico City. Speaking to him in his native Nahuatl, she called herself the perfect ever-Virgin Holy Mary, Mother of the true God by whom we live, and asked that a church be built on that hill where she could show her love, compassion, and protection to all who would come to her.",
      "When the bishop asked for a sign, Our Lady sent Juan Diego up the hill in the cold of December and there he found Castilian roses blooming where only cactus and rock should grow. He gathered them into his tilma — a rough cactus-fiber cloak — and carried them down. When he opened the tilma before the bishop, the roses fell to the floor and on the cloth itself was a miraculous image of Our Lady: a young, dark-skinned, expectant mother, clothed with the sun, the moon under her feet, her hands joined in prayer.",
      "In the years that followed, some nine million indigenous people across Mexico were baptized into the Catholic faith. The tilma, which should have crumbled to dust within twenty years, has now hung for nearly five centuries in the Basilica of Our Lady of Guadalupe in Mexico City. In 1945, Pope Pius XII proclaimed her Patroness of the Americas, and in 1999 Saint John Paul II named her Mother and Star of the New Evangelization.",
    ],
    invocation: "Our Lady of Guadalupe, Mother of the Americas — pray for us.",
  },
];

// Suggested mystery for today, by day of week (per Catholic tradition).
export function mysteryForToday(date = new Date()): MysterySlug {
  // 0 Sun, 1 Mon, 2 Tue, 3 Wed, 4 Thu, 5 Fri, 6 Sat
  const day = date.getDay();
  if (day === 1 || day === 6) return "joyful";
  if (day === 2 || day === 5) return "sorrowful";
  if (day === 4) return "luminous";
  return "glorious"; // Sunday & Wednesday
}
