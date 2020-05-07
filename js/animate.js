var timelineOne = new TimelineMax();

timelineOne.set('.image_container', {scale:2})
.to('.image_container',2,{scale:1.8,y:'-30%'})
.to('.image_container',2,{scale:1, y:'-50%'},"-=2")

// var controller = new ScrollMagic.Controller();

// // Scene-1

// var scene1 = new ScrollMagic.Scene({
//     triggerElement: 'card-1',
//     triggerHook:0,
//     duration:'100%'
// })

// .setTween(timelineOne)
// .addIndicators()

// .addTo(controller)

// var timelineTwo = new TimelineMax();

// timelineTwo
// .to('.card-1',1,{x:'-50%'})

// var x = new TimelineMax();

// x
// .to('.card-3',2,{x:'90%'})
// .to('.card-2',2,{x:'-190%'},'-=2')

var x = new TimelineMax();
 x
 .set('.card',{display:'block'})
 .to('.card-1',2,{x:'-200%'})
 .to('.card-2',2,{x:'-200%'},'-=2')
 .to('.card-3',2,{x:'110%'},'-=2')
 .to('.card-4',2,{x:'110%'},'-=2')

 var z = new TimelineMax();

 z
 .to('.card-1',2,{y:'10%'})
 .to('.card-2',2,{y:'-115%'},'-=2')
 .to('.card-3',2,{y:'10%'},'-=2')
 .to('.card-4',2,{y:'-115%'},'-=2')


