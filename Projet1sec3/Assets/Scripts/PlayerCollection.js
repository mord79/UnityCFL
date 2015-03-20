#pragma strict

var score : int;


function Start () {

}

function Update () {

}

function OnCollisionEnter(other: Collision){


			if(other.collider.tag == "Collectible"){
				
				score += 100;
				Destroy(other.gameObject);
				Debug.Log("Score: "+score);
				
			}
			
}