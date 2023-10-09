$(document).ready(function () {
  AOS.init({
    offset: 200,
    duration: 1000,
    once: true,
  });
  $(".data-aos").attr("data-aos", "fade-down");
});

$(document).ready(function () {
  // page scroll to top progress wrapper
  $(window).on("scroll load", () => {
    let scrollProgress = $("#progress-wrapper");
    let pos = $(document).scrollTop();
    let calcHeight = $(document).height() - $(window).height();

    let scrollValue = Math.round((pos * 100) / calcHeight);
    scrollProgress.css("display", pos > 100 ? "grid" : "none");

    $("#progress-value").click(function () {
      $("html, body").scrollTop(0);
    });

    scrollProgress.css(
      "background",
      `conic-gradient(#0E82FD ${scrollValue}%, #d7d7d7 ${scrollValue}%)`
    );
  });

  // navbar reduced on scroll
  $(document).ready(function () {
    var scrollThreshold = 100;

    function toggleNavbarHeight() {
      $(".navbar").toggleClass(
        "navbar-reduced",
        $(window).scrollTop() > scrollThreshold
      );
    }
    toggleNavbarHeight();

    $(window).scroll(function () {
      toggleNavbarHeight();
    });
  });

  //homepage datepicker
  $("#datetimepicker").datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
  });
});

// search dropdown

$(document).ready(function () {
  var isSearchOpen = false; // Track search form state

  $(".search-icon").click(function (e) {
    e.preventDefault();
    isSearchOpen = !isSearchOpen; // Toggle search form state
    $(".toggle-search").slideToggle();
  });

  // Prevent slideToggle when clicking inside the input field
  $("#searchInput").click(function (e) {
    e.stopPropagation();
  });

  // Close the search form when clicking outside of it
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".search-icon").length && isSearchOpen) {
      $(".toggle-search").slideUp();
      isSearchOpen = false; // Reset search form state
    }
  });
});

// doctor dashboard circle progress

const speed = 15;

function animateCircle(circleProgress, end) {
  let start = 0;
  let fillInterval = setInterval(function () {
    start++;
    circleProgress.style.background = `conic-gradient(var(--clr) ${
      start * 3.6
    }deg ,#d9d7da ${start * 3.5}deg)`;
    if (start === end) {
      clearInterval(fillInterval);
    }
  }, speed);
}

$(".circle-progress").each(function (index) {
  let end;
  if (index === 0) {
    end = 75;
  } else if (index === 1) {
    end = 65;
  } else if (index === 2) {
    end = 50;
  }
  animateCircle(this, end);
});

// onclick of doctor dashboard active classes
let upcomming = $("#upcomming");
let upcomming_appointments = $("#upcomming-appointments");
let today = $("#today");
let today_appointments = $("#today-appointments");

upcomming.click(function (event) {
  event.preventDefault();
  if (!upcomming_appointments.hasClass("active")) {
    upcomming_appointments.addClass("active");
    upcomming.addClass("active");
    today_appointments.removeClass("active");
    today.removeClass("active");
  }
});

today.click(function (event) {
  event.preventDefault();
  if (!today_appointments.hasClass("active")) {
    today_appointments.addClass("active");
    today.addClass("active");
    upcomming_appointments.removeClass("active");
    upcomming.removeClass("active");
  }
});

// schedule timings on each day js code
let days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

$.each(days, function (index, day) {
  let dayBtn = $("#" + day + "-btn");
  let slot = $("#slot_" + day);

  dayBtn.on("click", function (event) {
    event.preventDefault();
    if (!slot.hasClass("active")) {
      slot.addClass("active");
      dayBtn.parent().addClass("active");

      $.each(days, function (i, d) {
        if (d !== day) {
          $("#slot_" + d).removeClass("active");
          $("#" + d + "-btn")
            .parent()
            .removeClass("active");
        }
      });
    }
  });
});

// delete schedule in schedule timings
function del_schedule(_this) {
  let time_item = $(_this).closest(".doc-time-item");
  if (time_item.length) {
    time_item.remove();
  }
}

$(".visit-time-btn").click(function () {
  var $this = $(this);
  setTimeout(function () {
    $this.toggleClass("btn-active");
  }, 10);

  var checkbox = $this.find('input[type="checkbox"]');
  checkbox.prop("checked", !checkbox.prop("checked"));
});

// show tooltip on visit time btn
$(document).ready(function () {
  $(".visit-time-btn , .fa-info-circle, .call-item").tooltip();
});

