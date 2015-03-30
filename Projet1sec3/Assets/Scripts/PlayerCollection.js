#pragma strict

var score : int;


function Start () {

}

function Update () {

}

function OnTriggerEnter(other: Collider){


			if(other.gameObject.tag == "Collectible"){
				
				AddScore(100);
				Destroy(other.gameObject);
				
				
			}
			
}

function AddScore(scoreAdded : int){

	score += scoreAdded;
	print("Score: "+score);
	
}