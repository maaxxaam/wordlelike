function getSymbol(str, index) { return str[index]; }

function getState(guess, word, index){
	var real_index = word.indexOf(guess[index]);
	if (real_index === -1) return 0;
	if (real_index == index) return 2;
	return 1;
}