# Emojioji

## Overview

Emojioji is lets users make and share imaginary places, called Oji, that are populated by Emoji.
As members of an Oji, Emoji gain some special abilities,

- accept instructions
- move and navigate
- carry and deliver messages and data
- change their own properties
- declare actions
  The Oji's reality engine has three major components,
- dictionary of emoji, (emojinary?) sparse tensor
- matrices of

cycles through continuously cycles through
phases in each phase

- the
- collects all declared actions
- inputs the
  and update the state of the Oji for the next phase.

## Technology

- Typescript/Angular
- Firebase - Realtime Database (For dense data) - Firestore (sparse data)
  Tensorflow - tensorflow.js - tensorflow

The backend uses sparse and dense tensors as inputs into highly parallelizable tensorflow operations.

What you can do with emojioji.

- ~~multiplayer games~~
  - ~~dungeon crawler~~
  - ~~go~~
  - ~~checkers~~
  - ~~chess~~
  - ~~poker~~
  - ~~tank battle~~
- ~~postings~~
  - ~~jobs~~
  - ~~messages~~
- ~~sharable services~~
  - ~~take a number~~
  - ~~todo~~
  - ~~shopping list~~

## About

- Emojis serve as icons representing links to entities.

  - Entities
    - text (json)
    - images, sound and video (up to one megabyte).
    - agents
      - can perform act
      - can navigate
      - receive and send messages
    - emoji containers
      - pipes
      - buckets
  - Users create new emojis and add them to oji.
  - Users can control emoji by sending them messages
  - Emoji agents can interact with their neighbors
  - Emoji agents can "see" their neighborhood.

- Oji are virtual spaces occupied by grids of emojis
  - Oji can be
  - where they are subject act and interact with their neighbors.

Users can add new emojis, send messages to emojis they own, and
watch in real time as Emojis do things and interact, both independently and at the behest of users.
Oji can exist solely on a single device for a single user or they can be shared in small and large groups.

Emoji supports simple services

Implementation
The application is written in Typescript as an angular applications intended to run on firebase.
The Emojis are stored as sparse data in a NoSql Store, firebase's firestore.
The Oji are stored as dense data in Sql database, firebase's Realtime database.
Ojis enact the activities of emojis by executing graphs of distributable tensorflow operations.
that run in continous cycles, called phases, during wi
using a
The state changes at the end of each phase stored in Firebase real time database and pushed out to clients.
Users can interact with Ojis by dispatching messages to agents, that perform actions on behalf of the user.
