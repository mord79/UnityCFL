#pragma strict

var ennemiID : int;
var ennemitemp : GameObject[];
var ennemi : GameObject;




function Start(){
	
	this.gameObject.renderer.enabled = false;
	ennemitemp = GameObject.FindGameObjectsWithTag("Ennemi");
	
		for(var ennemiLoop : GameObject in ennemitemp){
		
			if(ennemiLoop.GetComponent(MouvementEnnemi).ennemiID == ennemiID){
			
				ennemi = ennemiLoop;
			}
		
		}
	
}

function OnTriggerEnter(other : Collider){

	if(other.tag == "Ennemi"){
		var ennemiMouvementScript : MouvementEnnemi;
		ennemiMouvementScript = other.gameObject.GetComponent(MouvementEnnemi);
		
		if(ennemiMouvementScript.baliseNo < ennemiMouvementScript.baliseNoStart){
					ennemiMouvementScript.baliseNo ++;
					//Debug.Log("BaliseNO +1");
					
				} else {
					ennemiMouvementScript.baliseNo = 0;
					//Debug.Log("=BaliseNo=0");
				
				
				}
	
	}



}