#pragma strict
var bulletSpeed : int;
var attackStrenght : int;
var audioComponent : AudioSource;
var explosionClip : AudioClip;

function Start () {

audioComponent = gameObject.GetComponent(AudioSource);

}

function Update () {
	
		transform.Translate(Vector3.forward*Time.deltaTime*bulletSpeed);

}

function OnTriggerEnter(other : Collider){

	
	if(other.gameObject.tag == "Ennemi"){
	
	
			var ennemi : EnnemiPF = other.gameObject.GetComponentInChildren(EnnemiPF);
			ennemi.LoosHitPoint(attackStrenght);
			DestroyBullet();
	
	}else if(other.gameObject.tag == "Level"){
		
			DestroyBullet();
	
	}
	

}

function DestroyBullet(){

		audioComponent.clip = explosionClip;
		audioComponent.Play();
		yield WaitForSeconds(audioComponent.clip.length);
		Destroy(gameObject);


}