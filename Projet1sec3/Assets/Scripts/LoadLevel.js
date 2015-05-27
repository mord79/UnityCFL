#pragma strict

function Start(){

Cursor.visible = true;
Cursor.lockState = CursorLockMode.Confined;

}

function OnBouttonClick(){

	Application.LoadLevel(1);

}