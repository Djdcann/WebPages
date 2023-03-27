const parent = document.getElementById("parent");
//parent.style.height = parent.clientHeight+"px";

var words1 = ["Hello", "World", "OpenAI", "ChatGPT", "Programming"]; // Your array of words
var words2 = [
  "inchoate",
  "lacuna lacunar",
  "perfuse suffuse diffuse",
  "embolus",
  "palaver",
  "punctate",
  "unctuous",
  "glib",
  "boondoggle",
  "waggish",
  "remunerate",
  "mellifluous",
  "torpor",
  "tryst",
  "postprandial tumescence",
  "gestalt",
  "habitue",
  "recalcitrant",
  "prurience",
  "replete",
  "animadvert",
  "eristic",
  "styptic",
  "astringent",
  "quandary",
  "soporific",
  "solmization",
  "ignominious",
  "symposium",
  "inveterate",
  "reverie",
  "vignette",
  "adulation",
];
var words3 = ["渾", "廈", "王道楽土"];
var countryFlags = [
  "🇦🇨",
  "🇦🇩",
  "🇦🇪",
  "🇦🇫",
  "🇦🇬",
  "🇦🇮",
  "🇦🇱",
  "🇦🇲",
  "🇦🇴",
  "🇦🇶",
  "🇦🇷",
  "🇦🇸",
  "🇦🇹",
  "🇦🇺",
  "🇦🇼",
  "🇦🇽",
  "🇦🇿",
  "🇧🇦",
  "🇧🇧",
  "🇧🇩",
  "🇧🇪",
  "🇧🇫",
  "🇧🇬",
  "🇧🇭",
  "🇧🇮",
  "🇧🇯",
  "🇧🇱",
  "🇧🇲",
  "🇧🇳",
  "🇧🇴",
  "🇧🇶",
  "🇧🇷",
  "🇧🇸",
  "🇧🇹",
  "🇧🇻",
  "🇧🇼",
  "🇧🇾",
  "🇧🇿",
  "🇨🇦",
  "🇨🇨",
  "🇨🇩",
  "🇨🇫",
  "🇨🇬",
  "🇨🇭",
  "🇨🇮",
  "🇨🇰",
  "🇨🇱",
  "🇨🇲",
  "🇨🇳",
  "🇨🇴",
  "🇨🇷",
  "🇨🇺",
  "🇨🇻",
  "🇨🇼",
  "🇨🇽",
  "🇨🇾",
  "🇨🇿",
  "🇩🇪",
  "🇩🇬",
  "🇩🇯",
  "🇩🇰",
  "🇩🇲",
  "🇩🇴",
  "🇩🇿",
  "🇪🇦",
  "🇪🇨",
  "🇪🇪",
  "🇪🇬",
  "🇪🇭",
  "🇪🇷",
  "🇪🇸",
  "🇪🇹",
  "🇪🇺",
  "🇫🇮",
  "🇫🇯",
  "🇫🇰",
  "🇫🇲",
  "🇫🇴",
  "🇫🇷",
  "🇬🇦",
  "🇬🇧",
  "🇬🇩",
  "🇬🇪",
  "🇬🇫",
  "🇬🇬",
  "🇬🇭",
  "🇬🇮",
  "🇬🇱",
  "🇬🇲",
  "🇬🇳",
  "🇬🇵",
  "🇬🇶",
  "🇬🇷",
  "🇬🇸",
  "🇬🇹",
  "🇬🇺",
  "🇬🇼",
  "🇬🇾",
  "🇭🇰",
  "🇭🇲",
  "🇭🇳",
  "🇭🇷",
  "🇭🇹",
  "🇭🇺",
  "🇮🇨",
  "🇮🇩",
  "🇮🇪",
  "🇮🇱",
  "🇮🇲",
  "🇮🇳",
  "🇮🇴",
  "🇮🇶",
  "🇮🇷",
  "🇮🇸",
  "🇮🇹",
  "🇯🇪",
  "🇯🇲",
  "🇯🇴",
  "🇯🇵",
  "🇰🇪",
  "🇰🇬",
  "🇰🇭",
  "🇰🇮",
  "🇰🇲",
  "🇰🇳",
  "🇰🇵",
  "🇰🇷",
  "🇰🇼",
  "🇰🇾",
  "🇰🇿",
  "🇱🇦",
  "🇱🇧",
  "🇱🇨",
  "🇱🇮",
  "🇱🇰",
  "🇱🇷",
  "🇱🇸",
  "🇱🇹",
  "🇱🇺",
  "🇱🇻",
  "🇱🇾",
  "🇲🇦",
  "🇲🇨",
  "🇲🇩",
  "🇲🇪",
  "🇲🇫",
  "🇲🇬",
  "🇲🇭",
  "🇲🇰",
  "🇲🇱",
  "🇲🇲",
  "🇲🇳",
  "🇲🇴",
  "🇲🇵",
  "🇲🇶",
  "🇲🇷",
  "🇲🇸",
  "🇲🇹",
  "🇲🇺",
  "🇲🇻",
  "🇲🇼",
  "🇲🇽",
  "🇲🇾",
  "🇲🇿",
  "🇳🇦",
  "🇳🇨",
  "🇳🇪",
  "🇳🇫",
  "🇳🇬",
  "🇳🇮",
  "🇳🇱",
  "🇳🇴",
  "🇳🇵",
  "🇳🇷",
  "🇳🇺",
  "🇳🇿",
  "🇴🇲",
  "🇵🇦",
  "🇵🇪",
  "🇵🇫",
  "🇵🇬",
  "🇵🇭",
  "🇵🇰",
  "🇵🇱",
  "🇵🇲",
  "🇵🇳",
  "🇵🇷",
  "🇵🇸",
  "🇵🇹",
  "🇵🇼",
  "🇵🇾",
  "🇶🇦",
  "🇷🇪",
  "🇷🇴",
  "🇷🇸",
  "🇷🇺",
  "🇷🇼",
  "🇸🇦",
  "🇸🇧",
  "🇸🇨",
  "🇸🇩",
  "🇸🇪",
  "🇸🇬",
  "🇸🇭",
  "🇸🇮",
  "🇸🇯",
  "🇸🇰",
  "🇸🇱",
  "🇸🇲",
  "🇸🇳",
  "🇸🇴",
  "🇸🇷",
  "🇸🇸",
  "🇸🇹",
  "🇸🇻",
  "🇸🇽",
  "🇸🇾",
  "🇸🇿",
  "🇹🇦",
  "🇹🇨",
  "🇹🇩",
  "🇹🇫",
  "🇹🇬",
  "🇹🇭",
  "🇹🇯",
  "🇹🇰",
  "🇹🇱",
  "🇹🇲",
  "🇹🇳",
  "🇹🇴",
  "🇹🇷",
  "🇹🇹",
  "🇹🇻",
  "🇹🇼",
  "🇹🇿",
  "🇺🇦",
  "🇺🇬",
  "🇺🇲",
  "🇺🇸",
  "🇺🇾",
  "🇺🇿",
  "🇻🇦",
  "🇻🇨",
  "🇻🇪",
  "🇻🇬",
  "🇻🇮",
  "🇻🇳",
  "🇻🇺",
  "🇼🇫",
  "🇼🇸",
  "🇾🇪",
  "🇾🇹",
  "🇿🇦",
  "🇿🇲",
  "🇿🇼",
];

