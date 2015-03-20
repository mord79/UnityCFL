#pragma strict

@Range(-100,100)
var rotationSpeed : float;

function Start () {

}

function Update () {
		
		
		transform.Rotate(Vector3.up*rotationSpeed, Space.World);
			
		
}