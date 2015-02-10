#pragma strict

var baliseDirection : String;

function OnTriggerEnter(other : Collider){

	if(other.gameObject.tag == "Ennemi"){
	
	var mouvementEnnemi : MouvementEnnemi = other.gameObject.GetComponent("MouvementEnnemi");
	mouvementEnnemi.setDirection = baliseDirection;
	
	}



}