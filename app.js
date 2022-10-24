$(function () {
  /* Fixed Header*/

  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop(); // позиция окна (на сколько прокрутили)

  checkScroll(scrollPos, introH);

  $(window).on("scroll load resize", function () {
    introH = intro.innerHeight(); // получить высоту блока intro c padding'ами

    scrollPos = $(this).scrollTop();
    checkScroll(scrollPos, introH);
  });

  function checkScroll(scrollPos, introH) {
    if (scrollPos > introH) {
      header.addClass("fixed"); // зафиксировать шапку
    } else {
      header.removeClass("fixed"); // убрать шапку
    }
  }

  /* Smooth Scroll */
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let elementId = $(this).data("scroll"); // при клике хранится эелемент id, который хотим скролить
    let elementOffset = $(elementId).offset().top; //отступ(offset) элемента(elementId) от верха(top)

    nav.removeClass("show");

    $("html, body").animate(
      {
        scrollTop: elementOffset - 70, // прокрутка до элемента - 70px(чтобы не перекрывало блок)
      },
      700
    );
  });

  /* Nav Toogle */
  let nav = $("#nav");
  let navToggle = $("#navToogle");

  navToggle.on("click", function (event) {
    event.preventDefault();

    nav.toggleClass("show");
  });

  /* Testimonials  https://kenwheeler.github.io/slick/ */
  let slider = $("#testimonialsSlider");

  slider.slick({
    infinite: true /*прокрутка(true-бесконечная)*/,
    slidesToShow: 1 /*сколько показывать слайдов*/,
    slidesToScroll: 1 /*сколько прокручивать*/,
    fade: true /* способ отображения и прокрутки слайдера */,
    arrows: false /* стрелки */,
    dots: true /* точки слайдера */,
  });
});
