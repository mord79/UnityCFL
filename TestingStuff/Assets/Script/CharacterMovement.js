#pragma strict


public class CharacterMovement extends MonoBehaviour{ 	

 	//enum Type{Player, Ennemi, Npc};
 
 	//public var characterType : Type;
 	//public var mouvementSpeed : float;
 	//public var hitPoint : int;
 	
 
 	function Move(msf : float,msr : float){
 		
 		transform.Translate(Vector3.forward*msf*Time.deltaTime);
 		transform.Translate(Vector3.right*msr*Time.deltaTime);
 	
 	}
 	//constructor
 	//function Character( sp : float, hp : int){
 	
 		//mouvementSpeed = sp;
 		//characterType = tp;
 		//hitPoint = hp;
 	
 	
	//}





}

function Start () {

}

function Update () {

}