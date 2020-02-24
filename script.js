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
  let speed = 50;

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

//----------------------------My Recent Works---------------------------------

function portfilio() {
  $(".itemOne").on("click", function() {
    let projectOneLinkLive = "https://www.facebook.com/";
    let projectOneLinkGit = "https://www.facebook.com/";
    let projectOneImage = "styles/assets/projectImageOne.png";
    $(".projectDetailsOne").html(`<p>Hi I am project 1 details</p>`);
    $(".projectDetailsTwo").html(`<p>Technology for project 1</p>`);
    $(".projectDetailsThree").html(
      `<p>
      <button><a href="${projectOneLinkLive}">Live1</a></button>
      <button><a href="${projectOneLinkGit}">github1</a></button>
      </p>`
    );

    $(".projectImageContainer").html(`<img src=${projectOneImage}>`);
  });

  $(".itemTwo").on("click", function() {
    let projectTwoLinkLive = "https://www.facebook.com/";
    let projectTwoLinkGit = "https://www.facebook.com/";
    let projectTwoImage = "styles/assets/projectImageOne.png";
    $(".projectDetailsOne").html(`<p>Hi I am project 2 details</p>`);
    $(".projectDetailsTwo").html(`<p>Technology for project 2</p>`);
    $(".projectDetailsThree").html(
      `<p>
      <button><a href="${projectTwoLinkLive}">Live2</a></button>
      <button><a href="${projectTwoLinkGit}">github2</a></button>
      </p>`
    );

    $(".projectImageContainer").html(`<img src=${projectTwoImage}>`);
  });

  $(".itemThree").on("click", function() {
    let projectThreeLinkLive = "https://www.facebook.com/";
    let projectThreeLinkGit = "https://www.facebook.com/";
    let projectThreeImage = "styles/assets/projectImageOne.png";
    $(".projectDetailsOne").html(`<p>Hi I am project 3 details</p>`);
    $(".projectDetailsTwo").html(`<p>Technology for project 3</p>`);
    $(".projectDetailsThree").html(
      `<p>
      <button><a href="${projectThreeLinkLive}">Live3</a></button>
      <button><a href="${projectThreeLinkGit}">github3</a></button>
      </p>`
    );
    $(".projectImageContainer").html(`<img src=${projectThreeImage}>`);
    console.log("clicked item 3");
  });
}

//---------------------------create app namespace to hold all method-------

const app = {};

//start the app

app.init = function() {
  //load header page
  helloWorld();
  //My recent works
  portfilio();
};

$(function() {
  app.init();
});
