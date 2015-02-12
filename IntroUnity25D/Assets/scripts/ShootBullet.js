#pragma strict

var bulletObject : Transform;
var rateOfFire : float;
var timer : float = 0; 

function Start () {

}

function Update () {

	if(Input.GetMouseButtonDown(0)){
		ShootBullet();
		timer += Time.deltaTime;
	}
	if(Input.GetMouseButton(0)){
		timer += Time.deltaTime;
	}
	if(timer >= rateOfFire) {
		ShootBullet();
		timer = 0;
	}
	if(Input.GetMouseButtonUp(0)){
		timer = 0;
		
	}

}

function ShootBullet(){
	Instantiate(bulletObject, transform.position, transform.rotation);

}