//Create a reference for canvas 

//Give specific height and width to the car image
car_height=100;
 car_width=90;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
car_x=10;
car_y=10;
function add() {
	//upload car, and background images on the canvas.
	background =new Image();
 background.onload=uploadbackground;
 background.src=background_image;

}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background,0,0,canvas.width,canvas.height)
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	car=new Image();
	car.onload=uploadcar();
	car.src=rover_image;
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car_y>=0){
		car_y=car_y- 10;
		console.log("when up arrow is pressed"+car_x+","+car_y);
		uploadbackground();
		uploadcar();
		}
	//Define function to move the car upward
}

function down()
{
	if(car_y<=500){
        car_y=car_y+ 10;
        console.log("when down arrow is pressed"+car_x+","+car_y);
        uploadbackground();
        uploadcar();    
    }
	//Define function to move the car downward
}

function left()
{
	if(car_x>=0){
        car_x=car_x- 10;
        console.log("when left arrow is pressed"+car_x+","+car_y);
        uploadbackground();
        uploadcar();    
    }
	//Define function to move the car left side
}

function right()
{
	if(car_x<=700){
        car_x=car_x+ 10;
        console.log("when right arrow is pressed"+car_x+","+car_y);
        uploadbackground();
        uploadcar();    
    }
	//Define function to move the car right side
}
