#pragma strict

var maxSpeed : float;
var speed : float;
var accelerationRate : float;
var deccelerationRate : float;
var jumpSpeed : float;
var gravity : float;
var gravitySpeed : float;
var directionX : float;
var directionZ : float;
private var controller : CharacterController;
controller = this.GetComponent(CharacterController);

function Start () {

	

}

function Update () {
	

	
	// mouve joueur
	controller.Move(Vector3(directionX*Time.deltaTime,0,directionZ*Time.deltaTime));
	
	
	// controle des directions
	if(Input.GetKey(KeyCode.D)){
		if (directionX <= maxSpeed){
			directionX += accelerationRate;
		} else {
			directionX = maxSpeed;
		}
	} else if(Input.GetKey(KeyCode.A)){
		if (directionX >= -maxSpeed){
			directionX -= accelerationRate;
		} else {
			directionX = -maxSpeed;
		}
	}else {
		if (directionX < -1 ){
			directionX += deccelerationRate;
		} else if(directionX > 1 ) {
			directionX -= deccelerationRate;
		} else directionX = 0;
	}
	if(Input.GetKey(KeyCode.W)){
		if (directionZ <= maxSpeed){
			directionZ += accelerationRate;
		} else {
			directionZ = maxSpeed;
		}
	} else if(Input.GetKey(KeyCode.S)){
		if (directionZ >= -maxSpeed){
			directionZ -= accelerationRate;
		} else {
			directionZ = -maxSpeed;
		}
	}else {
		if (directionZ < -1){
			directionZ += deccelerationRate;
		} else if(directionZ > 1 ) {
			directionZ -= deccelerationRate;
		} else directionZ = 0;
	}
		
	// controle du saut
	if(controller.isGrounded){
		gravitySpeed = 0;
		if(Input.GetKey(KeyCode.Space)){
			gravitySpeed = 0;
			Jump(jumpSpeed);
			}
	}else if(!controller.isGrounded){
			controller.Move(Vector3.down*gravitySpeed*Time.deltaTime);
			if(Input.GetKey(KeyCode.Space) && controller.isGrounded){
			Jump(jumpSpeed);
			}
			
	}
	

	if(gravitySpeed < gravity){
			gravitySpeed ++;
	}
	
//Debug.Log("isgrounded: " + controller.isGrounded);
		
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







@script RequireComponent(CharacterController);