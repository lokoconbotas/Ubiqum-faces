

//You can put here some remote or local JSON
$.getJSON("js/yourJSON.json", function (data) {
    data.forEach(function (face) {
        createFace(face);
    });
    activeHeadsMoving();
});


/* Declaring the global variables */
var mouseX;
var mouseY;
var imageOne;
var imageTwo;
var imageThree;
var imageFour;
var imageFive;
var imageSix;
var imageSeven;
var imageEight;
var imageNine;
var imageTen;
var imageEleven;
var imageTwelve;




function createFace(element) {
    var imageHolder = $("<div/>").addClass("image-holder " + element.name);
    var info = $("<div/>").addClass("info member-" + element.name);
    var name = $("<p/>").addClass("name").html(element.name);
    var role = $("<p/>").addClass("role").html(element.job);
    var imgC = $("<img>").addClass("circle").attr("src", "img/circle.png");
    var imgU = $("<img>").addClass("head-image up").attr("src", "img/" + element.name + "/" + element.images.up);
    var imgUL = $("<img>").addClass("head-image up-left").attr("src", "img/" + element.name + "/" + element.images.upleft);
    var imgL = $("<img>").addClass("head-image left").attr("src", "img/" + element.name + "/" + element.images.left);
    var imgDL = $("<img>").addClass("head-image down-left").attr("src", "img/" + element.name + "/" + element.images.downleft);
    var imgD = $("<img>").addClass("head-image down").attr("src", "img/" + element.name + "/" + element.images.down);
    var imgDR = $("<img>").addClass("head-image down-right").attr("src", "img/" + element.name + "/" + element.images.downright);
    var imgR = $("<img>").addClass("head-image right").attr("src", "img/" + element.name + "/" + element.images.right);
    var imgUR = $("<img>").addClass("head-image up-right").attr("src", "img/" + element.name + "/" + element.images.upright);
    var imgF = $("<img>").addClass("head-image front").attr("src", "img/" + element.name + "/" + element.images.front);

    info.append(name, role);
    imageHolder.append(info, imgC, imgU, imgUL, imgL, imgDL, imgD, imgDR, imgR, imgDR, imgR, imgUR, imgF);

    $(".content-wrapper").append(imageHolder);
}


//Here starts the party

function activeHeadsMoving() {


    $('.info').hide();

    /* Calling the initialization function */
    $(init);

    /* The images need to re-initialize on load and on resize, or else the areas
    where each image is displayed will be wrong. */
    $(window).load(init);
    $(window).resize(init);

    /* Setting the mousemove event caller */
    $(window).mousemove(getMousePosition);

    /* This function is called on document ready, on load and on resize
    and initiallizes all the images */
    function init() {

        /* Instanciate the mouse position variables */
        mouseX = 0;
        mouseY = 0;

        /* Instanciate a UbiqumHead class for every image */
        imageOne = new UbiqumHead("Gerard");
        imageTwo = new UbiqumHead("Alex");
        imageThree = new UbiqumHead("Ruben");
        imageFour = new UbiqumHead("Mark");
        imageFive = new UbiqumHead("Sebastian");
        imageSix = new UbiqumHead("Nadia");
        imageSeven = new UbiqumHead("Vio");
        imageEight = new UbiqumHead("Dani");
        imageNine = new UbiqumHead("Ignasi");
        imageTen = new UbiqumHead("Lluis");
        imageEleven = new UbiqumHead("Raul");
        imageTwelve = new UbiqumHead("Victor");

    }

    /* This function is called on mouse move and gets the mouse position. 
    It also calls the UbiqumHead function to display the correct image*/
    function getMousePosition(event) {



        /* Setting the mouse position variables */
        mouseX = event.pageX;
        mouseY = event.pageY;

        /*Calling the setImageDirection function of the UbiqumHead class
        to display the correct image*/
        imageOne.setImageDirection();
        imageTwo.setImageDirection();
        imageThree.setImageDirection();
        imageFour.setImageDirection();
        imageFive.setImageDirection();
        imageSix.setImageDirection();
        imageSeven.setImageDirection();
        imageEight.setImageDirection();
        imageNine.setImageDirection();
        imageTen.setImageDirection();
        imageEleven.setImageDirection();
        imageTwelve.setImageDirection();

    }

    $(".image-holder").on('mouseover', function (event) {
        $(".member-" + event.currentTarget.classList[1]).slideDown();
    });
    $(".image-holder").on('mouseleave', function () {
        $(".member-" + event.currentTarget.classList[1]).slideUp();

    });
}