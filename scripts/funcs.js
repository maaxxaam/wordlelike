function count(str, char) {
	var count = 0,
		pos = str.indexOf(char);

	while (pos > -1) {
		++count;
		pos = str.indexOf(char, ++pos);
	}
	return count;
}

function getState(guess, word, index){
	var letter = guess[index];
	var real_index = word.indexOf(letter);
	if (real_index === -1) return 0;
	else {
		var sub = guess.substr(0, index);
		var cnt = count(sub, letter);
		var or_cnt = count(word, letter);
		if (or_cnt <= cnt) return 0;
 	};
	if (real_index == index) return 2;
	return 1;
}
