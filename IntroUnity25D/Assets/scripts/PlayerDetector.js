#pragma strict

var moveEnnemiScript : MouvementEnnemi;
moveEnnemiScript = transform.GetComponentInParent(MouvementEnnemi);
var playerDetected;


function OnTriggerEnter (other : Collider) {
		
		if (other.tag == "Player") {
			playerDetected = true;
		}else if (other.tag != "Player"){
			playerDetected = false;
		}
		
		
	}
	
	
function OnTriggerExit (other : Collider) {
		
		if (other.tag == "Player") 
			playerDetected = false;
		
		
		
	}
	
function Update (){

	if (playerDetected) {
			moveEnnemiScript.aiState = "Hunt";
		}else {
			moveEnnemiScript.aiState = "Move";
		}

}
	
		