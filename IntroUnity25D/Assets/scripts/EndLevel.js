#pragma strict

var nbOfCollectible : GameObject[];


function Start () {



}

function Update () {
nbOfCollectible = GameObject.FindGameObjectsWithTag("Collectible");
	
	
	if(nbOfCollectible.length == 0){
	Debug.Log("fin");
	Application.LoadLevel("scene2");
	}
}