#pragma strict
var maxSpeed : float;
var magnitude : float;

var speed : float;
var jump : float;
var monNom : String; 


function Start () {

	Debug.Log("Bonjour je suis " + monNom);

}

function Update () {
	magnitude = rigidbody.velocity.magnitude;

		if(Input.GetKey(KeyCode.RightArrow)&& magnitude < maxSpeed){
			rigidbody.AddForce(Vector3.right*speed);
		
		} else if (Input.GetKey(KeyCode.LeftArrow)&& magnitude < maxSpeed){
			rigidbody.AddForce(Vector3.left*speed);
		
		}
		
		if (Input.GetKey(KeyCode.UpArrow)&& magnitude < maxSpeed){
			rigidbody.AddForce(Vector3.forward*speed);
		
		} else if (Input.GetKey(KeyCode.DownArrow)&& magnitude < maxSpeed){
			rigidbody.AddForce(Vector3.back*speed);
		
		}
		
		if (Input.GetKeyDown(KeyCode.Space) && Physics.Raycast(transform.position, transform.TransformDirection(Vector3.down),1)){
			rigidbody.AddForce(Vector3.up*jump);
			
		}
		
	
		

}