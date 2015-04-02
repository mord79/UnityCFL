#pragma strict

var nextScene : int;

function OnCollisionEnter(other : Collision){

	if(other.gameObject.tag == "Player"){
	
		Application.LoadLevel(nextScene);
	}



}