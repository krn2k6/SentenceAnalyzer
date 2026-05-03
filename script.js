const input = document.querySelector("#sentenceInput")
const sbtbtn = document.querySelector("#analyzebtn")
const results = document.querySelector("#results")

let data;

function analyze(){
  data = input.value
    const vowel = getVowelCount(data);
    const consonant = getConsonantCount(data)
    const punctuations = getPunctuationCount(data)
    const word = getWordCount(data)
    const character = getCharacterCount(data)

    results.innerHTML=`
    <h1>Analysis Results</h1>
    
    Vowels: ${vowel} <br/>
    Consonants: ${consonant} <br/>
    Punctuations: ${punctuations} <br/>
    Words: ${word} <br/>
    Characters: ${character} <br/>`
  }

sbtbtn.addEventListener("click",(e)=>{
  // console.log(e)
  analyze();
    
})

input.addEventListener("keydown",(e)=>{
  if(e.key === "Enter" && e.ctrlKey){
  // console.log(e)
  analyze();
  
}})



function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

function getPunctuationCount(sentence) {
  const punctuations = ".,!?;:-()[]{}\"'–";
  let count = 0;

  for (const char of sentence) {
    if (punctuations.includes(char)) {
      count++;
    }
  }
  return count;
}

function getWordCount(sentence) {
  if (sentence.trim() === '') {
    return 0;
  }
  
  const words = sentence.trim().split(' ');
  let count = 0;

  for (const word of words) {
    if (word !== '') {
      count++;
    }
  }

  return count;
}

function getCharacterCount(sentence) {
  let count = 0;
    for (const char of sentence) {
        if (char !== ' ') {
            count++;
        }
    }
    return count;
}


