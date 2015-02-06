#pragma strict

var mouvementSpeed : float;
var jumpSpeed : float;
var gravity : float;
var gravitySpeed : float;

function Start () {

	

}

function Update () {
	
	
	var controller : CharacterController = this.GetComponent(CharacterController);
	if(Input.GetKey(KeyCode.A)){
			controller.Move(Vector3(mouvementSpeed*Time.deltaTime,0,0));
	}else if(Input.GetKey(KeyCode.D)){
			controller.Move(Vector3(-mouvementSpeed*Time.deltaTime,0,0));
	}else if(Input.GetKey(KeyCode.W)){
			controller.Move(Vector3(0,0,mouvementSpeed*Time.deltaTime));
	}else if(Input.GetKey(KeyCode.S)){
			controller.Move(Vector3(0,0,-mouvementSpeed*Time.deltaTime));
	}
	
 
	if(controller.isGrounded ){
		gravitySpeed = 0;
		if(Input.GetKey(KeyCode.Space)){
			Jump(jumpSpeed);
			}
	}else if(!controller.isGrounded){
			controller.Move(Vector3.down*gravitySpeed*Time.deltaTime);
			if(gravitySpeed < gravity){
			gravitySpeed ++;
			}
	}
	
}



function Jump(strengt : float){
	var controller : CharacterController = this.GetComponent(CharacterController);
	var jstrengt = strengt;
		
	while(jstrengt > 0){
		controller.Move(Vector3(0,jstrengt*Time.deltaTime,0));
		jstrengt --;
		yield WaitForEndOfFrame;
		
	
	}



}


@script RequireComponent(CharacterController);