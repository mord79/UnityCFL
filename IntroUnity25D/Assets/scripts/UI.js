#pragma strict

import UnityEngine.UI;

var text : Text;
var gameManagerScore : GlobalVariables;

function Start () {
	text = GetComponent(Text);
	gameManagerScore = GameObject.Find("GameManager").GetComponent("GlobalVariables");
	
	
}


function Update(){
	UpdateScore();
}


function UpdateScore(){
	text.text = "Score: " + gameManagerScore.score;
}