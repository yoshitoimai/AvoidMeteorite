function preroadImage() {
	core.preload(
		// 隕石
		'asteroid_0.png',
		// キャラクター
		'shooting_player.png',
		// ゲームオーバー
		'gameover.png'
	);
};
function gameStart() {
	
	core.rootScene.backgroundColor = "blue";
	
	var player = new ActionPlayer('shooting_player.png', 36, 42);
	core.rootScene.addChild(player);
};

