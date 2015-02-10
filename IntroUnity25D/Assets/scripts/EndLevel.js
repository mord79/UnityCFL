#pragma strict

var nbOfCollectible : GameObject[];
var level : int;
level = Application.loadedLevel;

function Update () {
nbOfCollectible = GameObject.FindGameObjectsWithTag("Collectible");
	
	
	if(nbOfCollectible.length == 0){
		if(Application.loadedLevelName == "scene2"){
			Destroy(gameObject);
			Application.LoadLevel("Intro");
		} else {
			 Application.LoadLevel(level + 1);
		}
	}
}