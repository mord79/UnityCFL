
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




function Start () {
noOfNode = patrolNodeObject.Length;
// initialiser les GO du joueur
player = GameObject.Find("Player");
// initialiser le NavMeshAgent
ennemiNav = GetComponentInParent(NavMeshAgent);

}

function Update () {
// orienter le détecteur vers le joueur

transform.LookAt(player.transform);

// vérifier si le joueur est à l'extérieur de la zone de détection 
	var hit: RaycastHit;
	if(Physics.Raycast(transform.position,transform.TransformDirection(Vector3.forward),hit)){
		if(hit.transform.tag == "Player"){
			if(hit.distance > playerMinDistanceForPatrol){
				
				Debug.DrawLine (transform.position, player.transform.position,Color.green);
				ennemiState = EnnemiState.Patrol;
			}
		}
	
	}

// Fonctionnement du comportement de l'ennemi
 switch (ennemiState){
	
		case ennemiState.Patrol:
			if(currentNode == 0){
				
				currentNode = Random.Range(1,noOfNode+1.1);
				ennemiNav.SetDestination(patrolNodeObject[currentNode-1].transform.position);
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
			var audioPlayer = player.GetComponentInChildren(AudioManagerPlayer);
			
				if(!audioPlayer.audioComponent.isPlaying){
					audioPlayer.PlayAttack();
					GameManagerScript.SubstractHealth(10);
				}
				
			break;
		

			}

//debug currentNode		
if(Input.GetKeyDown(KeyCode.C)){
currentNode = Mathf.Floor(Random.Range(0,noOfNode));
}
}

function OnTriggerStay (other : Collider) {
		var hit : RaycastHit;
		
		if(other.gameObject.tag == "Player"){	
		// si le joueur est devant l'ennemi et assez proche
			if (Physics.Raycast(transform.position, transform.parent.TransformDirection(Vector3.forward), hit, attackDistance)){
				Debug.DrawLine (transform.position, other.transform.position,Color.red);
				ennemiState = EnnemiState.Attack;
			}
		// si l'ennemi est détecté
			else if (Physics.Linecast(transform.position, other.transform.position)){
				Debug.DrawLine (transform.position, other.transform.position,Color.yellow);
				ennemiState = EnnemiState.Search;
				}
		}
		
	
			
			
			
}




