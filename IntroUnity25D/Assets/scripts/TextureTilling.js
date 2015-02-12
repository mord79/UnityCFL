#pragma strict

 var ScaleToTilesX : float;
 var ScaleToTilesY : float;
 var texture : Texture;
 var textureX : float;
 var textureY : float;
 var objScaleX : float;
 var objScaleY : float;
 var objScaleZ : float;
 
 
function Start(){
	textureX  = texture.width;
	textureY  = texture.height;
}
 
 function Update () {
     renderer.material.SetTextureScale("_MainTex",Vector2(ScaleToTilesX,ScaleToTilesY));
   }