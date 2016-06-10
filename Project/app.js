// Variables

var canvasWidth = 375;
var canvasHeight = 667;
var menuHeight = (55);

// Objects

// Device

device = new Framer.DeviceView();
device.setupContext();
device.deviceType = "iphone-6-silver";
device.contentScale = 2;

// Canvas

scroll = new ScrollComponent({width: canvasWidth, height: canvasHeight});

canvas = new Layer({x: 0, y: 0, width: canvasWidth, height: canvasHeight});

	navigationBody = new Layer({x: 0, y: 0, width: canvasWidth, height: 1320, parent: scroll.content, backgroundColor: '#ccc'});
	scroll.scrollHorizontal = false

	body = new Layer({x: 0, y: 0, width: canvasWidth, height: canvasHeight, backgroundColor: '#fff'});
		body.superLayer = canvas;


// Header

navbar = new Layer({x: 0, y: 0, width: canvasWidth, height: menuHeight, backgroundColor: '#ccc'});
	navbar.superLayer = body;

	logo = new Layer({x: 0, y: 0, width: 150, height: 30, html: 'Sportscraft', style: {'textAlign': 'center'}});
		logo.superLayer	= navbar;
		logo.center();

	menuBtn = new Layer({x: 0, y: 0, width: 30, height: 30});
		menuBtn.superLayer = navbar;
		menuBtn.x = Align.left(10);
		menuBtn.centerY();

	cartBtn = new Layer({x: 0, y: 0, width: 30, height: 30});
		cartBtn.superLayer = navbar;
		cartBtn.x = Align.right(-10);
		cartBtn.centerY();


// Menu items

// , {layerName: 'women', label: 'Women'}, {layerName: 'men', label: 'Men'

var categories = [
	{layerName: 'newArrivals', label: 'New Arrivals', subCategories: [
			{subLayerName: 'women', subLabel: 'Womens1'}, 
			{subLayerName: 'women', subLabel: 'Mens1'}
		]},
	{layerName: 'womens', label: 'Womens', subCategories: [
			{subLayerName: 'womensNewArrivals', subLabel: 'New Arrivals'}, 
			{subLayerName: 'womensDenim', subLabel: 'Denim'},
			{subLayerName: 'womensDresses', subLabel: 'Dresses'},
			{subLayerName: 'womensCoats', subLabel: 'Coats & Jackets'},
			{subLayerName: 'womensKnits', subLabel: 'Knits'},
			{subLayerName: 'womensPants', subLabel: 'Pants'},
			{subLayerName: 'womensShirts', subLabel: 'Shirts'},
			{subLayerName: 'womensShorts', subLabel: 'Shorts'},
			{subLayerName: 'womensSkirts', subLabel: 'Skirts'},
			{subLayerName: 'womensTopsPolos', subLabel: 'Tops & Polos'},
			{subLayerName: 'womensLiberty', subLabel: 'Liberty'},
			{subLayerName: 'womensEva', subLabel: 'Eva'},
			{subLayerName: 'womensHeidi', subLabel: 'Heidi'},
			{subLayerName: 'womensGiftCertificates', subLabel: 'Gift Certificates'}
		]},
	{layerName: 'womens', label: 'Womens', subCategories: [{subLayerName: 'womensAccessories', subLabel: 'Womens'}, {subLayerName: 'mensAccessories', subLabel: 'Mens'}]},
	{layerName: 'accessories', label: 'Accessories', subCategories: [{subLayerName: 'womensAccessories', subLabel: 'Womens'}, {subLayerName: 'mensAccessories', subLabel: 'Mens'}]},
];

var categoryPosition = 0;
var subCategoryPosition = menuHeight;

for (category of categories) {
	category.layerName = new Layer({x: 0, y: categoryPosition, width: 325, height: menuHeight, html: category.label, style: {'padding': '10px 20px'}});

	for (subCategory of category.subCategories) {
		subCategory.subLayerName = new Layer({x: 0, y: subCategoryPosition, width: 325, height: menuHeight, html: subCategory.subLabel, style: {'padding': '10px 40px'}});
		subCategory.subLayerName.superLayer = navigationBody;
		subCategoryPosition = subCategory.subLayerName.y + menuHeight;
	}

	categoryPosition = category.layerName.y + menuHeight + (category.subCategories.length * (menuHeight));
	subCategoryPosition = categoryPosition + menuHeight;
	category.layerName.superLayer = navigationBody;
} 



// States

body.states.add({
	second: {x: 325}
});

// Animation

body.states.animationOptions = {
	curve: 'ease-in-out',
	time: 0.2
}

// Events

menuBtn.on(Events.Click, function() {
	body.states.next();
});

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
