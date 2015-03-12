#pragma strict

// vitesse maximum de mon objet
var maxSpeed : float;

// magnitude est la vitesse absolue de mon objet
var magnitude : float;

var speed : float;
var jump : float;
var monNom : String; 
// Variable pour aller chercher mon RigidBody
private var myRigidBody : Rigidbody;


function Start () {

	// Affecter ma variable myRigidBody
	myRigidBody = GetComponent(Rigidbody);	
	
	Debug.Log("Bonjour je suis " + monNom);

}

function Update () {
	magnitude = myRigidBody.velocity.magnitude; 
	

		if(Input.GetKey(KeyCode.RightArrow) && magnitude < maxSpeed){
			myRigidBody.AddForce(Vector3.right*speed);
		
		} else if (Input.GetKey(KeyCode.LeftArrow) && magnitude < maxSpeed){
			myRigidBody.AddForce(Vector3.left*speed);
		
		}
		
		if (Input.GetKey(KeyCode.UpArrow) && magnitude < maxSpeed){
			myRigidBody.AddForce(Vector3.forward*speed);
		
		} else if (Input.GetKey(KeyCode.DownArrow) && magnitude < maxSpeed){
			myRigidBody.AddForce(Vector3.back*speed);
		
		}
		
		if (Input.GetKeyDown(KeyCode.Space) && Physics.Raycast(transform.position, transform.TransformDirection(Vector3.down),1)){
			myRigidBody.AddForce(Vector3.up*jump);
			
		}
		
	
		

}