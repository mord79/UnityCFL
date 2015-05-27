#pragma strict


var attackRange : int;
var attackStrenght : int;
var target : Image;

function Start () {

target = GameObject.Find("Target").GetComponent(Image);

Cursor.visible = false;
Cursor.lockState = CursorLockMode.Locked;

}

function Update () {


	var ray : Ray = Camera.main.ViewportPointToRay (Vector3(0.5,0.5,0));
	var hit : RaycastHit;
	
	if(Physics.Raycast (ray, hit, attackRange)){
		
		if(hit.collider.tag == "Ennemi"){
			target.color = Color.red;
			Debug.DrawLine(ray.origin,hit.point,Color.red);
			if(Input.GetMouseButtonDown(0)){
			
				var ennemi : EnnemiPF = hit.transform.GetComponentInChildren(EnnemiPF);
				
				ennemi.LoosHitPoint(attackStrenght);
			}
				
		
		}
		else {
			target.color = Color.white;
		
		}
		
		

	}
		
	

}