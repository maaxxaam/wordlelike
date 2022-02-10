function count(str, char) {
	var count = 0,
		pos = str.indexOf(char);

	while (pos > -1) {
		++count;
		pos = str.indexOf(char, ++pos);
	}
	return count;
}

function getState_old(guess, word, index){
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

function check_place(word, guess, states, index) {
	if (guess[index] === word[index]){
		if (states[index] == 1) {
			let indice = index + 1;
			let i = guess.indexOf(word[index], indice);
			while (i != -1) {
				if (states[i] == 0) {
					states[i] = 1;
					break;
				}
				else indice = i + 1;
				i = guess.indexOf(word[index], indice);
			}
		}
		states[index] = 2;
		//alert(states);
		return states;
	}
	else {
		var indice = 0;
		var i = guess.indexOf(word[index], indice);
		while (i != -1) {
			if (states[i] == 0) {
				states[i] = 1;
				//alert(`${i} ${guess[i]} in ${guess}=${word[index]} in ${word}`);
				return states;
			}
			else {
				indice = i + 1;
			}
			i = guess.indexOf(word[index], indice);
		}
	}
	//alert(states);
	return states;
}

function getState(word, guess, str_states){
	var states = [...str_states].map(Number);
	var w = [...word];
	var g = [...guess];
	for (let index = 0; index < w.length; index++) {
		states = check_place(w, g, states, index);
	}
	//w.forEach((_1, index, _2) => { states = check_place(w, g, states, index) });
	return states.map(String).join("");
}

function len_unicode(str){
	//alert([...str].length);
	return [...str].length;
}

function get_unicode(str, index){
	var a = [...str];
	//alert(a);
	return a[index];
}

function substr_unicode(str, start, stop){
	var a = [...str];
	//alert(a);
	return a.slice(start, stop).join('');
}
