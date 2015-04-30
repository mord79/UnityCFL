#pragma strict

static var isCreated : boolean;


if(!isCreated){
		DontDestroyOnLoad(this);
		isCreated = true;


	} else {
	
		Destroy(this);
	
	}
	
	
function Start () {

}

function Update () {

}