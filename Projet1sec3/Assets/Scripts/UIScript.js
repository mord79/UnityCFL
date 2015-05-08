#pragma strict
import UnityEngine.UI;


var textUi : UnityEngine.UI.Text;

// Ne pas détruire l'objet au début de la scène
static var isCreated : boolean;

if(!isCreated){
		DontDestroyOnLoad(this);
		isCreated = true;


	} else {
	
		Destroy(this);
	
	}
	
	
function Start () {

	textUi = GameObject.Find("ScoreText").GetComponent(Text);

}

function Update () {
	
	textUi.text = "SCORE: " + GamemanagerScript.score;

}


