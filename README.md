# ARquaponics
*Introduction about the project here*

A collaboration with:
- [VincentKempers](https://github.com/VincentKempers)
- [nourbayard](https://github.com/nourbayard)
- [vriesm060](https://github.com/vriesm060)
- [kyunwang](https://github.com/kyunwang)(Me)

# Table of Content
- [Getting started](#getting-started)
- [Concept](#concept)
- [Features](#features)
- [The data](#the-data)
- [Tools](#tools)

# Getting started
<!-- You will need the following: -->
First you need to create a `vars.env` file with `PORT=3100` (Or any port you like) in the root.

1. Clone the repo: `git clone https://github.com/kyunwang/arquaponics.git`
2. cd to the folder and run `npm install`
3. Run `npm start` to start the server
4. You can now go to [`http://localhost:3100/`](http://localhost:3100/)

# Concept
The concept of this product is to have an introductory to the story of the Ceuvel. By telling the story you can't see the effect that it has on the overall energy consumption or energy output. By making a nice data visualisation of every data output on a screen will not do the **awesome** story of the Ceuvel justice.

Our concept is a Augmented Reality (AR) tour that you can follow on the awesome ground of the Ceuvel. There will be AR stickers on the ground that you can scan with the Website. What you will see after scanning is live data graph in AR with this you can actually see what it going on this particular Boat. You will find a bit of text in AR that will explain what you see and what this will benefit.

There will be a website where you can see all the data and all the explanation of the data. This is for the user who want's to look back and ponder on the amazing things the Ceuvel does.

## Story
What the Ceuvel does is making self made bio energy from plants and that energy will be needed to make some produce. That produce is used for the café.

## User Scenario
> As space&matter (a partner) I would want to know how the Ceuvel is doing on generating energy and how much it's sustainable energy is presented.

> As gemeente Amsterdam (a partner) I would want to know why this place is good

## Goal
1. The Goal of this project is to add an awareness of how bad grey energy is and show that the greenhouse in the Ceuvel a great alternative is.

2. Learn about the Ceuvel and it's sustainability with green energy.

3. The Ceuvel wants to let the partners know what they are doing and how they are doing it.

# Features
* [d3.js](https://github.com/d3) - _d3JS is being used to render graphs with data_
* [a-frame](https://aframe.io/) - _a frame is being used for the augmentend reality_
* [SockJS](https://github.com/sockjs) - _SockJS is being used for the socket connection to the client_
* [StompJS](https://www.npmjs.com/package/stompjs) - _StompJS is being used for the connection through the database to the server_
* [ExpressJS](https://expressjs.com/) - _Express is being used for the server_

# The data
*Information about the data here*
<!-- data life cycle? data retention/database ? -->
The data is being stored on a stomp server and we use a connection via a StompJS package to get that data. What we recieve is.

```

```
<!-- Api: limitations, rate limit? not applied ?  -->

# Tools
The tools/packages used for this project:
- [Express(Node.js)](https://expressjs.com/)
- [EJS Templating](http://ejs.co/)
- [D3.js](https://d3js.org/)
- [A-Frame](https://aframe.io/)
- [AR.js](https://github.com/jeromeetienne/AR.js)

# License
MIT
