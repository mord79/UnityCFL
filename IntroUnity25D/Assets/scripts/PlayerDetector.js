#pragma strict

var moveEnnemiScript : MouvementEnnemi;
moveEnnemiScript = transform.GetComponentInParent(MouvementEnnemi);
var playerDetected;


	
function OnTriggerStay (other : Collider) {
		var pvScript : PointsVie;
		pvScript = other.GetComponentInParent(PointsVie);
	
		
		if (other.tag == "Sensor_Player" && pvScript.pointsVie > 0) {
//				Debug.Log("Player Detected");
			playerDetected = true;
		}
		
		
}
	
	

function OnTriggerExit (other : Collider) {
		
		if (other.tag == "Sensor_Player") 
			playerDetected = false;
		
		
		
	}
	
function Update (){

	if (playerDetected) {
			moveEnnemiScript.aiState = "Hunt";
		}else {
			moveEnnemiScript.aiState = "Move";
		}

}
	
		