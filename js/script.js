/*----------------------------------------------------*/
/* Cookie Consent Banner
    ------------------------------------------------------ */
const cookieStorage = {
  getItem: (key) => {
    const cookies = document.cookie
      .split(";")
      .map((cookie) => cookie.split("="))
      .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
    return cookies[key];
  },
  setItem: (key, value) => {
    document.cookie = `${key}=${value}`;
  },
};

const storageType = cookieStorage;
const consentPropertyName = "lrCookieConsent";

const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
  const consentPopup = document.getElementById("consent-popup");
  const acceptBtn = document.getElementById("cta-consent-accept");

  const acceptFn = (event) => {
    saveToStorage(storageType);
    consentPopup.classList.add("consent-popup-hidden");
  };

  acceptBtn.addEventListener("click", acceptFn);

  if (shouldShowPopup()) {
    setTimeout(() => {
      consentPopup.classList.remove("consent-popup-hidden");
    }, 3000);
  }
};

/*----------------------------------------------------*/
/* Preloader
    ------------------------------------------------------ */

$('.preloader-container').fadeOut(3000).promise().done(function() {
  $('.header').fadeIn(3000);
});


jQuery(document).ready(function ($) {
  /*----------------------------------------------------*/
  /* Navigation
    ------------------------------------------------------ */

  // Top Navigation
  $(".top-menu-toggle").on("click", function () {
    $(this).toggleClass("open-top-nav");
    $(".top-nav").toggleClass("open-top-nav");
  });

  $(".top-menu-toggle").click(function () {
    if ($(".top-menu-toggle").hasClass("open-top-nav")) {
      $(".top-menu-toggle").addClass("active");
    } else {
      $(".top-menu-toggle").removeClass("active");
    }
  });

  $(".top-nav li a").click(function () {
    if ($(".top-nav").hasClass("open-top-nav")) {
      $(".top-nav").removeClass("open-top-nav");
      $(".top-menu-toggle").removeClass("open-top-nav active");
    }
  });

  // Sticky Navigation Landing Page
  $(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
      $(".main_nav").addClass("sticky");
    } else {
      $(".main_nav").removeClass("sticky");
    }
  });

  // Sticky Navigation Work Page
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $(".main_nav.work").addClass("sticky");
    } else {
      $(".main_nav.work").addClass("sticky");
    }
  });

  // Adds class active-nav on clicked nav link
  $(".nav-list li, .back-to-top-btn").click(function (e) {
    $(".nav-list li, .back-to-top-btn").removeClass("active-nav");
    $(this).addClass("active-nav");
  });

  // Mobile Navigation
  $(".mobile-toggle").click(function () {
    if ($(".main_nav").hasClass("open-nav")) {
      $(".main_nav").removeClass("open-nav");
    } else {
      $(".main_nav").addClass("open-nav");
    }
  });

  $(".main_nav li a").click(function () {
    if ($(".main_nav").hasClass("open-nav")) {
      $(".navigation").removeClass("open-nav");
      $(".main_nav").removeClass("open-nav");
    }
  });

  /*----------------------------------------------------*/
  /* Smooth Scrolling
    ------------------------------------------------------ */

  $(".smoothscroll").on("click", function (e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        600,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  });

  /*----------------------------------------------------*/
  /* Animation Fade In Top
    ------------------------------------------------------ */

  TweenMax.staggerFrom(".heading", 1, { opacity: 0, y: -20, delay: 2.5 }, 1);
  TweenMax.staggerFrom(".heading-effect-2", 1, { opacity: 0, delay: 2.7 }, 1);

  /*----------------------------------------------------*/
  /* Highlight the current section in the navigation bar
    ------------------------------------------------------*/

  var sections = $("section");
  var navigation_links = $("#nav-container a");

  sections.waypoint({
    handler: function (event, direction) {
      var active_section;

      active_section = $(this);
      if (direction === "up") active_section = active_section.prev();

      var active_link = $(
        '#nav-container a[href="#' + active_section.attr("id") + '"]'
      );

      navigation_links.parent().removeClass("active-nav");
      active_link.parent().addClass("active-nav");
    },
    offset: "25%",
  });

  /*----------------------------------------------------*/
  /* Experience Timeline effect
    ------------------------------------------------------ */

  (function () {
    "use strict";

    var items = document.querySelectorAll(
      ".timeline li,  .project-paragraph-img, .profile-img"
    );

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();

  /*----------------------------------------------------*/
  /* Contact Form
    ------------------------------------------------------ */

  $(".submit-btn").click(function (event) {
    var name = $(".name-input").val();
    var statusName = $(".status-name");
    var email = $(".email-input").val();
    var statusEmail = $(".status-email");
    var message = $(".message-input").val();
    var statusMessage = $(".status-message");
    statusName.empty();
    statusEmail.empty();
    statusMessage.empty();

    if (name.length < 4) {
      event.preventDefault();
      statusName.append("<div>Name is not valid</div>");
    }

    if (email.length < 1) {
      event.preventDefault();
      statusEmail.append("<div>Email is not valid</div>");
    }

    function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    function validate() {
      var $result = $("#status-email");
      var email = $("#email").val();
      $result.text("");

      if (validateEmail(email)) {
        return true;
      } else {
        $result.text("Email is not valid");
      }
      return false;
    }

    $("#validate").on("click", validate);

    if (message.length < 10) {
      event.preventDefault();
      statusMessage.append("<div>Message is not valid</div>");
    }
  });

  /*----------------------------------------------------*/
  /* Back to top button
    ------------------------------------------------------ */

  var btn = $("#back-to-top-btn");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  /*----------------------------------------------------*/
  /*  Removes the ID # from URL when Nav link is being clicked
    ------------------------------------------------------ */
  $(window).on("hashchange", function (e) {
    history.replaceState("", document.title, e.originalEvent.oldURL);
  });
});

/*----------------------------------------------------*/
/*  Work Filters
------------------------------------------------------ */
class FilterWork {
  constructor() {
    this.$filtermenuList = $(".work__filters__menu li");
    this.$container = $(".work__grid-wrapper");

    this.updateMenu("all");
    this.$filtermenuList.on("click", $.proxy(this.onClickFilterMenu, this));
  }

  onClickFilterMenu(event) {
    const $target = $(event.target);
    const targetFilter = $target.data("filter");

    this.updateMenu(targetFilter);
    this.updateGallery(targetFilter);
  }

  updateMenu(targetFilter) {
    this.$filtermenuList.removeClass("active");
    this.$filtermenuList.each((index, element) => {
      const targetData = $(element).data("filter");

      if (targetData === targetFilter) {
        $(element).addClass("active");
      }
    });
  }

  updateGallery(targetFilter) {
    if (targetFilter === "all") {
      this.$container.fadeOut(300, () => {
        $(".work__filter-wrapper").show();
        this.$container.fadeIn();
      });
    } else {
      this.$container.find(".work__filter-wrapper").each((index, element) => {
        this.$container.fadeOut(300, () => {
          if ($(element).hasClass(targetFilter)) {
            $(element).show();
          } else {
            $(element).hide();
          }
          this.$container.fadeIn();
        });
      });
    }
  }
}

const filterWork = new FilterWork();
