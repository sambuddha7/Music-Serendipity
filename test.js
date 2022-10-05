var tl = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('.b1', .5, {x:200, opacity: 0});
tl.from('.s', 1, { width: 0}, "=-.5");
tl.from('#jazz', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1");
tl.from('#phone', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7");

tl2.from("#box", 1, {opacity: 0, scale: 0});
tl2.to("#box", .5, {left: "20%", scale: 1.3, borderColor: '#f1f1f1', borderWidth: 12, boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)'})
tl3.from('.b2', .5, {x:200, opacity: 0});
tl3.from('.s1', 1, { width: 0}, "=-.5");
tl3.from('#studio', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1");
tl3.from('#guitar', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7");
tl4.from('.b3', .5, {x:200, opacity: 0});
tl4.from('.s2', 1, { width: 0}, "=-.5");
tl4.from('#couple', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1");
tl4.from('#band', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7");
const scene = new ScrollMagic.Scene({
  triggerElement: ".hs"
})
  .setTween(tl)
    .addTo(controller);
const scene3 = new ScrollMagic.Scene({
  triggerElement: ".hs1"
})
  .setTween(tl3)
    .addTo(controller);
const scene4 = new ScrollMagic.Scene({
  triggerElement: ".hs2"
})
  .setTween(tl4)
    .addTo(controller);
const scene2 = new ScrollMagic.Scene({
  triggerElement: "blockquote"
})
  .setTween(tl2)
		.addTo(controller);