#pragma strict
var distPlayer: float;
var maxDistance: float;
var playerObject: GameObject;
var mouvementSpeed : float;


playerObject = GameObject.Find("Joueur");



function Update () {

	transform.Translate(Vector3.forward*mouvementSpeed*Time.deltaTime);

}