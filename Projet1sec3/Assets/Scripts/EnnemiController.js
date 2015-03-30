#pragma strict

enum Direction{Droite, Gauche, Avant, Arriere};

var direction : Direction;

@Range(0,5)
var speed : float;

function Start () {


}

function Update () {

	EnnemiMouvement(direction);
	
}

function EnnemiMouvement (ennemiDirection : Direction){


	switch (ennemiDirection){
	
		case Direction.Droite:
			transform.Translate(Vector3.right*speed*Time.deltaTime);
			break;
		case Direction.Gauche:
			transform.Translate(Vector3.left*speed*Time.deltaTime);
			break;
		case Direction.Avant:
			transform.Translate(Vector3.forward*speed*Time.deltaTime);
			break;
		case Direction.Arriere:
			transform.Translate(Vector3.back*speed*Time.deltaTime);
			break;
		default:
			print("Bug");
			break;
	
	
	}


}

function OnTriggerEnter(other : Collider){

			
			if(other.gameObject.tag == "Balise"){
			
				direction = other.gameObject.GetComponent(BaliseScript).directionBalise;
			
			
			
			}






}