#pragma strict

function Start () {
		
		if(GameManagerScript.health == 0){
			
			GameManagerScript.health = 100;
			
		}
}

function Update(){

		if(GameManagerScript.health <= 0){
			
			Application.LoadLevel(0);
		
		}


}