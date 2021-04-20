// check if there is local storage color option
let maincolors = localStorage.getItem("color-option");
if (maincolors !== null) {
    document.documentElement.style.setProperty('--main-color', localStorage.getItem("color-option"));
    //remove active class from all children
    document.querySelectorAll(".colors-list li").forEach(el => {
        el.classList.remove("active");
        //add active class on element  with data color  === local storage item
        if (el.dataset.color === maincolors) {
            //add active class
            el.classList.add("active");
        }
    });
}


// select  togle spin  class on icon setting 
document.querySelector(".settings-box i").onclick = function() {
    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("open");
};

//switch colors
const colorsli = document.querySelectorAll(".colors-list li");
colorsli.forEach(li => {
    li.addEventListener("click", (e) => {
        //set color on root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        e.target.classList.toggle;
        //set color on local storage
        localStorage.setItem("color-option", e.target.dataset.color);
        //remove active class from all children
        e.target.parentElement.querySelectorAll(".active").forEach(el => {
            el.classList.remove("active");
        });
        e.target.classList.add("active");

    });
});
let backgroundoption = true;
//variable to control the interval
let changeimg;
//check if there's local storage background item
let backgroundlocalitem = localStorage.getItem("background-option");
//check if random background local storage is not empty
if (backgroundlocalitem !== null) {
    if (backgroundlocalitem === "true") {
        backgroundoption = true;
    } else {
        backgroundoption = false;
    }
}
document.querySelectorAll(".random-backgrounds span").forEach(el => {
    el.classList.remove("active");
});
if (backgroundlocalitem === "true") {
    document.querySelector(".random-backgrounds .yes").classList.add("active");
} else {
    document.querySelector(".random-backgrounds .no").classList.add("active");
}




//switch random background option
const randombackel = document.querySelectorAll(".random-backgrounds span");
randombackel.forEach(span => {
    span.addEventListener("click", (e) => {
        //remove active class from all children
        e.target.parentElement.querySelectorAll(".active").forEach(el => {
            el.classList.remove("active");
        });
        e.target.classList.add("active");

        if (e.target.dataset.background === "yes") {
            backgroundoption = true;
            randomizeimgs();
            localStorage.setItem("background-option", true);

        } else {
            backgroundoption = false;
            clearInterval(changeimg);
            localStorage.setItem("background-option", false);
        }
    });
});

// sellect landing page element
let landingpage = document.getElementById("landing-page");
// Get array of imgs
let imgarray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
//random background option

//function to randomize imgs
function randomizeimgs() {
    if (backgroundoption === true) {
        // change background Image URL
        changeimg = setInterval(function() {
            let randomnumber = Math.floor(Math.random() * imgarray.length);
            landingpage.style.backgroundImage = 'url("images/' + imgarray[randomnumber] + '")';
        }, 50000);
    }
}
randomizeimgs();



// select skills slector
let ourskills = document.querySelector(".skills");
window.onscroll = function() {
    // skills ofset top 
    let skillsoffsettop = ourskills.offsetTop;
    // skills outer height
    let skillsouterheight = ourskills.offsetHeight;
    // window height 
    let windowheight = this.innerHeight;
    // window scrolltop
    let windowscrolltop = this.pageYOffset;
    // this.console.log(windowheight);
    if (windowscrolltop > (skillsoffsettop + skillsouterheight - windowheight)) {
        // this.console.log("skills section reached");
        let allskills = document.querySelectorAll(".skill-box .skill-progress span");
        allskills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    }
}

// create popup with the img 
let ourgallery = document.querySelectorAll(".gallery .images-box img");
ourgallery.forEach(img => {
    img.addEventListener("click", (e) => {
        // create overlay element 
        let overlay = document.createElement("div");
        // add class to overlay 
        overlay.className = "popup-overlay";
        // append overlay in body
        document.body.appendChild(overlay);
        // popup box
        let popupbox = document.createElement("div");
        // add class in popup box 
        popupbox.className = "popup-box";
        if (img.alt != null) {
            // create headding
            let headdingimg = document.createElement("h3");
            //  create text for headding
            let imgtext = document.createTextNode(img.alt);
            // append the text to headding
            headdingimg.appendChild(imgtext);
            //  append headding to popup box
            popupbox.appendChild(headdingimg);
        }
        //  create the img
        let popupimg = document.createElement("img");
        //  set imge
        popupimg.src = img.src;
        //  add image to popup box
        popupbox.appendChild(popupimg);
        //  append the popup box to body
        document.body.appendChild(popupbox);
        //  create the close span
        let closebutton = document.createElement("span");
        //  create close button  text
        let closebuttontext = document.createTextNode("x");
        // append text in close button
        closebutton.appendChild(closebuttontext);
        //  add class to close button 
        closebutton.className = "close-button";
        //  add  close button to the popup box
        popupbox.appendChild(closebutton);

    });
});

document.addEventListener("click", function(e) {
    if (e.target.className == "close-button") {
        // remove the current popup
        e.target.parentNode.remove();
        // remove overlay
        document.querySelector(".popup-overlay").remove();
    }
});


// select all bulletes
const allbullets = document.querySelectorAll(".nav-bullets .bullet");
allbullets.forEach(bullet => {
    bullet.addEventListener("click", (e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// select all links
const alllinks = document.querySelectorAll(".links a");
alllinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// toggle menu
let togglebtn = document.querySelector(".togle-menu");
let tlinks = document.querySelector(".links");
togglebtn.onclick = function(e) {
    e.stopPropagation();
    tlinks.classList.toggle("open");
}

//  click anyware outside  menu and toggle button
document.addEventListener("click", (e) => {
    if (e.target !== togglebtn && e.target !== tlinks) {
        // check menu is open
        if (tlinks.classList.contains("open")) {
            tlinks.classList.remove("open");
        }
    }
});

// stop Propagation from menu
tlinks.onclick = function(e) {
    e.stopPropagation();
}