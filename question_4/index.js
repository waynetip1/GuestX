// Add event listeners to analyze and reset buttons
document.getElementById("analyze").addEventListener("click", getText);
document;
document.getElementById("reset").addEventListener("click", reset);

// declare global variables for tracking results:
var totalLines = 0;
var totalWords = 0;

//Reset handler:
function reset(event) {
  event.preventDefault();
  window.location.reload();
}
// Get input text handler:
function getText(event) {
  event.preventDefault();
  // Get user textarea input:
  var text = document.getElementById("textArea").value;
  // remove all punctuation
  text = text.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/gm, "");

  // Get user line input:
  let lineInput = document.querySelector('input[name="lines"]:checked').value;

  var lines = Number(lineInput);

  // Get user word input
  var words = Number(document.getElementById("wordInput").value);

  //get user vowel input
  var vowels = Number(document.getElementById("vowelInput").value);

  //Determine if textarea input has line breaks:
  let test = checkLineBreaks(text); // call check line breaks function
  if (test === true) {
    textArr = splitText(text);
  } else {
    // add line breaks based on whitespace
    textArr = stringLines(text); // call function to format text lines
  }

  // identify the which lines will be parsed.
  activeLines(textArr, lines, words, vowels);
}

function checkLineBreaks(str) {
  let re = /\r|\n/g; // checks for line breaks or return chars
  let result = re.test(str);
  return result; // return boolean
}

function stringLines(str) {
  let strLen = str.length;
  var strArr = str.split(" "),
    lines = Math.ceil(strLen / 60); // 60 characters per line = num lines value
  (cropSize = Math.ceil(strArr.length / lines)), (splitted = []);
  while (strArr.length) {
    splitted.push(strArr.splice(0, cropSize).join(" "));
  }
  return splitted;
}

function checkLineBreaks(str) {
  let re = /\r|\n/g;
  let result = re.test(str);
  return result;
}

function splitText(str) {
  //splits on line break and trims whitespace
  var arr = str.split("\n").map(function(item) {
    return item.trim();
  });
  return arr;
}

function activeLines(arr, lines = 1, words, vowels) {
  let init = lines - 1; // calculate active and inactive lines
  words = words;
  let activeLines = []; //creates an array of active line indicies
  for (i = init; i < arr.length; i += lines) {
    activeLines.push(i);
  }

  for (let i = 0; i < arr.length; i++) {
    if (activeLines.includes(i)) {
      // Identifies lines to analyze
      totalLines++; //counts active lines for results
      /* since we have the active line, lets identify active words, and count vowels */
      arr[i] = activeWords(arr[i], words, vowels); // get active and target words
      document.getElementById("output").innerHTML +=
        "<p class='active'>" + arr[i] + "</p>" + "<br />";
    } else {
      document.getElementById("output").innerHTML +=
        "<p class='inactive'>" + arr[i] + "</p>" + "<br />";
    }
  }
  // call results and display function
  results(totalLines, totalWords);
}
var wordCounter = 0;
function activeWords(arr, words, vowels) {
  let vcount;

  arr = arr.split(" ");

  let activeArr = [];

  for (i = 0; i < arr.length; i++) {
    wordCounter++;

    // identifies word to analyze
    if (wordCounter % words === 0) {
      vcount = countVowels(arr[i]); // call count vowels function

      if (vcount >= vowels) {
        // compare vowel count to user input
        totalWords++; // counts total words that meet user req for results output
        arr[i] = "<span class='target-word'>" + arr[i] + "</span>";
        activeArr.push(arr[i]);
      } else {
        // these words were looked at but did not pass requirement
        arr[i] = "<span class='active-word'>" + arr[i] + "</span>";
        activeArr.push(arr[i]);
      }
    } else {
      // words not consdered
      arr[i] = "<span class='inactive-word'>" + arr[i] + "</span>";
      activeArr.push(arr[i]);
    }
  }
  activeArr.join(" ");

  return activeArr;
}

// Count vowel function:
function countVowels(str) {
  var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}

// Output results to DOM function:
function results(totalLines, totalWords) {
  document.getElementById(
    "results"
  ).innerHTML = `<h2>Results: Lines: ${totalLines} Words: ${totalWords}</h2> <br /> <h5>Red is a non-match. Bold is a match. Grey are non considered lines.</h5>`;
}