$(document).ready(function () {
  $(".open-chat").click(function (event) {
    event.preventDefault();
    if ($(window).width() <= 991) {
      $(".chat-cont-left").addClass("hide-left");
      var index = $(this).index();
      $(".chat-cont-right").eq(index).addClass("show-right");
    }
  });

  $(".back-to-contacts").click(function (event) {
    event.preventDefault();
    if ($(window).width() <= 991) {
      $(".chat-cont-left").removeClass("hide-left");
      $(".chat-cont-right").removeClass("show-right");
    }
  });
});

// ========Voice call =========
$(document).ready(function () {
  $(".mute-video, .mute-btn").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("stop");

    // Toggle the icon using font-awesome classes
    var icon = $(this).find("i");
    if ($(this).hasClass("stop")) {
      if (icon.hasClass("fa-video")) {
        icon.removeClass("fa-video").addClass("fa-video-slash");
      } else if (icon.hasClass("fa-microphone")) {
        icon.removeClass("fa-microphone").addClass("fa-microphone-slash");
      }
    } else {
      if (icon.hasClass("fa-video-slash")) {
        icon.removeClass("fa-video-slash").addClass("fa-video");
      } else if (icon.hasClass("fa-microphone-slash")) {
        icon.removeClass("fa-microphone-slash").addClass("fa-microphone");
      }
    }
  });
});

// toggle full screen

