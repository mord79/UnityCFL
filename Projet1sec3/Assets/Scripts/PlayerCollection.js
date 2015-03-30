#pragma strict

import UnityEngine.UI;

var score : int;
var textUi : UnityEngine.UI.Text;

function Start () {

textUi = GameObject.Find("ScoreText").GetComponent(Text);

}

function Update () {


textUi.text = "SCORE: " + score;

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