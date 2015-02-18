#pragma strict

function OnTriggerEnter (other : Collider) {
		
	//	Debug.Log("playerHit!");
		
		
		if(other.CompareTag("Ennemi")){
				
				var pvScript : PointsVie;
				pvScript = gameObject.GetComponentInParent(PointsVie);
				
				pvScript.pointsVie = 0;
		
			
		
		}
			
}
