// Canvas

canvas = new Layer({x: 0, y: 0, width: 375, height: 667});

navigationBody = new Layer({x: 0, y: 0, width: 375, height: 667 });
navigationBody.superLayer = canvas;

body = new Layer({x: 0, y: 0, width: 375, height: 667 });
body.superLayer = canvas;



// imageLayer = new Layer({x:0, y:0, width:128, height:128, image:"images/Icon.png"})
// imageLayer.center()

// // Define a set of states with names (the original state is 'default')
// imageLayer.states.add({
// 	second: {y:100, scale:0.6, rotationZ:100},
// 	third:  {y:300, scale:1.3},
// 	fourth:	{y:200, scale:0.9, rotationZ:200},
// })

// // Set the default animation options
// imageLayer.states.animationOptions = {
// 	curve: "spring(500,12,0)"
// }

// // On a click, go to the next state
// imageLayer.on(Events.Click, function() {
// 	imageLayer.states.next()
// })
