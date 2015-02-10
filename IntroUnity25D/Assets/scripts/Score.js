#pragma strict


DontDestroyOnLoad (transform.gameObject);
var score : int;

function OnLevelWasLoaded (level : int) {

	Debug.Log("level loaded");
	
}


function AddScore(number : int){
	score += number;
	Debug.Log("score script" + score);
}
