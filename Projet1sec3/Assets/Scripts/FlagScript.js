#pragma strict

var nextScene : int;

//function OnCollisionEnter(other : Collision){
//
//	if(other.gameObject.tag == "Player"){
//	
//		Application.LoadLevel(nextScene);
//	}
//}
	
function OnTriggerEnter(other : Collider){

	if(other.gameObject.tag == "Player"){
	
		Application.LoadLevel(nextScene);
	}



}