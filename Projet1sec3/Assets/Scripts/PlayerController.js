#pragma strict

var speed : float;
var monNom : String; 

function Start () {

	Debug.Log("Bonjour je suis " + monNom);

}

function Update () {


		if(Input.GetKey(KeyCode.Space)){
			rigidbody.AddForce(Vector3.forward*10);
		
		}

}