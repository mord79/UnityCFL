#pragma strict



public class SphereController extends CharacterMovement{

//public var cubeCharacterType : Character.Type;
var sphereMovementSpeed : float;
//public var cubeHitPoint : int;

//public var CubeCharacter : Character = new Character(cubeMovementSpeed, cubeHitPoint);

function Update(){

	if(Input.GetKey(KeyCode.W)){
	
		Move(sphereMovementSpeed ,0);
	
	}else if (Input.GetKey(KeyCode.S)){
	
		Move(-sphereMovementSpeed ,0);
	}
	if(Input.GetKey(KeyCode.A)){
	
		Move(0,sphereMovementSpeed );
	
	}else if (Input.GetKey(KeyCode.D)){
	
		Move(0,-sphereMovementSpeed );
	}


}




}