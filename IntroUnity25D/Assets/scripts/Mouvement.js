#pragma strict


var speed : float = 6.0;
var jumpSpeed : float = 8.0;
var gravity : float = 20.0;
private var moveDirection : Vector3 = Vector3.zero;


function Start () {

}

function Update() {
		var controller : CharacterController = GetComponent(CharacterController);
		if (controller.isGrounded) {
			moveDirection = Vector3(Input.GetAxis("Vertical"), 0, Input.GetAxis("Horizontal"));
			moveDirection = transform.TransformDirection(moveDirection);
			moveDirection *= speed;
			
			if (Input.GetButton ("Jump")) {
				moveDirection.y = jumpSpeed;
			}
		}
		
		moveDirection.y -= gravity * Time.deltaTime;
		
		
		controller.Move(moveDirection * Time.deltaTime);
	}


@script RequireComponent(CharacterController)