#pragma strict

static var score : int; 
static var health : int;

static function AddScore(scoreAdded : int){

	score += scoreAdded;


}

static function AddHealth(healthAdded : int){

	health += healthAdded;

}

static function SubstractHealth(healthSubstracted : int){

	health -= healthSubstracted;

}


