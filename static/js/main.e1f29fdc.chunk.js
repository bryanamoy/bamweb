(this["webpackJsonpreact-website"]=this["webpackJsonpreact-website"]||[]).push([[0],{142:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},157:function(e,t,a){},26:function(e,t,a){},460:function(e,t,a){},461:function(e,t,a){},462:function(e,t,a){},463:function(e,t,a){},464:function(e,t,a){},465:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a(21),i=a.n(s),n=(a(26),a(89)),o=a(6),r=(a(142),a(0)),l=["btn--primary","btn--outline"],d=["btn--medium","btn--large"],h=function(e){var t=e.children,a=e.type,c=e.onClick,s=e.buttonStyle,i=e.buttonSize,n=e.path,h=l.includes(s)?s:l[0],b=d.includes(i)?i:d[0];return Object(r.jsx)(o.b,{to:n,className:"btn-mobile",children:Object(r.jsx)("button",{className:"btn ".concat(h," ").concat(b),onClick:c,type:a,children:t})})};a(148);var b=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)(!0),l=Object(n.a)(i,2),d=(l[0],l[1]),b=function(){s(!1)},m=function(){window.innerWidth<=960?d(!1):d(!0)};return Object(c.useEffect)((function(){m()}),[]),window.addEventListener("resize",m),Object(r.jsx)("div",{children:Object(r.jsx)("nav",{className:"navbar",children:Object(r.jsxs)("div",{className:"navbar-container",children:[Object(r.jsxs)(o.b,{to:"/",className:"navbar-logo",onClick:b,children:["BaM ",Object(r.jsx)("i",{className:"fab fa-typo3"})]}),Object(r.jsx)("div",{className:"menu-icon",onClick:function(){s(!a)},children:Object(r.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(r.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{to:"/",className:"nav-links",onClick:b,children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{to:"/aboutMe",className:"nav-links",onClick:b,children:"About Me"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{to:"/products",className:"nav-links",onClick:b,children:"Products"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{to:"/contact",className:"nav-links-mobile",onClick:b,children:"Contact"})})]}),Object(r.jsx)(h,{buttonStyle:"btn--outline",path:"/contact",children:"Contact"})]})})})},m=(a(149),a.p+"static/media/video-1.59e75226.mp4");var j=function(){return Object(r.jsxs)("div",{className:"hero-container",children:[Object(r.jsx)("video",{src:m,type:"video/mp4",autoPlay:!0,loop:!0,muted:!0}),Object(r.jsx)("h1",{children:"Bryan Moy"}),Object(r.jsx)("p",{children:"Software Engineer"}),Object(r.jsxs)("div",{className:"hero-btns",children:[Object(r.jsx)(h,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",path:"/aboutMe",children:"About Me"}),Object(r.jsx)(h,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",path:"/contact",children:"Contact"})]})]})};var u=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("li",{className:"cards_item",children:Object(r.jsxs)(o.b,{className:"cards_item_link",to:e.path,children:[Object(r.jsx)("figure",{className:"cards_item_pic-wrap","data-category":e.label,children:Object(r.jsx)("img",{src:e.src,alt:"Image",className:"cards_item_img"})}),Object(r.jsx)("div",{className:"cards_item_info",children:Object(r.jsx)("h5",{className:"cards_item_text",children:e.text})})]})})})},g=(a(150),a.p+"static/media/@.674a3b88.jpg"),p=a.p+"static/media/tictactoerobot.1a8b3736.png",f=a.p+"static/media/myself.decd0f6b.PNG";var x=function(){return Object(r.jsxs)("div",{className:"cards",children:[Object(r.jsx)("h1",{children:"Click On These Cards For More Info!"}),Object(r.jsx)("div",{className:"cards_container",children:Object(r.jsxs)("div",{className:"cards_wrapper",children:[Object(r.jsxs)("ul",{className:"cards_items",children:[Object(r.jsx)(u,{src:g,text:"If You Want To Reach Me \xa0\xa0\xa0\xa0\xa0",label:"@me",path:"/contact"}),Object(r.jsx)(u,{src:p,text:"Automated Tic-Tac-Toe Robot",label:"Programming",path:"/tttRobot"})]}),Object(r.jsx)("ul",{children:Object(r.jsx)(u,{src:f,text:"Who I AM",label:"Bio",path:"/aboutMe"})})]})})]})},O=(a(151),a(62));var v=function(){return Object(r.jsxs)("div",{className:"footer-container",children:[Object(r.jsx)("section",{className:"footer-subscription",children:Object(r.jsx)("p",{className:"footer-subscription-heading",children:"Learn about my products"})}),Object(r.jsxs)("div",{className:"footer-links",children:[Object(r.jsx)("div",{className:"footer-links-wrappers",children:Object(r.jsxs)("div",{className:"footer-links-items",children:[Object(r.jsx)("h2",{children:"About Me"}),Object(r.jsx)("a",{href:"https://www.linkedin.com/in/bryan-moy-80568b12a/",target:"_blank",children:"My LinkedIn"}),Object(r.jsx)(o.b,{to:"/myResume",children:"Resume"}),Object(r.jsx)("a",{href:"https://github.com/bryanamoy",target:"_blank",children:"My Github"})]})}),Object(r.jsx)("div",{className:"footer-links-wrapper",children:Object(r.jsxs)("div",{className:"footer-links-items",children:[Object(r.jsx)("h2",{children:"Products"}),Object(r.jsx)(o.b,{to:"/tttRobot",children:"Tic-Tac-Toe Robot"}),Object(r.jsx)(o.b,{to:"/armFrogger",children:"Frogger Game"}),Object(r.jsx)("a",{href:"https://aaycny.org",target:"_blank",children:"AAYC Website"})]})}),Object(r.jsx)("div",{className:"footer-links-wrapper",children:Object(r.jsxs)("div",{className:"footer-links-items",children:[Object(r.jsx)("h2",{children:"Contact"}),Object(r.jsx)(o.b,{to:"/contact",children:"My Contacts"})]})})]}),Object(r.jsx)("section",{className:"social-media",children:Object(r.jsxs)("div",{className:"social-media-wrap",children:[Object(r.jsx)("div",{className:"footer-logo",children:Object(r.jsxs)(o.b,{to:"/",className:"social-logo",children:["BaM ",Object(r.jsx)("i",{className:"fab fab-typo3"})]})}),Object(r.jsx)("small",{className:"website-rights",children:"Bryan Moy \xa9 2020"}),Object(r.jsxs)("div",{className:"social-icons",children:[Object(r.jsx)(O.SocialIcon,{url:"https://www.linkedin.com/in/bryan-moy-80568b12a/",network:"linkedin",bgColor:"#FF7F50",target:"_blank"}),Object(r.jsx)(O.SocialIcon,{url:"https://www.instagram.com/brmoyan/?hl=en",network:"instagram",bgColor:"#6495ED",target:"_blank"}),Object(r.jsx)(O.SocialIcon,{url:"https://twitter.com/lang_boi",network:"twitter",target:"_blank"})]})]})})]})};var y=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(j,{}),Object(r.jsx)(x,{}),Object(r.jsx)(v,{})]})},w=(a(157),a.p+"static/media/tictactoeboard.5222e798.png"),N=a.p+"static/media/frogger2.b311b76a.jpg",k=a.p+"static/media/githublogo.2ea07f8a.png",T=a.p+"static/media/aayclogo.f037f9b9.jpg";var C=function(){return Object(r.jsxs)("div",{className:"products-root",children:[Object(r.jsxs)("div",{className:"products-container",children:[Object(r.jsx)("h1",{className:"products",children:"Products"}),Object(r.jsxs)("div",{className:"products-items",children:[Object(r.jsxs)("ul",{children:[Object(r.jsx)("a",{href:"https://github.com/bryanamoy",target:"_blank",children:Object(r.jsx)("img",{src:k,className:"githubicon"})}),Object(r.jsx)(o.b,{to:"/tttRobot",children:Object(r.jsx)("img",{src:w,className:"tttrobot"})})]}),Object(r.jsxs)("ul",{children:[Object(r.jsx)(o.b,{to:"/armFrogger",children:Object(r.jsx)("img",{src:N,className:"froggy"})}),Object(r.jsx)("a",{href:"https://aaycny.org",target:"_blank",children:Object(r.jsx)("img",{src:T,className:"aayc"})})]})]})]}),Object(r.jsx)(v,{})]})};a(158),a(460);var I=function(){return Object(r.jsxs)("div",{className:"contact-root",children:[Object(r.jsxs)("div",{className:"contact-container",children:[Object(r.jsx)("h1",{className:"contact",children:"Contact"}),Object(r.jsx)("div",{className:"contact-text-container",children:Object(r.jsxs)("div",{className:"contact-text",children:[Object(r.jsx)("h2",{children:"Reach out to Me"}),Object(r.jsxs)("p",{children:["Email: bryanmoy@gmail.com",Object(r.jsx)("br",{}),"LinkedIn:\xa0",Object(r.jsx)("a",{href:"https://www.linkedin.com/in/bryan-moy-80568b12a/",alt:"Bryan Moy's LinkedIn",target:"_blank",children:"https://www.linkedin.com/in/bryan-moy-80568b12a/"})]})]})})]}),Object(r.jsx)(v,{})]})},M=(a(461),a.p+"static/media/tttdetection.2d30ec36.png");var _=function(){return Object(c.useEffect)((function(){window.open("https://medium.com/cse-468-568-robotic-algorithms/rrros-tic-tac-toe-robot-3-3-3130f4245273","_blank")}),[]),Object(r.jsx)("div",{className:"robot",children:Object(r.jsxs)("div",{className:"robot-container",children:[Object(r.jsxs)("div",{className:"robot-img",children:[Object(r.jsx)("img",{src:w}),Object(r.jsx)("img",{src:M})]}),Object(r.jsx)("h2",{children:"Tic Tac Toe Robot:"}),Object(r.jsxs)("div",{className:"robot-p",children:[Object(r.jsxs)("p",{children:["One of the projects I really enjoyed was programming a UARM Swift robot that would play against a human in Tic Tac Toe. This was really interesting because I had the opportunity to develop many different programming skills varying from line and circle detection, robotic algorithms, and computational algorithms depending on the state of the game. The repository to this project can be found here:",Object(r.jsx)("a",{href:"https://github.com/bryanamoy/RRRO",target:"_blank",children:"Tic Tac Toe Robot Github"})]}),Object(r.jsx)("p",{children:"Some technical details of how this project was built, Image Processing (shown in figures 1, 2, & 3): The first necessary step in processing images for our project is cropping. To achieve this goal we used corner detection. We specifically used the Harris Corner Detection Method. By using corner detection on the image we were able to map out the pixels of the board using the x, y coordinates when displaying the picture. Through this, we can isolate each cell of the grid by slicing the image using specific x, y coordinates that each cell holds. We then process individual boxes for our future steps. The next necessary step is image thresholding. This is to decipher the objects in the images: X\u2019s, O\u2019s, and the tic tac toe board. This is done by gray-scaling the image so that we can \u201cthreshold\u201d pixel values and filter out the black grid. Our threshold value is to be set to 20 for optimal filtering since we will be using colored markers for each player. To achieve our goal of processing markings of X\u2019s, we will use line detection. We will be using the Houghline method, through the opencv library. This is by measuring angles and line distance of objects in the photo. We will apply this functionality to the snapshots of each cropped cell. After detecting an X, we can then update the indices of our matrix (representing the current state of the game) with an X. To achieve our goal of processing markings of O\u2019s, we will use circle detection. Again, we are using the Houghline method. This functionality is done by finding a point that is surrounded by differing colored markings creating a circumference. This will also be applied to the snapshots of each cell. If a circle is detected, we then again update the matrix."}),Object(r.jsxs)("p",{children:["Movement:",Object(r.jsx)("br",{}),"For movement, we will handle this by having a static setup where the UARM Swift and the board are in the same position every game. Each cell of the tic tac toe grid will have specific coordinates that we can send the robot arm to move. For example, if the robot arm were to mark an X in the center cell, we will program the arm to move 114mm forward. From there, our programming will consist of moving down the arm, then dragging the marker in a diagonal motion for 25mm. Rising from that position, the robot arm will move forward and drag the marker in the opposite direction for 25mm again. For O\u2019s, the arm will go to the specific coordinates and similarly make a mark but in a circular motion."]})]}),Object(r.jsx)(v,{})]})})},A=(a(462),a.p+"static/media/macaoprofile.58824c57.jpg");var F=function(){return Object(r.jsxs)("div",{className:"aboutme",children:[Object(r.jsxs)("div",{className:"aboutme-container",children:[Object(r.jsx)("h1",{className:"aboutMe",children:"About Me"}),Object(r.jsxs)("div",{className:"aboutme-bio",children:[Object(r.jsxs)("div",{className:"aboutme-text",children:[Object(r.jsx)("p",{children:"After earning my degree in Computer Engineering from University at Buffalo, I entered the Software Development world to explore my passion for computers and technology. Given my choice in my degree, I have interests over the whole spectrum of computers; from Front-end to Back-end, Blockchain, Embedded Systems, and all the way down to computer hardware, I have a fascination of the direction technology is headed today. I am a Software Engineer, because it gratifies my ambition to create, engineer, and design technologies that may resolve world or everyday issues, or products that are just outright cool. Because the computer industry is so broad, I feel there is something I can always learn about and dive into. Not only that, but it is a place where I can work well as a team member or as an individual; an industry where I belong."}),Object(r.jsxs)("p",{children:["In addition to my primary job, I also am involved in bettering the community I grew up in. Through ",Object(r.jsx)("a",{href:"https://www.aaycny.org/",alt:"AAYC website",children:"Asian American Youth Center"}),", a community service organization I hold dear to my heart, I've volunteered at many of their philanthropic events servicing the less fortunate of downtown New York City. This organization who is also my first client (Developed their website), helped kids of Lower Manhattan, stay off the streets through free sports camps every weekend, find jobs through workshops and career days, and provide collegiate scholarships. Through many years of being part of such a selfless community, it has made me who I am today. Not only did it teach me leadership, teamwork, and responsibility, I've gained so many lifelong connections and values that have guided to a relatively stable and fulfilling life."]})]}),Object(r.jsx)("div",{className:"aboutme-pic",children:Object(r.jsx)("img",{src:A,alt:"profile",width:"40%",height:"40%"})})]})]}),Object(r.jsx)(v,{})]})},S=a.p+"static/media/resume.92e43550.PNG";a(463);var R=function(){return Object(r.jsx)("div",{className:"resume",children:Object(r.jsxs)("div",{className:"resume-container",children:[Object(r.jsx)("div",{className:"resume-img",children:Object(r.jsx)("img",{src:S,alt:"resume"})}),Object(r.jsx)("div",{className:"resume-footer",children:Object(r.jsx)(v,{})})]})})},B=(a(464),a.p+"static/media/edubase.f1fbc551.jpg");var E=function(){return Object(c.useEffect)((function(){window.open("https://github.com/bryanamoy/FroggerGame","_blank")}),[]),Object(r.jsxs)("div",{className:"frogger-root",children:[Object(r.jsxs)("div",{className:"frogger-container",children:[Object(r.jsx)("h1",{className:"frogger",children:"Frogger"}),Object(r.jsxs)("div",{className:"frogger-des",children:[Object(r.jsx)("div",{className:"frogger-text",children:Object(r.jsx)("p",{children:"This project was made with the Tiva TM4C123GH6PM microcontroller, EDUBase ARM Trainer board, and Putty. To run the game load the frogger.c, frogger.s, and tm4c123gh6pm_startup_ccs.c (startup code) in Code Composer Studio, as well as connect your Tiva TM4C123GH6PM microcontroller. This game replicates the Frogger game made in 1981. The frog is represented as '&' and the goal is to reach the openings in the top of the board. There is a time limit, everytime you reach the frog into any 2 of 4 bases at the top of the board you will receive points and additional time. Flys are represented as '+' and will receive 150 points for eating one with your frog. Collision with Cars('C'), trucks('###'), river('~'), Alligator head('A'), and walls('|' or '*') will result in a lost life."})}),Object(r.jsx)("div",{className:"frogger-pic",children:Object(r.jsx)("img",{src:B,alt:"Tiva & Eduboard"})})]})]}),Object(r.jsx)(v,{})]})},P=a(5);var G=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(o.a,{children:[Object(r.jsx)(b,{}),Object(r.jsxs)(P.c,{children:[Object(r.jsx)(P.a,{path:"/",exact:!0,component:y}),Object(r.jsx)(P.a,{path:"/products",component:C}),Object(r.jsx)(P.a,{path:"/aboutMe",component:F}),Object(r.jsx)(P.a,{path:"/contact",component:I}),Object(r.jsx)(P.a,{path:"/tttRobot",component:_}),Object(r.jsx)(P.a,{path:"/react-website",component:y}),Object(r.jsx)(P.a,{path:"/myResume",component:R}),Object(r.jsx)(P.a,{path:"/armFrogger",component:E}),Object(r.jsx)(P.a,{path:"/bamweb/",component:y})]})]})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,466)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),i(e),n(e)}))};i.a.render(Object(r.jsx)(G,{}),document.getElementById("root")),L()}},[[465,1,2]]]);
//# sourceMappingURL=main.e1f29fdc.chunk.js.map