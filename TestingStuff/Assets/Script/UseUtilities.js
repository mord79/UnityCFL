#pragma strict


enum Ai {Run, Hide, Hunt, Idle};
var ennemiAi : Ai = Ai.Run;
var stuff : Utilities.Stuff;
stuff = Utilities.Stuff.You;
var stuff2 : Utilities.Stuff;
stuff2 = Utilities.Stuff.Me;

function Start () {

	MyPublicClass.SayHello();
	
	Debug.Log(Utilities.AddNumber(1,2));
	 
	//sDebug.Log(stuff,stuff2);
}

function Update () {
	
	 

}