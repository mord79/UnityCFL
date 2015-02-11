#pragma strict

var bulletObject : Transform;
var rateOfFire : float;


function Start () {

}

function Update () {

	if(Input.GetMouseButtonDown(0)){
		ShootBullet();
	
	}


}

function ShootBullet(){
	
	Instantiate(bulletObject, transform.position, transform.rotation);
	while(Input.GetMouseButton(0)){
		
		Instantiate(bulletObject, transform.position, transform.rotation);
		
		yield WaitForSeconds(rateOfFire);
	}
}