shuffleArray(countryFlags);

const arrayMap = {
  array1: words1,
  array2: words2,
  array3: words3,
  array4: countryFlags,
  // Add more entries for your other word arrays
};

var words = countryFlags;
var currentWordIndex = 0;
var displayTime = 200; // Time in milliseconds
var isPaused = false;
var isLoop = true;

function iterate() {
  if (!isPaused) {
    displayWord(currentWordIndex);
    document.getElementById("cat").innerHTML += words[currentWordIndex] + " ";
    if (currentWordIndex == words.length - 1) {
      if (isLoop) {
        currentWordIndex = 0;
      } else {
        isPaused = true;
      }
    } else {
      currentWordIndex++;
    }
  }
  if (!isPaused) {
    setTimeout(iterate, displayTime);
  }
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  // Loop over the array from the end to the beginning
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap the elements at positions i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayWord(index) {
  document.getElementById("word").innerHTML = words[index];
  search(words[index]);
}

iterate();

function toggleCollapsible() {
  var box = document.querySelector(".collapsible-box");
  box.classList.toggle("open");
  /*if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }*/
}

function togglePause() {
  isPaused = !isPaused;
  if (!isPaused) {
    iterate();
  }
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    togglePause();
  }
  if (event.code === "ShiftLeft") {
    toggleCollapsible();
  }
  if (event.code === "ArrowLeft") {
    if (isPaused) {
      if (currentWordIndex == 0) {
        currentWordIndex = words.length - 1;
      } else {
        currentWordIndex--;
      }
      displayWord(currentWordIndex);
    }
  }
  if (event.code === "KeyZ") {
    document.getElementById("save").innerHTML +=
      "<span>" + words[currentWordIndex] + "</span> ";
  }
  if (event.code === "KeyX") {
    document.getElementById("save").innerHTML = "";
  }
  if (event.code === "ArrowRight") {
    if (isPaused) {
      if (currentWordIndex == words.length - 1) {
        currentWordIndex = 0;
      } else {
        currentWordIndex++;
      }
      displayWord(currentWordIndex);
    }
  }
});

