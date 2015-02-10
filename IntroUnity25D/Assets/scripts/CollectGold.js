#pragma strict

var collectibleScore: int;
var gameManager : GameObject;
gameManager = GameObject.Find("GameManager");

function  OnTriggerEnter (other : Collider){
	var collisionTag : String = other.gameObject.tag;

		if(collisionTag == "Player"){
			gameManager.GetComponent(GlobalVariables).AddScore(collectibleScore);
			Destroy(gameObject);
			//Debug.Log("Score: "+gameManager.GetComponent(Score).score);	
		}



}
