// 1. 

// a Shape constructor 
//  has a name

// 	sides property

// 		number of sides

function Shape(na, sids){
	this.nam = na;
	this.sides = sids;
}


// 2.

// a Rectangle is a shape
	
// 	height

// 	width

function Rectangle(h, w, n, s){
	this.height = h;
	this.width = w;
	Shape.call(this, n, s)
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.area = function(){
	return this.height * this.width;
}

Rectangle.prototype.perimeter = function(){
	return 2*this.height + 2*this.width;
}

// on the Rectangle's prototype 

// 	an area function

// 	a perimeter function

// make sure to connect the Rectangle and the Shape

// 3. 

// a Square is a Rectangle

// 	but if the height and width are different then set the width to be the height 

function Square(h, w, n, s){
	if (h != w){
		w = h;
	}

	Rectangle.call(this, h, w, n, s);
}

Square.prototype = Object.create(Rectangle.prototype);


var s = new Square(6, 6, 'square', 4);

console.log(s.area());
console.log(s.perimeter());


var r = new Rectangle(6, 9, 'rectangle', 4);

console.log(r.area());
console.log(r.perimeter());
console.log(r.sides)
console.log(r.nam)











