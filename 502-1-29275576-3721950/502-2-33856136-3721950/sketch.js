/*

Officer: 3721950
CaseNum: 502-2-33856136-3721950

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + object.property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var censored_A = {
	redacted_0: [ "meddle", "$200,000", "sneeze"], 
	redacted_1: [ "sneeze", "meddle", "bake"], 
	redacted_2: [ "stuff", "play", "a donation"], 
	redacted_3: [ "start", "rejoice", "sneeze"], 
	redacted_4: [ "stuff", "stuff", "fence"], 
	redacted_5: [ "hurry", "hurry", "syndicate"], 
	redacted_6: [ "meddle", "ALGOL", "charge"], 
	redacted_7: [ "plug", "radiate", "protect"], 
	redacted_8: [ "play", "Hopper", "succeed"], 
	redacted_9: [ "hit", "hurry", "succeed"]
};

var censored_B = {
	redacted_0: [ "meddle", "smile", "smile"], 
	redacted_1: [ "protect", "consider", "tug"], 
	redacted_2: [ "radiate", "Edsger", "bake"], 
	redacted_3: [ "clip", "stuff", "smile"], 
	redacted_4: [ "smile", "stuff", "meddle"], 
	redacted_5: [ "mend", "tug", "plug"], 
	redacted_6: [ "Governor Zuckerberg", "sail", "consider"], 
	redacted_7: [ "sneeze", "stuff", "bake"], 
	redacted_8: [ "sail", "play", "bake"], 
	redacted_9: [ "tug", "campaign", "charge"]
};

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger";

  redactedText = "Dear "+censored_B.redacted_6[0]+", I am sure that something could be worked out in terms of "+censored_A.redacted_2[2]+"for your "+censored_B.redacted_9[1]+". How does "+censored_A.redacted_0[1]+" sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. "+censored_A.redacted_8[1]+" needs to be out of the picture. She’s caused enough trouble. Get the "+censored_A.redacted_5[2]+" to organise the "+censored_A.redacted_9[0]+" but I’d prefer it you don’t mention me or "+censored_A.redacted_6[1]+". I owe them enough favours already. Your old friend, "+censored_B.redacted_2[1]+"";

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text(missingWords, 670, 100, 580, 600);
}
