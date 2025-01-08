// GSAP ANIMATIONS HERE

gsap.from("#navigationPanel", {
  duration: 0.5,
  y: -100,
  opacity: 0,
  // ease: "power2.out",
});

gsap.from("#hero-container", {
  duration: 0.5,
  opacity: 0,
});

gsap.from("#navigationItems li ", {
  y: -10,
  duration: 0.5,
  opacity: 0,
  stagger: 0.1,
  delay: 0.5,
});

var time1 = gsap.timeline();
var time2 = gsap.timeline();

time1.from("#howitworks-container", {
  duration: 0.5,
  opacity: 0,
  y: 50,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#howitworks-container",
    start: "top 80%",
    end: "top 70%",
    scroller: "body",

    scrub: 2,
  },
});

time1.from("#stepcontainer1", {
  duration: 0.5,
  opacity: 0,
  y: 50,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#stepcontainer1",
    start: "top 80%",
    end: "top 70%",
    scroller: "body",

    scrub: 2,
  },
});
time1.from("#stepcontainer2", {
  duration: 0.5,
  opacity: 0,
  y: 50,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#stepcontainer2",
    start: "top 80%",
    end: "top 70%",
    scroller: "body",

    scrub: 2,
  },
});
time1.from("#stepcontainer3", {
  duration: 0.5,
  opacity: 0,
  y: 50,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#stepcontainer3",
    start: "top 80%",
    end: "top 70%",
    scroller: "body",

    scrub: 2,
  },
});

// time2.from("#CompaniesList1", {
//   duration: 0.5,
//   opacity: 0,
//   delay: 0.2,
//   scrollTrigger: "#CompaniesList1",
// });
// time2.from("#CompaniesList2", {
//   duration: 0.5,
//   opacity: 0,
//   delay: 0.2,
//   scrollTrigger: "#CompaniesList2",
// });
// time2.from("#CompaniesList3", {
//   duration: 0.5,
//   opacity: 0,
//   delay: 0.2,
//   scrollTrigger: "#CompaniesList3",
// });

// gsap.to("#menuIcon.animate-bounce", {
//   rotate: 360,
//   x: 400,
//   duration: 0.5,
// });

// gsap.to("#closeIcon.animate-bounce", {
//   rotate: 360,
//   x: 400,
//   duration: 0.5,
// });

time2.from("#bentogrid-sectiom", {
  duration: 0.5,
  opacity: 0,
  y: 50,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#bentogrid-sectiom",
    start: "top 80%",
    end: "top 70%",
    scroller: "body",

    scrub: 2,
  },
});

time2.from("#bentogrid", {
  duration: 0.5,
  opacity: 0,
  y: 50,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#bentogrid",
    start: "top 80%",
    end: "top 70%",
    scroller: "body",

    scrub: 2,
  },
});

time2.from("#grid-element", {
  duration: 0.5,
  opacity: 0,
  y: 50,
  delay: 0.2,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#grid-element",
    start: "top 80%",
    end: "top 70%",
    scroller: "body",

    scrub: 2,
  },
});

gsap.from("#customer-stories", {
  duration: 0.5,
  opacity: 0,
  y: 50,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#customer-stories",
    start: "top 80%",
    end: "top 70%",
    scroller: "body",

    scrub: 2,
  },
});

gsap.from("#customers-features", {
  duration: 0.5,
  opacity: 0,
  y: 50,
  delay: 0.2,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#customer-stories",
    start: "top 70%",
    end: "top 30%",
    scroller: "body",

    scrub: 2,
  },
});

gsap.from(".char", {
  y: 20,
  duration: 0.05,
  opacity: 0,
  stagger: 0.03,
  delay: 0.5,
});

// gsap.from("#main-text", {
//   duration: 0.5,
//   // transform: translateY(0,100%),
//   transform: translate(0, 100000),
//   opacity: 0,
// });

document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;

  // console.log(e);
  gsap.to("#cursor", {
    x: x - 8,
    y: y - 8,
    duration: 1,
  });
});
