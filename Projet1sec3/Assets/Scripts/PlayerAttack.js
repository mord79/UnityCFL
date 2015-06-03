#pragma strict


var attackRange : int;
var attackStrenght : int;
var target : Image;
var audioComponent : AudioManagerPlayer;
var bulletGO : GameObject;

function Start () {

audioComponent = GameObject.Find("HeroRome").GetComponent(AudioManagerPlayer);
target = GameObject.Find("Target").GetComponent(Image);

Cursor.visible = false;
Cursor.lockState = CursorLockMode.Locked;

}

function Update () {

// Attack melee

//  variable pour le raycast
	var ray : Ray = Camera.main.ViewportPointToRay (Vector3(0.5,0.5,0));
	var hit : RaycastHit;
	
	
// vérification du raycast 
	if(Physics.Raycast (ray, hit, attackRange)&& hit.collider.tag == "Ennemi"){
// mettre le target rouge si le joueur est à la porté
			target.color = Color.red;
			Debug.DrawLine(ray.origin,hit.point,Color.red);
// attack			
			if(Input.GetMouseButtonDown(0)){
			
				var ennemi : EnnemiPF = hit.transform.GetComponentInChildren(EnnemiPF);
				audioComponent.PlayAttack();
				ennemi.LoosHitPoint(attackStrenght);
			}
	}
	else {
// sinon, bruit du swing de l'épée et target redevient blanc
		target.color = Color.white;
		if(Input.GetMouseButtonDown(0)){
					audioComponent.PlaySwing();
					
		}
			
	}
	
// Attack Range	(avec le boutton de droite)

 	if (Input.GetMouseButtonDown(1)){
 		
 		 Instantiate(bulletGO, transform.position+(Vector3.forward*2), transform.rotation);
 		// audioComponent.PlayAttackLaser();
 	
 	}
}
