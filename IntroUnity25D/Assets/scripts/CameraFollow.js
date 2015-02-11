#pragma strict

var joueur : Transform;
joueur = GameObject.Find("Joueur").transform;
var distanceX : float;
var distanceZ : float;
var distanceXTemp : float;
var distanceZTemp : float;
var facteurDeplacement : float;
var differenceX : float;
var differenceZ : float;

function Start () {

	distanceX = joueur.transform.position.x - transform.position.x;
	distanceZ = joueur.transform.position.z - transform.position.z;

}

function Update () {
	
	distanceXTemp = joueur.transform.position.x - transform.position.x;
	distanceZTemp = joueur.transform.position.z - transform.position.z;
	differenceX = distanceX - distanceXTemp;
	differenceZ = distanceZ - distanceZTemp;
	//transform.LookAt(joueur);
	
	if (differenceX > 1)transform.position.x -= differenceX*Time.deltaTime*facteurDeplacement;
	else if (differenceX < -1)transform.position.x -= differenceX*Time.deltaTime*facteurDeplacement;
	
	if (differenceZ > 1)transform.position.z -= differenceZ*Time.deltaTime*facteurDeplacement;
	else if (differenceZ < -1) transform.position.z -= differenceZ*Time.deltaTime*facteurDeplacement;
	
	
	
	
	
	
	//transform.position.x = joueur.transform.position.x - distanceX;
	//transform.position.z = joueur.transform.position.z - distanceZ;
}