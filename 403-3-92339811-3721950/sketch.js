/*

Officer: 3721950
CaseNum: 403-3-92339811-3721950

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Crowther Road.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 91 meters from Turing's Column then alert local police by drawing a DarkCyan circle around it with a radius of 91 pixels.
- if Shiffman is in Algol fish whole-salers then the neighbourhood watch must be notified by drawing a MidnightBlue rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a LawnGreen rectangle covering the area between Ada Avenue, Reynolds Street, Crowther Road and Packard Avenue.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  ellipse()
  dist()

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...
	
//91m distance dark circle	
if(dist(mouseX, mouseY,1491, 585)<= 91)
{
	fill(0,139,139);
	ellipse(1491, 585,91 * 2, 91 * 2);
	
}
//Fish wholsalers	
if(mouseX > 1590 && mouseX < 1691
  	&& mouseY > 614 && mouseY < 691)
{
 	fill(25, 25, 112)
 	rect(1590,614,104,77) 
	
}
//neither position
if (dist(mouseX, mouseY,1491, 585) > 91 &&
    (mouseX <= 1590 || mouseX >= 1691 || mouseY <= 614 || mouseY >= 691))
{
	fill(124, 252, 0)
	rect(1564, 183, 322, 173 )	
}
	

//  && (mouseX > 1690 && mouseX < 1590 && mouseY < 614 && mouseY > 691)


    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
