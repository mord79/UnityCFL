#pragma strict

//Changer pour le GameManagerScript qui doit etre static
//var score : int;
var audioComponent: AudioSource;
var audioList : AudioClip[];

function Update () {


		if(Input.GetKeyDown(KeyCode.S)){
			GameManagerScript.AddScore(1);
		
		}


}

function OnTriggerEnter(other: Collider){


			if(other.gameObject.tag == "Collectible"){
				audioComponent.clip = audioList[0];
				audioComponent.Play();
				
				Destroy(other.gameObject);
				GameManagerScript.AddScore(50);
				print("Score :" + GameManagerScript.score);
				
				
				
			}
			
}

