#pragma strict

var ennemiID : int;

// Var de déplacement
var maxSpeed : float;
private var speed : float;
var accelerationRate : float;
var deccelerationRate : float;
var jumpSpeed : float;
var gravity : float;
private var gravitySpeed : float;


// BALISE
var baliseArray : GameObject[];
var baliseNo : int = 0; 
var baliseNoStart : int;


// Character Controller
private var controller : CharacterController;
controller = this.GetComponent(CharacterController);

//AI
var aiState : String;
var playerTransform : Transform;
playerTransform = GameObject.Find("Joueur").GetComponent(Transform);



function Start () {
	
	baliseNoStart = baliseArray.length -1;
	
}


function Update () {
	
	ChooseAi();
}

function ChooseAi(){
 
	switch (aiState)
	{
	
	case "Hunt":
//		Debug.Log("I hunt!");
		HuntMove();
		break;
	case "Move":
//		Debug.Log("I move!");
		NormalMove();
		break;
	default:
//		Debug.Log("I do nothing!");
		break;
	
	}

}

function Jump(strengt : float){
	//var controller : CharacterController = this.GetComponent(CharacterController);
	var jstrengt : float = strengt;
		
	while(jstrengt > 0){
		controller.Move(Vector3(0,jstrengt*Time.deltaTime,0));
		jstrengt --;
		yield WaitForEndOfFrame;
	}
}

function NormalMove(){

	var ennemiPos = transform.position;
	var baliseObject : GameObject;
	baliseObject = baliseArray[baliseNo];
	var BalisePos = baliseObject.transform.position;
	var offset = BalisePos-ennemiPos;
	offset = offset.normalized;
	
	controller.Move(offset*maxSpeed*Time.deltaTime);
	
	
	// gravité
	if(gravitySpeed < gravity){
			gravitySpeed ++;
			}

}

function HuntMove(){
	
	var ennemiPos = transform.position;
	var playerPos = playerTransform.position;
	var offset = playerPos-ennemiPos;
	offset = offset.normalized;
	controller.Move(offset*maxSpeed*Time.deltaTime);

}





@script RequireComponent(CharacterController);