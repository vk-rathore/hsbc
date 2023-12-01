function readmoreFunction() {
  var readmore = document.getElementById("readmore");
  var readless = document.getElementById("readless");
  var secondp = document.getElementById("secondp");

  var divheight=document.getElementById("slideContent").clientHeight;
  var img=document.getElementById("hero-slide-img");
  

  if (readmore.style.display === "none") {
    readmore.style.display = "inline";
    readless.style.display="none"
    secondp.style.display="none"
    
  } else {
    readmore.style.display = "none";
    readless.style.display="inline"
    secondp.style.display="inline-block"
   
  }
  var divheight=document.getElementById("slideContent").clientHeight;
  var img=document.getElementById("hero-slide-img");
  img.style.height=divheight +"px";
}



function resize() {
  if ($(window).width() < 1199) {
    $(".main-nav-menu").find("a").addClass("mm-link");
  } else {
    $(".main-nav-menu").find("a").removeClass("mm-link");
  }
}

$(document).ready(function () {
  // mobile navbar
  $(".nav-right").click(function () {
    if ($(".main-nav").hasClass("open")) {
      $(".main-nav").removeClass("open");
      $("body").removeClass("active");
    } else {
      $(".main-nav").addClass("open");
      $("body").addClass("active");
    }
  });

  // know more functional
   $(".art-content-btn").click(function () {
     $(".know_more").slideDown();
     $(".middle_box").addClass("open");
   });

   $(".close").click(function () {
     $(".know_more").slideUp();
     $(".middle_box").removeClass("open");
   });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});

let targetCardIdx;

const displayDataArray = [
  {
    idx: 0,
    text1: "Want to ride your dream car home ?",
    text2: "dream car",
    header: "Dream Car",
    icon: "Dream-Car.png",
    image: "DreamCar.jpg",
  },
  {
    idx: 1,
    text1: "Want to travel the world ?",
    text2: "dream holiday",
    header: "Dream Holiday",
    icon: "holiday.png",
    image: "travel.jpg",
  },
  {
    idx: 2,
    text1: "Want to have a stress-free retirement ?",
    text2: "retirement",
    header: "Retirement",
    icon: "Retirement.png",
    image: "retirement.jpg",
  },
  {
    idx: 3,
    text1: "Want to don the Entrepreneurship cap ?",
    text2: "start-up",
    header: "Start-up",
    icon: "start-up.png",
    image: "Start up.jpg",
  },
  {
    idx: 4,
    text1: "Want to provide your child the future they deserve ?",
    text2: "child care",
    header: "Child Care",
    icon: "child-care.png",
    image: "Child care.jpg",
  },
  {
    idx: 5,
    text1: "Want to build a home that you can call yours ?",
    text2: "dream home",
    header: "Dream Home",
    icon: "house.png",
    image: "Dream home.jpg",
  },
];

const corouselShifted = (data) => {
  setTimeout(() => {
    const targetCard = document.getElementsByClassName("owl-item center");

    const cardNumber = Number(
      [...targetCard[0].childNodes[0].classList][1].split("_")[1]
    );

    targetCardIdx = cardNumber;
  }, 200);
};

const $owl = $(".owl-carousel");

$owl.children().each(function (index) {
  $(this).attr("data-position", index); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
  center: true,
  loop: true,
  items: 1,
  responsive: {
    640 : {
      items : 3,
  },
  },
  itemsMobile: [500, 1],
  dots: false,
  nav: true,
  navText: [
    '<svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 96.154 96.154" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M75.183,0.561L17.578,46.513c-0.951,0.76-0.951,2.367,0,3.126l57.608,45.955c0.689,0.547,1.717,0.709,2.61,0.414 c0.186-0.061,0.33-0.129,0.436-0.186c0.65-0.351,1.057-1.025,1.057-1.765V2.093c0-0.736-0.405-1.414-1.057-1.762 c-0.108-0.059-0.253-0.127-0.426-0.184C76.903-0.15,75.874,0.011,75.183,0.561z"></path> </g> </g></svg>',
    '<svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 96.154 96.154" xml:space="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M75.183,0.561L17.578,46.513c-0.951,0.76-0.951,2.367,0,3.126l57.608,45.955c0.689,0.547,1.717,0.709,2.61,0.414 c0.186-0.061,0.33-0.129,0.436-0.186c0.65-0.351,1.057-1.025,1.057-1.765V2.093c0-0.736-0.405-1.414-1.057-1.762 c-0.108-0.059-0.253-0.127-0.426-0.184C76.903-0.15,75.874,0.011,75.183,0.561z"></path> </g> </g></svg>',
  ],
  onChange: corouselShifted,
});

$(document).on("click", ".owl-item>div", function () {
  // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
  var $speed = 300; // in ms
  $owl.trigger("to.owl.carousel", [$(this).data("position"), $speed]);
});

const startSipButton = document.getElementById("start_sip_btn");

const backToColouselButton = document.getElementById("calculator_back_btn");

const addEventListenerFunction = () => {
  backToColouselButton.addEventListener("click", () => {
    document.getElementById("corousel_wrapper").style.display = "";

    document.getElementById("calculator_wrapper").style.display = "none";
  });

  for (let i = 0; i < 6; i++) {
    const targetBtn = document.getElementById(`footer_btn_${i}`);

    if (targetBtn) {
      targetBtn.addEventListener("click", () => {
        targetCardIdx = i;
        sipCalculatorStateUpdated();
      });
    }
  }
};

const sipCalculatorStateUpdated = () => {
  document.getElementById("corousel_wrapper").style.display = "none";

  document.getElementById("calculator_wrapper").style.display = "";

  document.getElementById("calculator_head").innerHTML =
    displayDataArray[targetCardIdx].text1;

  const subHeads = document.getElementsByClassName("calculator_subhead");

  for (let i = 0; i < subHeads.length; i++) {
    subHeads[i].innerHTML = displayDataArray[targetCardIdx].text2;
  }

  document.getElementById(
    "calculator_img"
  ).src = `assets/img/${displayDataArray[targetCardIdx].image}`;

  const remainingSips = [];

  for (let idx = 0; idx < displayDataArray.length; idx++) {
    if (idx !== targetCardIdx) {
      remainingSips.push(displayDataArray[idx]);
    }
  }

  let footerInnerHtml = "";

  let row1 = "",
    row2 = "";

  for (let i = 0; i < remainingSips.length; i++) {
    const item = remainingSips[i];

    // if (i < 3) {
      row1 += `<div id="footer_btn_${item.idx}" class="footer-2nd-icons footer_btn_${item.idx}">
            <img alt="Mars Image"src="assets/img/${item.icon}">
            &nbsp;
            <p>${item.header}</p>
        </div>`;
    // }
    //  else {
    //   row2 += `<div id="footer_btn_${item.idx}" class="footer-2nd-icons footer_btn_${item.idx}">
    //         <img alt="Mars Image"src="assets/img/${item.icon}">
    //         &nbsp;
    //         <p>${item.header}</p>
    //     </div>`;
    // }
  }

  footerInnerHtml = ` <div class="col-1-of-1 footer-1st">${row1}</div>`

  document.getElementById("footer-2nd").innerHTML = footerInnerHtml;

  addEventListenerFunction();
};

startSipButton.addEventListener("click", () => {
  sipCalculatorStateUpdated();
});




document.addEventListener('DOMContentLoaded', function(event) {
  var divheight=document.getElementById("slideContent").clientHeight;
  console.log(divheight);
  var img=document.getElementById("hero-slide-img");
  img.style.height = divheight + "px";
})