var displayTimeSlider = document.getElementById("display-time-slider");
var displayTimeValue = document.getElementById("display-time-value");

displayTimeSlider.addEventListener("input", function () {
  displayTime = parseInt(this.value);
  displayTimeValue.textContent = displayTime + "ms";
});

const fontSizeInput = document.querySelector("#font-size");
const fontSizeValue = document.getElementById("font-size-value");
const wordElement = document.querySelector("#word");

// Listen for changes to the input slider
fontSizeInput.addEventListener("input", function (event) {
  // Get the value of the input slider
  const fontSize = event.target.value;

  // Update the font size of the word element
  wordElement.style.fontSize = `${fontSize}px`;
  fontSizeValue.textContent = `${fontSize}px`;
});

const arraySelector = document.querySelector("#array-selector");

// Listen for changes to the dropdown selector
arraySelector.addEventListener("change", function (event) {
  // Get the value of the selected option
  const selectedArray = event.target.value;

  // Update the main array based on the selected option
  words = arrayMap[selectedArray];
  currentWordIndex = 0;
});

const loopCheckbox = document.getElementById("loopCheckbox");
loopCheckbox.addEventListener("change", () => {
  isLoop = loopCheckbox.checked;
});

document.querySelector(".icon").addEventListener("click", function (event) {
  console.log(event);
  console.log(this);
  var kind = this;

  const languages = ["english", "japanese"];
  var long = languages[0];
  var short = long.substring(0, 2);

  switch (kind.id) {
    case "wikipedia":
      var link = `https://${short}.wikipedia.org/w/index.php?search=${encodeURIComponent(
        words[currentWordIndex]
      )}`;
      break;
    case "youtube":
      var link = `https://youglish.com/pronounce/${encodeURIComponent(
        words[currentWordIndex]
      )}/${long}`;
      break;
    case "dict":
      var link = `https://onelook.com/?ls=a&w=${encodeURIComponent(
        words[currentWordIndex]
      )}`;
      break;
  }
  // Construct the Wikipedia URL with the search query
  const wikipediaUrl = `https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(
    words[currentWordIndex]
  )}`;

  // Open a new tab with the Wikipedia search URL
  var windowFeatures = "noopener,noreferrer";
  //   window.open(link, "_blank", windowFeatures);

  const newTab = window.open();
  newTab.location.href = link;
  newTab.blur();
  window.focus();
});

function search(query) {
  const languages = ["english", "japanese"];
  var long = languages[0];
  var short = long.substring(0, 2);

  document.getElementById(
    "wikipedia"
  ).href = `https://${short}.wikipedia.org/w/index.php?search=${encodeURIComponent(
    query
  )}`;
  document.getElementById(
    "youtube"
  ).href = `https://youglish.com/pronounce/${encodeURIComponent(
    query
  )}/${long}`;
  document.getElementById(
    "dict"
  ).href = `https://onelook.com/?ls=a&w=${encodeURIComponent(query)}`;

  //   switch (kind.name) {
  //     case "wikipedia":
  //       var link = `https://${short}.wikipedia.org/w/index.php?search=${encodeURIComponent(
  //         words[currentWordIndex]
  //       )}`;
  //       break;
  //     case "youtube":
  //       var link = `https://youglish.com/pronounce/${encodeURIComponent(
  //         words[currentWordIndex]
  //       )}/${long}`;
  //       break;
  //     case "dict":
  //       var link = `https://onelook.com/?ls=a&w=${encodeURIComponent(
  //         words[currentWordIndex]
  //       )}`;
  //       break;
  //   }
  //   // Construct the Wikipedia URL with the search query
  //   const wikipediaUrl = `https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(
  //     words[currentWordIndex]
  //   )}`;

  //   // Open a new tab with the Wikipedia search URL
  //   var windowFeatures = "noopener,noreferrer";
  //   window.open(link, "_blank");
}
