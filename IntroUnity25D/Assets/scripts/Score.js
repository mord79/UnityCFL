#pragma strict

import UnityEngine.UI;

var text : Text;
text = GameObject.Find("Score").GetComponent(Text);

var score : int;

function Start () {

	text.text = "Score: " + score;


}

function AddScore(number : int){
	
	score += number;
	text.text = "Score: " + score;

}