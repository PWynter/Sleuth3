/*

Officer: 3721950
CaseNum: 502-3-78098139-3721950

Case 502 - A donation - stage 4

This final document will seal the deal kid. C’mon kid. Let’s send these crooks down.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + array[index].property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var A_excerpt = [
{
	component_0: {redacted_0: "bake", redacted_1: "rejoice", redacted_2: "consider", redacted_3: "hurry"}, 
	component_1: {redacted_0: "charge", redacted_1: "rejoice", redacted_2: "consider", redacted_3: "protect"}, 
	component_2: {redacted_0: "mend", redacted_1: "play", redacted_2: "charge", redacted_3: "sail"}
},
{
	component_0: {redacted_0: "rejoice", redacted_1: "radiate", redacted_2: "rejoice", redacted_3: "play"}, 
	component_1: {redacted_0: "hurry", redacted_1: "play", redacted_2: "stuff", redacted_3: "clip"}, 
	component_2: {redacted_0: "tug", redacted_1: "sneeze", redacted_2: "clip", redacted_3: "play"}
},
{
	component_0: {redacted_0: "start", redacted_1: "Governor Zuckerberg", redacted_2: "succeed", redacted_3: "succeed"}, 
	component_1: {redacted_0: "clip", redacted_1: "fence", redacted_2: "play", redacted_3: "sail"}, 
	component_2: {redacted_0: "mend", redacted_1: "bake", redacted_2: "stuff", redacted_3: "sneeze"}
},
{
	component_0: {redacted_0: "$200,000", redacted_1: "bake", redacted_2: "fence", redacted_3: "start"}, 
	component_1: {redacted_0: "play", redacted_1: "meddle", redacted_2: "COBOL", redacted_3: "start"}, 
	component_2: {redacted_0: "mend", redacted_1: "consider", redacted_2: "consider", redacted_3: "protect"}
},
{
	component_0: {redacted_0: "sail", redacted_1: "sail", redacted_2: "tug", redacted_3: "rejoice"}, 
	component_1: {redacted_0: "tug", redacted_1: "protect", redacted_2: "hurry", redacted_3: "hurry"}, 
	component_2: {redacted_0: "succeed", redacted_1: "tug", redacted_2: "sneeze", redacted_3: "smile"}
}];

var B_excerpt = [
{
	component_0: {redacted_0: "radiate", redacted_1: "bake", redacted_2: "play", redacted_3: "sail"}, 
	component_1: {redacted_0: "smile", redacted_1: "donation", redacted_2: "hurry", redacted_3: "stuff"}, 
	component_2: {redacted_0: "stuff", redacted_1: "tug", redacted_2: "syndicate", redacted_3: "consider"}
},
{
	component_0: {redacted_0: "mend", redacted_1: "sneeze", redacted_2: "development", redacted_3: "fence"}, 
	component_1: {redacted_0: "meddle", redacted_1: "play", redacted_2: "Edsger", redacted_3: "plug"}, 
	component_2: {redacted_0: "play", redacted_1: "you", redacted_2: "clip", redacted_3: "plug"}
},
{
	component_0: {redacted_0: "sneeze", redacted_1: "sail", redacted_2: "bake", redacted_3: "hurry"}, 
	component_1: {redacted_0: "charge", redacted_1: "smile", redacted_2: "plug", redacted_3: "stuff"}, 
	component_2: {redacted_0: "clip", redacted_1: "tug", redacted_2: "sneeze", redacted_3: "bake"}
},
{
	component_0: {redacted_0: "ALGOL fish wholesalers", redacted_1: "sail", redacted_2: "meddle", redacted_3: "hurry"}, 
	component_1: {redacted_0: "protect", redacted_1: "consider", redacted_2: "start", redacted_3: "plug"}, 
	component_2: {redacted_0: "play", redacted_1: "bake", redacted_2: "fence", redacted_3: "rejoice"}
},
{
	component_0: {redacted_0: "protect", redacted_1: "bake", redacted_2: "bake", redacted_3: "protect"}, 
	component_1: {redacted_0: "hurry", redacted_1: "consider", redacted_2: "consider", redacted_3: "ALGOL"}, 
	component_2: {redacted_0: "start", redacted_1: "sneeze", redacted_2: "play", redacted_3: "play"}
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg";

  redactedText = "My dearest "+B_excerpt[1].component_1["redacted_2"] +" I have just received your very generous "+B_excerpt[0].component_1["redacted_1"] +" of "+A_excerpt[3].component_0["redacted_0"] +". Thank you. This will be invaluable to our campaign. "+B_excerpt[4].component_1["redacted_3"] +" is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of "+B_excerpt[1].component_2["redacted_1"] +" or "+B_excerpt[3].component_0["redacted_0"] +" to the "+B_excerpt[0].component_2["redacted_2"]+". Your new "+B_excerpt[1].component_0["redacted_2"]+" at the "+A_excerpt[3].component_1["redacted_2"]+" can now proceed without impediment. Yours sincerely, "+A_excerpt[2].component_0["redacted_1"]+" ";

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
