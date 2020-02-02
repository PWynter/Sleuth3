/*

Officer: 3721950
CaseNum: 501-1-62898478-3721950

Case 501 - Max Von Neuman - stage 2

Madame McCarthy says that to summon Max Von Neuman a different approach is needed.
Follow her advice below.

How young Max loved to march with his toy soldiers.
To speak to Max beyond the grave you must place a toy soldier in each of the dashed circles.
Use the image() and the soldierImg variable command to place each soldier in its position.
You will need to use a separate for loop for each of the diagonal lines.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()

*/
var posX = 460;
var posY = 249;
var posXX = 595;
var posYY = 616;

var backgroundImg, soldierImg;

function preload() {
    backgroundImg = loadImage("background.jpg");
    soldierImg = loadImage("Soldier.png");
}

function setup() {
    createCanvas(backgroundImg.width, backgroundImg.height);
    image(backgroundImg, 0, 0);

    imageMode(CENTER);
}

function draw() 
{
    
// add your for loop below	
for(var i = 0; i < 18; i++)
{
	image(soldierImg, posX, posY);
	posX = posX + 38;
	posY = posY + 17;
}
	
for(var jj = 0; jj < 14; jj++)			
{
image(soldierImg, posXX, posYY);
posXX = posXX + 41;
posYY = posYY - 19 ;
}
	
		
		
	

}
