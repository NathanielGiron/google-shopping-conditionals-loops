var data = require("./products.json")

// Write your solutions below

//console.log(data["items"]);

var count = 0;
var backorder = 0;
var images = 0;
var canon = 0;
var ebay = 0;

for (var i = 0; i < data['items'].length; i++) {

    if (data['items'][i].kind === "shopping#product") {
        count++;
    }

    if (data['items'][i].product.inventories[0].availability === "backorder") {
    	backorder++;
    }

    if (data['items'][i].product.images.length > 1) {
    	images++;
    }

    if (data['items'][i].product.brand === "Canon") {
    	canon++;
    	if (data['items'][i].product.author.name.includes("eBay")) {
    		ebay++;
    	}
    }

    
}

console.log("shopping#products: " + count); 
console.log("backorders: " + backorder);
console.log("images: " + images);
console.log("canon: " + canon);
console.log("ebay: " + ebay);


for (var i = 0; i < data['items'].length; i++) {
	console.log(data['items'][i].product.brand);
	console.log(data['items'][i].product.inventories[0].price);
	console.log(data['items'][i].product.images[0].link);
	console.log("------------------>")
}

//console.log(data["items"]);