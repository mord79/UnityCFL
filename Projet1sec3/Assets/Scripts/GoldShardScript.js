#pragma strict

@Range(-100,100)
var rotationSpeed : float;



function Start () {

}

function Update () {
		
		
		transform.Rotate(Vector3.up*rotationSpeed, Space.World);
			
		
}

function OnTriggerEnter(other: Collider){

var audioPlayer : AudioManagerPlayer;

			if(other.gameObject.tag == "Player"){
				
				audioPlayer = other.gameObject.GetComponentInChildren(AudioManagerPlayer);
				
				
				audioPlayer.PlayCollectible();
				GameManagerScript.AddScore(50);
				print("Score :" + GameManagerScript.score);
				Destroy(gameObject);
				
				
				
			}
			
			
			
}

