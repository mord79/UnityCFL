#pragma strict

function Update() {
	
		var hit: RaycastHit;
		var ray: Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		Debug.DrawRay (ray.origin, ray.direction * 100, Color.yellow);
		
		if (Physics.Raycast(ray, hit) && hit.collider.tag == "plateform") {
    		var objectHit: Transform = hit.transform;
    		//markerObject.position = hit.point;
    		transform.LookAt(Vector3(hit.point.x,transform.position.y,hit.point.z));
		}
			     
		
	
}