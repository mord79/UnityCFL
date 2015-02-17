#pragma strict

var ennemiID : int;
var ennemitemp : GameObject[];
var ennemi : GameObject;
var ennemiMouvementScript : MouvementEnnemi;



function Start(){
	
	ennemitemp = GameObject.FindGameObjectsWithTag("Ennemi");
	
		for(var ennemiLoop : GameObject in ennemitemp){
		
			if(ennemiLoop.GetComponent(MouvementEnnemi).ennemiID == ennemiID){
			
				ennemi = ennemiLoop;
			}
		
		}
	
	ennemiMouvementScript = ennemi.GetComponent(MouvementEnnemi);

}

function OnTriggerEnter(other : Collider){

	if(other.tag == "Ennemi"){
	
		if(ennemiMouvementScript.baliseNo < ennemiMouvementScript.baliseNoStart){
					ennemiMouvementScript.baliseNo ++;
					//Debug.Log("BaliseNO +1");
					
				} else {
					ennemiMouvementScript.baliseNo = 0;
					//Debug.Log("=BaliseNo=0");
				
				
				}
	
	}



}