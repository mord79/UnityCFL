#pragma strict
import UnityEngine.UI;


var scoreTextUi : UnityEngine.UI.Text;
var healthTextUi : UnityEngine.UI.Text;

// Ne pas détruire l'objet au début de la scène
static var isCreated : boolean;

if(!isCreated){
		DontDestroyOnLoad(this);
		isCreated = true;


	} else {
	
		Destroy(this);
	
	}
	
	
function Start () {
	
	scoreTextUi = GameObject.Find("ScoreText").GetComponent(Text);
	healthTextUi = GameObject.Find("HealthText").GetComponent(Text);
}

function Update () {
	
	scoreTextUi.text = "SCORE: " + GameManagerScript.score;
	healthTextUi.text = "HEALTH: " + GameManagerScript.health;

}


