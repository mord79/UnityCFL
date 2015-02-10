#pragma strict

var score : int;
DontDestroyOnLoad (transform.gameObject);



function OnLevelWasLoaded (level : int) {

	//Debug.Log("level loaded");
	
}


function AddScore(number : int){
	score += number;
	//Debug.Log("score script" + score);
}
