window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  var player = GetPlayer();
var styledText = player.GetVar("Question_correct_indication");


var styledText = "<span><font color='#FFFFFF'>WELL DONE!</font></span>";

player.SetVar("Question_correct_indication",styledText);
}

window.Script2 = function()
{
  document.getElementById('reset').style.visibility = "hidden";
document.getElementById('next').style.visibility = "hidden";
document.getElementById('prev').style.visibility = "hidden";
}

window.Script3 = function()
{
  document.getElementById('reset').style.visibility = "hidden";
document.getElementById('next').style.visibility = "hidden";
document.getElementById('prev').style.visibility = "hidden";
}

};
