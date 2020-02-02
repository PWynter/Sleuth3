/*

Officer: 3721950
CaseNum: 502-1-29275576-3721950

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way.
It’s a little more tricky to decipher but I know you can do it.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + Array[index].property + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var document_A = [
	{token_0: "succeed", token_1: "protect", token_2: "rejoice"}, 
	{token_0: "protect", token_1: "start", token_2: "succeed"}, 
	{token_0: "romantic", token_1: "sneeze", token_2: "meddle"}, 
	{token_0: "stuff", token_1: "smile", token_2: "bake"}, 
	{token_0: "stuff", token_1: "consider", token_2: "meddle"}, 
	{token_0: "tug", token_1: "bake", token_2: "syndicate"}, 
	{token_0: "capital", token_1: "stuff", token_2: "stuff"}, 
	{token_0: "meddle", token_1: "play", token_2: "consider"}, 
	{token_0: "smile", token_1: "hurry", token_2: "start"}, 
	{token_0: "rejoice", token_1: "Hopper’s", token_2: "fence"}
];

var document_B = [
	{token_0: "sneeze", token_1: "sail", token_2: "plug"}, 
	{token_0: "mend", token_1: "Governor Zuckerberg", token_2: "plug"}, 
	{token_0: "protect", token_1: "a donation", token_2: "start"}, 
	{token_0: "protect", token_1: "radiate", token_2: "stuff"}, 
	{token_0: "rejoice", token_1: "delicate", token_2: "COBOL"}, 
	{token_0: "smile", token_1: "smile", token_2: "smile"}, 
	{token_0: "plug", token_1: "Edsger", token_2: "she has"}, 
	{token_0: "consider", token_1: "hurry", token_2: "start"}, 
	{token_0: "protect", token_1: "rejoice", token_2: "rejoice"}, 
	{token_0: "succeed", token_1: "mend", token_2: "sneeze"}
];

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

  missingWords = "Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg";

  redactedText = "My dearest "+document_B[6].token_1+", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about "+document_A[9].token_1+" intervention. I suspect that "+document_B[6].token_2+" a "+document_A[2].token_0+" interest at the "+document_B[4].token_2+". I and the "+document_A[5].token_2+" appreciate your many contributions over the years. However, this is a most "+document_B[4].token_1+" matter which would require significant "+document_A[6].token_0+" for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps "+document_B[2].token_1+" to my forthcoming campaign would help. Yours sincerely, "+document_B[1].token_1+"";

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
