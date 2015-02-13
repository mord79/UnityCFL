#pragma strict

import UnityEngine.UI;

var text : Text;
var gameManager : GameManagerScript;
text = GetComponent(Text);
	gameManager = GameObject.Find("GameManager").GetComponent(GameManagerScript);


function Update(){
	UpdateScore();
}


function UpdateScore(){
	text.text = "Score: " + gameManager.score + "\nGold: " + gameManager.gold;
}