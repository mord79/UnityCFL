﻿#pragma strict

// vitesse maximum de mon objet
var maxSpeed : float;

// magnitude est la vitesse absolue de mon objet
var magnitude : float;

// vitesse de direction
var directionX : float;
var directionZ : float;

var speed : float;
var jump : float;
var monNom : String; 
// Variable pour aller chercher mon RigidBody
private var myRigidBody : Rigidbody;

// aller chercher mon script PlayerCollection
 var playerCollectionScript : PlayerCollection;


function Start () {

	// Affecter ma variable myRigidBody
	myRigidBody = GetComponent(Rigidbody);	
	
	Debug.Log("Bonjour je suis " + monNom);
	
}

function Update () {
	magnitude = myRigidBody.velocity.magnitude; 
	directionX = myRigidBody.velocity.x;
	directionZ = myRigidBody.velocity.z;
	transform.LookAt(Vector3(directionX,0,directionZ),Vector3.up);

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
			
			Jump();
		}
			

}

function Jump(){

	myRigidBody.AddForce(Vector3.up*jump);

}

function OnCollisionEnter(other : Collision){

		var hit : RaycastHit; 			
		if(other.gameObject.tag == "Ennemi" && Physics.Raycast(transform.position, transform.TransformDirection(Vector3.down),hit,1)){	
			
			// destroy l'ennemi
			if(hit.collider.tag == "Ennemi"){
				Jump();
				Destroy(other.gameObject);
			
			// destroy le joueur	
			} else if(hit.collider.tag != "Ennemi"){
				transform.DetachChildren();
				Destroy(gameObject);
				
			}
			
		}

}