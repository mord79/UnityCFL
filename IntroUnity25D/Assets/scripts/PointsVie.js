#pragma strict

var pointsVie : int;
var gameManager : GameManagerScript;
gameManager = GameObject.Find("GameManager").GetComponent(GameManagerScript);

function Start () {

}

function Update () {

		if(pointsVie <= 0 || transform.position.y < - 10) {
			Mourir();
		}
		
		
			
}

function AddPointsVie(nb : int){
	Debug.Log("je gagne " + nb + "points de vie!");
	pointsVie += nb;

}

function SubstractPointsVie(nb : int){
//	Debug.Log("je perds " + nb + "points de vie!");
	pointsVie -= nb;

}

function Mourir (){

	//Debug.Log("Je meurt!!!");	
	
	if (transform.tag == "Player"){
	//	Debug.Log("Goto End");
		
		gameObject.GetComponent.<Renderer>().enabled = false;
		gameObject.transform.Find("Gun").GetComponent.<Renderer>().enabled = false;
		yield WaitForSeconds(2.0);
		gameManager.GotoLevel("End");
		
	} else {
		Destroy(gameObject);
	}

}