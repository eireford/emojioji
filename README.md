# Emojioji

[![CircleCI](https://circleci.com/gh/eireford/emojioji.svg?style=svg)](https://circleci.com/gh/eireford/emojioji) CircleCI Build Status

### What it is.
Emojioji is development sandbox made with Angular for Firebase.

### What it does.

Emojioji lets people make and share imaginary places called Oji that are populated by Emoji.
As members of an Oji, some Emoji gain the ability to do things.

- Move
- Send and receive messages
- Make changes to themselves and other Emoji.
- Follow instructions and make choices based on experience.

#### What its built with.

- TypeScript, Angular
- Angular Material
- AngularFire
- ngX-Rocket generator
- Webpack, Sass
- Jest, Karma, Protractor, Puppeteer
- TSLint, Codelyzer, HTMLHint, StyleLint
- ngx-translate
- Firebase
  - Realtime Database (RTDB)
  - FireStore
  - Cloud Storage
- Tensorflow

#### What makes it distributable.

Emojioji employs uses common strategies implement simple web services that are backed by distributable tensorflow operations.

- Oji:
    - synchronized tables in Firebase RTDB
    - Dense Tensors of UUID Emoji keys
- Emoji: 
    - versioned JSON in Firestore
    - structured sparse data
        - UUID keys
        - emoji icons, 
        - short name
        - Observables of JSON data
    - Can Be Agents
        - send and receive messages
        - change internal state 
- Simulation engine that will for each phase,
    1) executes all emoji agents
        - agent receives current context
            - position
            - locations of close neighbors
        - agent generates messages
    2) receives and delivers messages
    3) processes messages it has received
        - update emoji locations
        - add and remove emoji
        
## What will it be able to do.

Coming Soon! :)

- ~~multiplayer games~~
  - ~~dungeon crawler~~
  - ~~go~~
  - ~~checkers~~
  - ~~chess~~
  - ~~poker~~
- ~~postings~~
  - ~~status~~
  - ~~messages~~
- ~~sharable services~~
  - ~~take a number~~
  - ~~todo~~
  - ~~shopping list~~
