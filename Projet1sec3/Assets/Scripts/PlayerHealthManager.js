#pragma strict

function Start () {
// initiation des points de vie		
		if(GameManagerScript.health == 0){
			
			GameManagerScript.health = 100;
			
		}
}

function Update(){
// mort du player
		if(GameManagerScript.health <= 0){
			
			Application.LoadLevel(0);
		
		}


}