$(document).ready(function () {
  var isFullscreen = false; // Track fullscreen state

  $("#fullscreen-toggle").click(function (e) {
    e.preventDefault();

    var element = document.documentElement; // Get the root element (the whole page)

    if (!isFullscreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    isFullscreen = !isFullscreen; // Toggle fullscreen state
  });
});

// =-=-=- doc profile del img ==-==-=-
$(document).ready(function () {
  $(".del-img").click(function () {
    $(this).closest(".upload-images").remove();
  });

  $(".tags-input input").keydown(function (event) {
    if (event.key === "Enter" && $(this).val().trim() !== "") {
      event.preventDefault();

      const tagText = $(this).val().trim();
      const tagBadge = $(
        '<span class="tag badge badge-info">' +
          tagText +
          '<span data-role="remove" class="del-tag"></span></span>'
      );

      $(this).before(tagBadge);
      $(this).val("");
    }
  });

  $(".tags-input").on("click", '[data-role="remove"]', function () {
    $(this).parent().remove();
  });
});

// Add More btns on different pages
$(document).ready(() => {
  function setupAddRemoveBehavior(selector, content, targetContainer) {
    $(document).on("click", selector, function () {
      let add_item = content;
      $(targetContainer).append(add_item);
    });

    $(document).on("click", `${targetContainer} .trash`, function (event) {
      event.preventDefault();
      $(this).closest(".row").remove();
    });
  }

  const infoContent = `
  <div class="row hours-info"><div class="col-12 col-md-10"><div class="row"><div class="col-md-6"><div class="mb-3"><label class="mb-2 w-100">Time Start<select class="form-select form-control"><option value="" selected="selected">-</option><option value="">12.00 pm</option><option value="">12.30 pm</option><option value="">01.00 pm</option><option value="">01.30 pm</option></select></label></div></div><div class="col-md-6"><div class="mb-3"><label class="mb-2 w-100">Time Start<select class="form-select form-control"><option value="" selected="selected">-</option><option value="">12.00 pm</option><option value="">12.30 pm</option><option value="">01.00 pm</option><option value="">01.30 pm</option></select></label></div></div></div></div><div class="col-12 col-md-2"><label for="" class="d-md-block d-sm-none d-none">&nbsp;</label><a  class="btn btn-danger trash"><i class="fas fa-trash-can text-light"></i></a></div></div>
  `;
  const eduContent = `
  <div class="row"> <div class="col-12 col-md-10 col-lg-11"> <div class="row"> <div class="col-lg-4 col-md-6 col-12"> <div class="input-group"> <div class="mb-3 w-100"> <label for="" class="mb-2">Degree </label> <input type="text" class="form-control w-100" /> </div> </div> </div> <div class="col-lg-4 col-md-6 col-12"> <div class="input-group"> <div class="mb-3 w-100"> <label for="" class="mb-2" >Collage/Institute </label> <input type="text" class="form-control w-100" /> </div> </div> </div> <div class="col-lg-4 col-md-6 col-12"> <div class="input-group"> <div class="mb-3 w-100"> <label for="" class="mb-2" >Year of Completion </label> <input type="text" class="form-control w-100" /> </div> </div> </div> </div> </div> <div class="col-12 col-md-2 col-lg-1"> <label for="" class="d-md-block d-sm-none d-none mt-2" >&nbsp;</label ><a class="btn btn-danger trash" ><i class="fas fa-trash-can text-light"></i ></a> </div> </div>
  `;

  const expContent = `
  <div class="row"> <div class="col-12 col-md-10 col-lg-11"> <div class="row"> <div class="col-lg-4 col-md-6 col-12"> <div class="input-group"> <div class="mb-3 w-100"> <label for="" class="mb-2">Hoppital Name </label> <input type="text" class="form-control w-100" /> </div> </div> </div> <div class="col-lg-4 col-md-6 col-12"> <div class="input-group"> <div class="mb-3 w-100"> <label for="" class="mb-2">From </label> <input type="text" class="form-control w-100" /> </div> </div> </div> <div class="col-lg-4 col-md-6 col-12"> <div class="input-group"> <div class="mb-3 w-100"> <label for="" class="mb-2">To </label> <input type="text" class="form-control w-100" /> </div> </div> </div> <div class="col-lg-4 col-md-6 col-12"> <div class="input-group"> <div class="mb-3 w-100"> <label for="" class="mb-2">Designation </label> <input type="text" class="form-control w-100" /> </div> </div> </div> </div> </div> <div class="col-12 col-md-2 col-lg-1"> <label for="" class="d-md-block d-sm-none d-none mt-2">&nbsp;</label ><a class="btn btn-danger trash" ><i class="fas fa-trash-can text-light"></i ></a> </div> </div>
  `;

  const awardContent = `
  <div class="row"> <div class="col-12 col-md-10 col-lg-11"> <div class="row"> <div class="col-md-5 col-12"> <div class="input-group"> <div class="mb-3 w-100"> <label for="" class="mb-2">Award </label> <input type="text" class="form-control w-100" /> </div> </div> </div> <div class="col-md-5 col-12"> <div class="input-group"> <div class="mb-3 w-100"> <label for="" class="mb-2">Year </label> <input type="text" class="form-control w-100" /> </div> </div> </div> <div class="col-12 col-md-2 col-lg-1"> <label for="" class="d-md-block d-sm-none d-none mt-2" >&nbsp;</label ><a class="btn btn-danger trash" ><i class="fas fa-trash-can text-light"></i ></a> </div> </div> </div> </div>
  `;

  const membershipContent = `
  <div class="row"> <div class="col-md-5 col-12"> <div class="input-group"> <div class="mb-3 w-100"> <label for="" class="mb-2">Memberships </label> <input type="text" class="form-control w-100" /> </div> </div> </div> <div class="col-12 col-md-2 col-lg-1"> <label for="" class="d-md-block d-sm-none d-none mt-2" >&nbsp;</label ><a class="btn btn-danger trash" ><i class="fas fa-trash-can text-light"></i ></a> </div> </div>
  `;
  const registeraionContent = `
  <div class="row"> <div class="col-md-5 col-12"> <div class="input-group"> <div class="mb-3 w-100"> <label for="" class="mb-2">Registerations </label> <input type="text" class="form-control w-100" /> </div> </div> </div> <div class="col-md-5 col-12"> <div class="input-group"> <div class="mb-3 w-100"> <label for="" class="mb-2">Year </label> <input type="text" class="form-control w-100" /> </div> </div> </div> <div class="col-12 col-md-2 "> <label for="" class="d-md-block d-sm-none d-none mt-2" >&nbsp;</label ><a class="btn btn-danger trash" ><i class="fas fa-trash-can text-light"></i ></a> </div> </div>
  `;

  setupAddRemoveBehavior(".add_info", infoContent, ".add_item");
  setupAddRemoveBehavior(".add-edu", eduContent, ".add-education");
  setupAddRemoveBehavior(".add-exp", expContent, ".add-experience");
  setupAddRemoveBehavior(".add-award", awardContent, ".add-new-award");
  setupAddRemoveBehavior(
    ".add-Memberships",
    membershipContent,
    ".add-new-Memberships"
  );
  setupAddRemoveBehavior(
    ".add-Registerations",
    registeraionContent,
    ".add-new-Registerations"
  );
});

// animate on scroll
// Use jQuery to select the element to animate
const $element = $(".my-element");

// Define the options for the Intersection Observer
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

// Create a new Intersection Observer
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    // If element is in viewport, add the 'show' class to trigger the animation
    if (entry.isIntersecting) {
      $element.addClass("show");
    } else {
      $element.removeClass("show");
    }
  });
}, options);

// Start observing the element
$element.each(function () {
  observer.observe(this);
});
