#pragma strict
DontDestroyOnLoad (transform.gameObject);

// SCORE SECTION \\


var gold : int;
var score : int;

function AddScore(number : int){
	score += number;
	
}

function AddGold(){
	gold ++;

}

// END LEVEL SECTION \\

var nbOfCollectible : GameObject[];
var thisLevel : int;
var player : GameObject;
player = GameObject.Find("Joueur");


function Start () {
	SetGameManagerParameter();
}

function OnLevelWasLoaded (level : int) {
	SetGameManagerParameter();
}

function SetGameManagerParameter(){
	thisLevel = Application.loadedLevel;
	//RESET GOLD TO ZERO AT THE START ON LOADED LEVEL
	gold = 0;
	//GET THE NUMBER OG GOLD IN LEVEL
	nbOfCollectible = GameObject.FindGameObjectsWithTag("Collectible");
	
	if(Application.loadedLevelName == "Intro" ||Application.loadedLevelName == "End" ){
		//Debug.Log("this is the end!" + thisLevel);
		Destroy(gameObject);
	}

}
function Update(){
	//GOTO NEXT LEVEL
	if(Application.loadedLevelName != "Intro" || Application.loadedLevelName != "End" ){
		if( gold == nbOfCollectible.Length){
			//Debug.Log("All Gold Collected!");
			NextLevel();
		} 
	}
}

function NextLevel () {
		
		var nextLevel = thisLevel;
		nextLevel++;
		if(thisLevel == (Application.levelCount-2)){
			GotoLevel("Intro");
		}else {		
						Application.LoadLevel(nextLevel);
		}
}

function GotoLevel (levelName : String) {
		Application.LoadLevel(levelName);
	
}
