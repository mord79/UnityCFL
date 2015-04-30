#pragma strict

import UnityEngine.UI;

//Changer pour le GameManagerScript qui doit etre static
//var score : int;
var textUi : UnityEngine.UI.Text;

function Start () {

textUi = GameObject.Find("ScoreText").GetComponent(Text);

}

function Update () {


		if(Input.GetKeyDown(KeyCode.S)){
			GamemanagerScript.AddScore(1);
		
		}

textUi.text = "SCORE: " + GamemanagerScript.score;

}

function OnTriggerEnter(other: Collider){


			if(other.gameObject.tag == "Collectible"){
				Destroy(other.gameObject);
				GamemanagerScript.AddScore(50);
				print("Score :" + GamemanagerScript.score);
				
				
				
			}
			
}

