var data = require("./products.json")

// Problem 1:
var count = 0;
for (var i = 0; i < data['items'].length; i++) {
	if (data['items'][i].kind === 'shopping#product') {
		count++;
	}
}
console.log(count);
// Problem 2:
for (var i = 0; i < data['items'].length; i++) {
  if (data.items[i].product.inventories[0].availability === 'backorder') {
    console.log(data.items[i].product.title);
  }
}
// Problem 3:
for (var i = 0; i < data['items'].length; i++) {
  if (data.items[i].product.images.length > 1) {
    console.log(data.items[i].product.title);
  }
}
// Problem 4:
for (var i = 0; i < data['items'].length; i++) {
  if (data.items[i].product.brand === 'Canon') {
    console.log(data.items[i].product.title);
  }
}

// Problem 5:
for (var i = 0; i < data['items'].length; i++) {
  if (data.items[i].product.brand === 'Canon' && data.items[i].product.author.name[0].indexOf("eBay")){
    console.log(data.items[i].product.title);
  }
}

// Problem 6:

for (var i = 0; i < data['items'].length; i++) {
  {
    console.log(data.items[i].product.title + ' WITH A BRAND OF ' + data.items[i].product.brand + ' WITH A PRICE OF $' + data.items[i].product.inventories[0].price + '.' + "HERE'S A LINK: " + data.items[i].product.images[0].link) ;
  }
}




