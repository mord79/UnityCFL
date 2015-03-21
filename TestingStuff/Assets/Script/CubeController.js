#pragma strict



public class CubeController extends CharacterMovement{

//public var cubeCharacterType : Character.Type;
var cubeMovementSpeed : float;
//public var cubeHitPoint : int;

//public var CubeCharacter : Character = new Character(cubeMovementSpeed, cubeHitPoint);

function Update(){

	if(Input.GetKey(KeyCode.UpArrow)){
	
		Move(cubeMovementSpeed,0);
	
	}else if (Input.GetKey(KeyCode.DownArrow)){
	
		Move(-cubeMovementSpeed,0);
	}
	if(Input.GetKey(KeyCode.RightArrow)){
	
		Move(0,cubeMovementSpeed);
	
	}else if (Input.GetKey(KeyCode.LeftArrow)){
	
		Move(0,-cubeMovementSpeed);
	}


}




}



