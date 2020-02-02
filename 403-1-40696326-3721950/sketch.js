/*

Officer: 3721950
CaseNum: 403-1-40696326-3721950

Case 403 - Stake out - stage 2

I've gotten hold of a hot tip that Shiffman is hiding out at Norbert's Begel Emporium.
We've alerted the local precinct but they cannot act unless they know for certain that he's within 63 meters (pixels) of the spot.

Whenever Shiffman (signified by the mouse) is within 63 pixels of Norbert's Begel Emporium - draw a LawnGreen ellipse with a radius of 63 around it.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  ellipse()
  dist()
  mouseX
  mouseY

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

	if(dist(mouseX, mouseY,1060, 826)<= 63)
	{
		fill(124, 252, 0);
		ellipse(1060, 826,63 * 2, 63 * 2);
	}


    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
