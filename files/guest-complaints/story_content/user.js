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
  var progressBar = document.querySelector("[data-acc-text='progressBar']");

var player = GetPlayer();
var JS_totalSlidesInProject = player.GetVar("SL_totalSlidesInProject");
var JS_currentSlide = player.GetVar("SL_currentSlide");

var objectScale = (JS_currentSlide / JS_totalSlidesInProject) * 1;

gsap.set(progressBar, {scaleX:objectScale, transformOrigin:"center left"});

}

window.Script2 = function()
{
  var progressBar = document.querySelector("[data-acc-text='progressBar']");

var player = GetPlayer();
var JS_totalSlidesInProject = player.GetVar("SL_totalSlidesInProject");
var JS_currentSlide = player.GetVar("SL_currentSlide");

var objectScale = (JS_currentSlide / JS_totalSlidesInProject) * 1;

gsap.set(progressBar, {scaleX:objectScale, transformOrigin:"center left"});

}

window.Script3 = function()
{
  var progressBar = document.querySelector("[data-acc-text='progressBar']");

var player = GetPlayer();
var JS_totalSlidesInProject = player.GetVar("SL_totalSlidesInProject");
var JS_currentSlide = player.GetVar("SL_currentSlide");

var objectScale = (JS_currentSlide / JS_totalSlidesInProject) * 1;

gsap.set(progressBar, {scaleX:objectScale, transformOrigin:"center left"});

}

window.Script4 = function()
{
  var progressBar = document.querySelector("[data-acc-text='progressBar']");

var player = GetPlayer();
var JS_totalSlidesInProject = player.GetVar("SL_totalSlidesInProject");
var JS_currentSlide = player.GetVar("SL_currentSlide");

var objectScale = (JS_currentSlide / JS_totalSlidesInProject) * 1;

gsap.set(progressBar, {scaleX:objectScale, transformOrigin:"center left"});

}

window.Script5 = function()
{
  var progressBar = document.querySelector("[data-acc-text='progressBar']");

var player = GetPlayer();
var JS_totalSlidesInProject = player.GetVar("SL_totalSlidesInProject");
var JS_currentSlide = player.GetVar("SL_currentSlide");

var objectScale = (JS_currentSlide / JS_totalSlidesInProject) * 1;

gsap.set(progressBar, {scaleX:objectScale, transformOrigin:"center left"});

}

window.Script6 = function()
{
  var progressBar = document.querySelector("[data-acc-text='progressBar']");

var player = GetPlayer();
var JS_totalSlidesInProject = player.GetVar("SL_totalSlidesInProject");
var JS_currentSlide = player.GetVar("SL_currentSlide");

var objectScale = (JS_currentSlide / JS_totalSlidesInProject) * 1;

gsap.set(progressBar, {scaleX:objectScale, transformOrigin:"center left"});

}

window.Script7 = function()
{
  var progressBar = document.querySelector("[data-acc-text='progressBar']");

var player = GetPlayer();
var JS_totalSlidesInProject = player.GetVar("SL_totalSlidesInProject");
var JS_currentSlide = player.GetVar("SL_currentSlide");

var objectScale = (JS_currentSlide / JS_totalSlidesInProject) * 1;

gsap.set(progressBar, {scaleX:objectScale, transformOrigin:"center left"});

}

window.Script8 = function()
{
  var progressBar = document.querySelector("[data-acc-text='progressBar']");

var player = GetPlayer();
var JS_totalSlidesInProject = player.GetVar("SL_totalSlidesInProject");
var JS_currentSlide = player.GetVar("SL_currentSlide");

var objectScale = (JS_currentSlide / JS_totalSlidesInProject) * 1;

gsap.set(progressBar, {scaleX:objectScale, transformOrigin:"center left"});

}

window.Script9 = function()
{
  var progressBar = document.querySelector("[data-acc-text='progressBar']");

var player = GetPlayer();
var JS_totalSlidesInProject = player.GetVar("SL_totalSlidesInProject");
var JS_currentSlide = player.GetVar("SL_currentSlide");

var objectScale = (JS_currentSlide / JS_totalSlidesInProject) * 1;

gsap.set(progressBar, {scaleX:objectScale, transformOrigin:"center left"});

}

window.Script10 = function()
{
  var progressBar = document.querySelector("[data-acc-text='progressBar']");

var player = GetPlayer();
var JS_totalSlidesInProject = player.GetVar("SL_totalSlidesInProject");
var JS_currentSlide = player.GetVar("SL_currentSlide");

var objectScale = (JS_currentSlide / JS_totalSlidesInProject) * 1;

gsap.set(progressBar, {scaleX:objectScale, transformOrigin:"center left"});

}

};
