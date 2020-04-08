// ----------------------header-----------------------------------------

//for hello world
function helloWorld() {
  setTimeout(headerLineOne, 500);
  setTimeout(headerLineTwo, 4000);
}

// for typewritter effect in h1
function headerLineOne() {
  $("#helloWorld")
    .html(
      `<span class="arrow"><</span>Hello World<span class="arrow">/></span>`
    )
    .fadeTo(2000, 1);
}

function headerLineTwo() {
  let i = 0;
  let text = `I'm Farzana Prianka. A front-end web developer based in
Toronto`;
  let speed = 70;

  function typewritter() {
    if (i < text.length) {
      let currentText = $("#welcomeText").html();
      let currentCharacter = text.charAt(i);
      $("#welcomeText").html(`${currentText}${currentCharacter}`);
      i++;
      setTimeout(typewritter, speed);
    }
  }
  typewritter();
}

//-------------------------------navigation-----------------------------------

function navigation() {
  //when click the hamburger menu
  $(".fa-bars").on("click", function() {
    $(".navListContainer").css("display", "block");
    $(".cancel").css("display", "initial");
    $(this).css("display", "none");
  });

  //when click the cancel sign
  $(".cancel").on("click", function() {
    $(this).css("display", "none");
    $(".fa-bars").css("display", "initial");
    $(".navListContainer").css("display", "none");
  });

  //when click the navigation options
  $(".navList li").on("click", function() {
    if ($(window).width() <= 768) {
      $(".navListContainer").css("display", "none");
      $(".fa-bars").css("display", "initial");
      $(".cancel").css("display", "none");
    }
  });

  //when window resizes less than 768px
  // window.onresize = function(event) {
  //   viewportwidth = $(window).width();
  //   if (viewportwidth < 768) {
  //     $(".navListContainer").css("display", "block");
  //   }
  // };
}

//-------------------------My Recent Works---------------------------------

function portfilio() {
  //when user clicks first project...........
  $(".itemOne").on("click", function() {
    let projectOneLinkLive = "https://haikus-highway.github.io/haikus-highway/";
    let projectOneLinkGit = "https://github.com/haikus-highway/haikus-highway";
    let projectOneImage = "styles/assets/projectImageOne.png";

    //description text
    $(".projectDetailsOne").html(`
      <p class="type">React, Firebase & Datamuse API Application</p>
      <p class="line"></p>
      <p class="description">A fully responsive React application that utilizes Datamuse
         API and Google Firebase's Database that allow users to create
         their own haiku poems.Developed in collboration with Sarah Vieira, Alyne Alvarenga, and Norman Hussey.
      </p>`);

    //list of used technology
    $(".projectDetailsTwo").html(`
      <p>
        <span class="tech">React</span>
        <span class="tech">Firebase</span>
        <span class="tech">Javascript</span>
        <span class="tech">APIs</span>
        <span class="tech">CSS3</span>
        <span class="tech">HTML5</span>
      </p>`);

    //view live and git button
    $(".projectDetailsThree").html(
      `<div class="buttonContainer">
          <div class="liveButtonContainer"><a href="${projectOneLinkLive}">Live</a></div>
          <div class="gitButtonContainer"><a href="${projectOneLinkGit}">github</a></div>
      </div>`
    );

    //image
    $(".projectImageContainer").html(
      `<img src=${projectOneImage} alt="project one image">`
    );

    //others ac
    $(this).addClass("activeStatus");
    $(".itemTwo").removeClass("activeStatus");
    $(".itemThree").removeClass("activeStatus");
  });

  // when user clicks on second project..............
  $(".itemTwo").on("click", function() {
    let projectTwoLinkLive = "https://farzanaprianka.github.io/spellingWizard/";
    let projectTwoLinkGit = "https://github.com/FarzanaPrianka/spellingWizard";
    let projectTwoImage = "styles/assets/projectImageTwo.png";

    //description text
    $(".projectDetailsOne").html(`
      <p class="type">Javascript Game Application</p>
      <p class="line"></p>
      <p class="description">A fully responsive interactive quiz where users can test their spelling skills</p>`);

    //list of technology used
    $(".projectDetailsTwo").html(`
    <p>
      <span class="tech">Javascript </span>
      <span class="tech">jQuery</span> 
      <span class="tech">CSS3</span> 
      <span class="tech">SASS</span>
      <span class="tech">HTML5</span>
    </p>`);

    //buttons
    $(".projectDetailsThree").html(`
      <div class="buttonContainer">
        <div class="liveButtonContainer"><a href="${projectTwoLinkLive}">Live</a></div>
        <div class="gitButtonContainer"><a href="${projectTwoLinkGit}">github</a></div>
      </div>`);

    //image
    $(".projectImageContainer").html(
      `<img src=${projectTwoImage} alt="project two image">`
    );

    //others
    $(this).addClass("activeStatus");
    $(".itemOne").removeClass("activeStatus");
    $(".itemThree").removeClass("activeStatus");
  });

  //when user click the third project
  $(".itemThree").on("click", function() {
    let projectThreeLinkLive =
      "https://farzanaprianka.github.io/throughTheLens/";
    let projectThreeLinkGit =
      "https://github.com/FarzanaPrianka/throughTheLens";
    let projectThreeImage = "styles/assets/projectImageThree.png";

    //description text
    $(".projectDetailsOne").html(`
      <p class="type">Website Design</p>
      <p class="line"></p>
      <p class="description">Designed and developed a pixel perfact, fully responsive online photography portfolio</p>`);

    //list of technology used
    $(".projectDetailsTwo").html(`
      <p>
        <span class="tech">Responsive Design</span>
        <span class="tech">CSS3</span>
        <span class="tech">HTML5</span> 
      </p>`);

    //buttons
    $(".projectDetailsThree").html(`
      <div class="buttonContainer">
        <div class="liveButtonContainer"><a href="${projectThreeLinkLive}">Live</a></div>
        <div class="gitButtonContainer"><a href="${projectThreeLinkGit}">github</a></div>
      </div>`);

    //image
    $(".projectImageContainer").html(
      `<img src=${projectThreeImage} alt="project three image">`
    );

    //others
    $(this).addClass("activeStatus");
    $(".itemOne").removeClass("activeStatus");
    $(".itemTwo").removeClass("activeStatus");
  });
}

//---------------------------create app namespace to hold all method-------

const app = {};

//start the app
app.init = function() {
  //load header page
  helloWorld();
  //navigation
  navigation();
  //My recent works
  portfilio();
};

$(function() {
  app.init();
});
