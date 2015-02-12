#pragma strict

var plane : Plane = Plane(Vector3.up, Vector3.up);;

function Update() {
	

		plane.SetNormalAndPosition(Vector3.up, transform.position);
		var dist: float;
		var ray: Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		Debug.DrawRay (ray.origin, ray.direction * 100, Color.yellow);

		if (plane.Raycast(ray, dist)) {
    		transform.LookAt(Vector3(ray.GetPoint(dist).x,transform.position.y,ray.GetPoint(dist).z));
		}
			     
		
	
}