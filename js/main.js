function isVowel (char) {
	return ['a', 'e', 'i', 'o', 'u'].indexOf(char) != -1
}

function consonant(text) {
	i = 0;
	while(!isVowel(text.charAt(i)))
		i++
	return text.substring(i) + text.substring(0, i) + 'ay'
}

function vowel (text) {
	if (text.charAt(text.length - 1) == 's') 
		return text.substring(0, text.length - 1) + 'ays'
	return text + 'ay'
}

function wordProcessor (text) {
	if (isVowel(text.charAt(0)))
		return vowel(text)
	else
		return consonant(text)
}

function toPigLatin (form) {
	form.output.value = ''
	phrase = form.phrase.value
	endPhrase = ''
	for (var i = 0; phrase.length > 0; i++) {
		if (phrase[i] == null || phrase[i] == ' ') {
			endPhrase += wordProcessor(phrase.substring(0, i))
			if (phrase[i] == ' ')
				phrase =  phrase.substring(i + 1);
			else
				phrase = phrase.substring(i);
			i = -1;
		}
		if (phrase.length == 1) {
			endPhrase += wordProcessor(phrase)
			phrase = ''
		}
	}
	form.output.value += endPhrase
}