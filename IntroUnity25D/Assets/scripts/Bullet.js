#pragma strict
var distPlayer: float;
var maxDistance: float;
var mouvementSpeed : float;
var playerObject : Transform;
var groupe: Transform;
var degas : int;


function Start(){
	groupe = GameObject.Find("GroupeBullets").transform;
	playerObject = GameObject.Find("Joueur").transform;

}


function Update () {
	distPlayer = Vector3.Distance(playerObject.position, transform.position);
	transform.Translate(Vector3.forward*mouvementSpeed*Time.deltaTime);
	transform.SetParent(groupe);
	
	if(distPlayer > maxDistance){
		Destroy(gameObject);
		
	}

}

 function OnTriggerEnter(other: Collider) {
//    Debug.Log("Collision");
    	
    	if(other.tag != "Detector")  Destroy(gameObject);
  
    	if(other.GetComponent(PointsVie)){
    		var pointVieOther = other.GetComponent(PointsVie);
    		pointVieOther.SubstractPointsVie(degas);
    		
    	
    	}
 }
