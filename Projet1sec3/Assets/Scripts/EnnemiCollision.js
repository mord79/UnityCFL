#pragma strict

function Start () {

}

function Update () {

}


function OnCollisionEnter(other : Collision){

		var hit : RaycastHit; 			
		if(other.gameObject.tag == "Ennemi" && Physics.Raycast(transform.position, transform.TransformDirection(Vector3.down),hit,1)){	
			
			if(hit.collider.tag != "Ennemi"){
				Destroy(gameObject);
				
			}
			
		}

}