// ----------------------header------------------------

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
  $(".fa-bars").on("click", function() {
    if ($(window).width() <= 768) {
      $(".navList").css("display", "block");
      $(".cancel").css("display", "initial");
      $(this).css("display", "none");
    }
  });

  $(".cancel").on("click", function() {
    if ($(window).width() <= 768) {
      $(this).css("display", "none");
      $(".fa-bars").css("display", "initial");
      $(".navList").css("display", "none");
    }
  });

  $(".navList li").on("click", function() {
    if ($(window).width() <= 768) {
      $(".navList").css("display", "none");
      $(".fa-bars").css("display", "initial");
      $(".cancel").css("display", "none");
    }
  });
}

//----------------------------My Recent Works---------------------------------

function portfilio() {
  $(".itemOne").on("click", function() {
    let projectOneLinkLive = "https://www.facebook.com/";
    let projectOneLinkGit = "https://www.facebook.com/";
    let projectOneImage = "styles/assets/projectImageOne.png";
    $(".projectDetailsOne").html(
      `<p>A portfolio site of a photography agency built in HTML, CSS</p>`
    );
    $(".projectDetailsTwo").html(`<p>Technology:HTML, CSS</p>`);
    $(".projectDetailsThree").html(
      `<div class="buttonContainer">
          <div class="liveButtonContainer"><button><a href="${projectOneLinkLive}">Live</a></button></div>
          <div class="gitButtonContainer"><button><a href="${projectOneLinkGit}">github</a></button></div>
      </div>`
    );

    $(".projectImageContainer").html(`<img src=${projectOneImage}>`);

    $(this).addClass("activeStatus");
    $(".itemTwo").removeClass("activeStatus");
    $(".itemThree").removeClass("activeStatus");
  });

  $(".itemTwo").on("click", function() {
    let projectTwoLinkLive = "https://www.facebook.com/";
    let projectTwoLinkGit = "https://www.facebook.com/";
    let projectTwoImage = "styles/assets/projectImageOne.png";
    $(".projectDetailsOne").html(
      `<p>An interactive quiz where users can test their spelling skills</p>`
    );
    $(".projectDetailsTwo").html(`<p>Technology: HTML, CSS, SASS, jQuery</p>`);
    $(".projectDetailsThree").html(
      `<div class="buttonContainer">
          <div class="liveButtonContainer"><button><a href="${projectTwoLinkLive}">Live</a></button></div>
          <div class="gitButtonContainer"><button><a href="${projectTwoLinkGit}">github</a></button></div>
      </div>`
    );

    $(".projectImageContainer").html(`<img src=${projectTwoImage}>`);

    $(this).addClass("activeStatus");
    $(".itemOne").removeClass("activeStatus");
    $(".itemThree").removeClass("activeStatus");
  });

  $(".itemThree").on("click", function() {
    let projectThreeLinkLive = "https://www.facebook.com/";
    let projectThreeLinkGit = "https://www.facebook.com/";
    let projectThreeImage = "styles/assets/projectImageOne.png";
    $(".projectDetailsOne").html(`<p>Hi I am project 3 details</p>`);
    $(".projectDetailsTwo").html(`<p>Technology:HTML, CSS, React</p>`);
    $(".projectDetailsThree").html(
      `<div class="buttonContainer">
          <div class="liveButtonContainer"><button><a href="${projectThreeLinkLive}">Live</a></button></div>
          <div class="gitButtonContainer"><button><a href="${projectThreeLinkGit}">github</a></button></div>
      </div>`
    );
    $(".projectImageContainer").html(`<img src=${projectThreeImage}>`);

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
