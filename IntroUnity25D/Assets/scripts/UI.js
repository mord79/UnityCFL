#pragma strict

import UnityEngine.UI;

var text : Text;
var gameManagerScore : Score;

function Start () {
	text = GetComponent(Text);
	gameManagerScore = GameObject.Find("GameManager").GetComponent("Score");
	
}


function Update(){
	UpdateScore();
}


function UpdateScore(){
	text.text = "Score: " + gameManagerScore.score;
}