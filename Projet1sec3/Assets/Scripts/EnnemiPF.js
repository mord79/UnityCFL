
#pragma strict
//Array pour stocker les Nodes de déplacement
var patrolNodeObject : GameObject[];
var noOfNode : int;
var currentNode : int;

//Enum pour les types de States
enum EnnemiState{Patrol, Search, Attack};
// States
var ennemiState: EnnemiState;
//GO du joueur pour les drawline
var player: GameObject;
//Distance maximum pour attaquer
var attackDistance : float;
//Distance minimum pour que l'ennemi retourne en Patrol
var playerMinDistanceForPatrol: float;
//Composante de navigation de l'ennemi
var ennemiNav : NavMeshAgent;


// permet de définir les propriétés de combats
var attackSpeed : int;
var canAttack : boolean;
var hitPoint : int;

// pour créer des effets visuels 
var rendererComponent : Renderer;
var flashAttackColor : Color;
var flashHurtColor : Color;
var normalColor : Color;

function Start () {
// initialisation pour pouvoir attaquer
canAttack = true;
rendererComponent = GetComponentInParent(Renderer);
normalColor = rendererComponent.material.color;


noOfNode = patrolNodeObject.Length;
// initialiser les GO du joueur
player = GameObject.Find("Player");
// initialiser le NavMeshAgent
ennemiNav = GetComponentInParent(NavMeshAgent);

}

function Update () {


//Appler la fonction Patrol() à toutes les frames
	Patrol();

// Fonctionnement du comportement de l'ennemi
 switch (ennemiState){
	
		case ennemiState.Patrol:
			if(currentNode == 0){
				
				currentNode = Random.Range(0,noOfNode);
				ennemiNav.SetDestination(patrolNodeObject[currentNode].transform.position);
				ennemiNav.Resume();
			}
			if(ennemiNav.remainingDistance < 1){
				currentNode = 0;
			}
			
			break;
		case ennemiState.Search:
			currentNode = 0;
			ennemiNav.Stop();
			ennemiNav.SetDestination(player.transform.position);
			ennemiNav.Resume();
			break;
		case ennemiState.Attack:
			ennemiNav.Stop();
			
			
			if(canAttack){
				Attack();
			}
								
			break;
		

			}

// mort de l'ennemi
	if(hitPoint <= 0){
	
		Death();
		
	}

}

function OnTriggerStay (other : Collider) {
		var hit : RaycastHit;
		
		if(other.gameObject.tag == "Player"){	
		// si le joueur est devant l'ennemi est assez proche
			if (Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), hit, attackDistance)){
				//Debug.DrawLine (transform.position, other.transform.position,Color.red);
				ennemiState = EnnemiState.Attack;
			}
		// si l'ennemi est détecté
			else if (Physics.Linecast(transform.position, other.transform.position)){
				//Debug.DrawLine (transform.position, other.transform.position,Color.yellow);
				ennemiState = EnnemiState.Search;
				}
		}
		
}

function Patrol(){

// orienter le détecteur vers le joueur
	transform.LookAt(player.transform);

// vérifier si le joueur est à l'extérieur de la zone de détection 
	var hit: RaycastHit;
	if(Physics.Raycast(transform.position,transform.TransformDirection(Vector3.forward),hit)){
		if(hit.transform.tag == "Player"){
			if(hit.distance > playerMinDistanceForPatrol){
				
				//Debug.DrawLine (transform.position, player.transform.position,Color.green);
				ennemiState = EnnemiState.Patrol;
			}
		}
	}
}

function Attack(){
	var audioPlayer = player.GetComponentInChildren(AudioManagerPlayer);
	
		
		canAttack = false;
		rendererComponent.material.color = flashAttackColor;
		audioPlayer.PlayAttack();
		GameManagerScript.SubstractHealth(10);
		yield WaitForSeconds(0.10);
		rendererComponent.material.color = normalColor;
		yield WaitForSeconds(attackSpeed);
		canAttack = true;



}

function LoosHitPoint(hp : int){

	hitPoint -= hp;
	rendererComponent.material.color = flashHurtColor;
	yield WaitForSeconds(0.10);
	rendererComponent.material.color = normalColor;
	

}

function Death(){

	var audioComponent : AudioSource;
	audioComponent = gameObject.GetComponent(AudioSource);
	if (!audioComponent.isPlaying){
		audioComponent.Play();
		yield WaitForSeconds(audioComponent.clip.length);
		Destroy (transform.parent.gameObject);
	}
	

}



