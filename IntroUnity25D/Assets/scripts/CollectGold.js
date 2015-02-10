#pragma strict

var collectibleScore: int;
var gameManager : GameObject;
gameManager = GameObject.Find("GameManager");

function  OnControllerColliderHit (hit : ControllerColliderHit){
var collisionTag : String = hit.collider.tag;

		if(collisionTag == "Collectible"){
			gameManager.GetComponent(Score).AddScore(collectibleScore);
			Destroy(hit.gameObject);
			//Debug.Log("Score: "+gameManager.GetComponent(Score).score);	
		}



}
