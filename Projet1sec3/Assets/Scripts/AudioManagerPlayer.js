﻿#pragma strict
var audioComponent : AudioSource;
var soundList : AudioClip[];


function Start () {

audioComponent = gameObject.GetComponent(AudioSource);

}

function Update () {

	if(Input.GetKey(KeyCode.Alpha1)){
		audioComponent.clip = soundList[0];
		audioComponent.Play();
	
	}
	if(Input.GetKey(KeyCode.Alpha2)){
		audioComponent.clip = soundList[1];
		audioComponent.Play();
		
	
	}
	
	
}

function PlayCollectible(){

		audioComponent.clip = soundList[0];
		audioComponent.Play();


}

function PlayAttack(){

		audioComponent.clip = soundList[2];
		audioComponent.Play();


}

function PlayAttackLaser(){

		audioComponent.clip = soundList[4];
		audioComponent.Play();


}

function PlaySwing(){

		audioComponent.clip = soundList[1];
		audioComponent.Play();

}