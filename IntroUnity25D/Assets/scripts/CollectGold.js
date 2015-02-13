#pragma strict

var collectibleScore: int;
var gameManager : GameManagerScript;
gameManager = GameObject.Find("GameManager").GetComponent(GameManagerScript);

function  OnTriggerEnter (other : Collider){
	var collisionTag : String = other.gameObject.tag;

		if(collisionTag == "Player"){
			gameManager.AddScore(collectibleScore);
			gameManager.AddGold();
			Destroy(gameObject);
			//Debug.Log("Score: "+gameManager.GetComponent(Score).score);	
		}



}
