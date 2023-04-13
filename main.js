const parent = document.getElementById("parent");
//parent.style.height = parent.clientHeight+"px";

var words1 = ["Hello", "World", "OpenAI", "ChatGPT", "Programming"];
var story = [
  "Alan",
  "Tan",
  "had",
  "always",
  "lived",
  "a",
  "charmed",
  "life.",
  "He",
  "was",
  "born",
  "in",
  "Singapore",
  "to",
  "a",
  "wealthy",
  "family,",
  "and",
  "as",
  "the",
  "only",
  "son,",
  "he",
  "was",
  "spoiled",
  "by",
  "his",
  "parents.",
  "He",
  "attended",
  "the",
  "best",
  "schools,",
  "traveled",
  "extensively,",
  "and",
  "lived",
  "in",
  "luxury.",
  "His",
  "parents",
  "set",
  "him",
  "up",
  "with",
  "a",
  "successful",
  "career",
  "in",
  "finance,",
  "and",
  "he",
  "quickly",
  "rose",
  "through",
  "the",
  "ranks,",
  "becoming",
  "a",
  "managing",
  "director",
  "at",
  "a",
  "young",
  "age.",
  "As",
  "he",
  "approached",
  "his",
  "mid-thirties,",
  "Alan",
  "realized",
  "that",
  "he",
  "wanted",
  "more",
  "from",
  "life",
  "than",
  "just",
  "his",
  "successful",
  "career.",
  "He",
  "longed",
  "for",
  "companionship,",
  "and",
  "he",
  "began",
  "to",
  "actively",
  "seek",
  "out",
  "a",
  "partner.",
  "He",
  "met",
  "Chloe,",
  "a",
  "beautiful",
  "and",
  "intelligent",
  "woman",
  "who",
  "worked",
  "in",
  "the",
  "same",
  "industry.",
  "They",
  "quickly",
  "fell",
  "in",
  "love",
  "and",
  "decided",
  "to",
  "get",
  "married.",
  "The",
  "day",
  "before",
  "their",
  "wedding",
  "was",
  "a",
  "beautiful",
  "day",
  "in",
  "Singapore.",
  "The",
  "sun",
  "was",
  "shining,",
  "and",
  "there",
  "was",
  "a",
  "gentle",
  "breeze",
  "in",
  "the",
  "air.",
  "Alan",
  "spent",
  "the",
  "day",
  "getting",
  "ready",
  "for",
  "the",
  "wedding",
  "with",
  "his",
  "groomsmen.",
  "They",
  "laughed",
  "and",
  "joked",
  "as",
  "they",
  "went",
  "through",
  "their",
  "preparations.",
  "As",
  "the",
  "sun",
  "began",
  "to",
  "set,",
  "Alan",
  "went",
  "out",
  "for",
  "a",
  "walk",
  "alone",
  "to",
  "clear",
  "his",
  "head.",
  "He",
  "strolled",
  "through",
  "the",
  "city,",
  "taking",
  "in",
  "the",
  "sights",
  "and",
  "sounds",
  "of",
  "his",
  "beloved",
  "Singapore.",
  "As",
  "he",
  "was",
  "walking",
  "down",
  "a",
  "quiet",
  "street,",
  "he",
  "was",
  "suddenly",
  "attacked",
  "from",
  "behind.",
  "He",
  "didn't",
  "see",
  "his",
  "attacker,",
  "but",
  "he",
  "felt",
  "a",
  "sharp",
  "pain",
  "in",
  "his",
  "back,",
  "and",
  "then",
  "everything",
  "went",
  "dark.",
  "The",
  "next",
  "thing",
  "Alan",
  "knew,",
  "he",
  "was",
  "lying",
  "on",
  "the",
  "ground,",
  "bleeding",
  "profusely.",
  "He",
  "tried",
  "to",
  "get",
  "up,",
  "but",
  "his",
  "legs",
  "wouldn't",
  "move.",
  "He",
  "felt",
  "his",
  "strength",
  "ebbing",
  "away,",
  "and",
  "he",
  "knew",
  "that",
  "he",
  "was",
  "dying.",
  "As",
  "he",
  "lay",
  "there,",
  "he",
  "thought",
  "of",
  "Chloe",
  "and",
  "how",
  "devastated",
  "she",
  "would",
  "be",
  "when",
  "she",
  "found",
  "out",
  "what",
  "had",
  "happened",
  "to",
  "him.",
  "The",
  "police",
  "arrived",
  "soon",
  "after",
  "and",
  "found",
  "Alan",
  "lying",
  "in",
  "a",
  "pool",
  "of",
  "his",
  "own",
  "blood.",
  "They",
  "rushed",
  "him",
  "to",
  "the",
  "hospital,",
  "but",
  "it",
  "was",
  "too",
  "late.",
  "He",
  "died",
  "before",
  "he",
  "could",
  "make",
  "it",
  "to",
  "the",
  "emergency",
  "room.",
  "The",
  "news",
  "of",
  "Alan's",
  "death",
  "spread",
  "quickly,",
  "and",
  "Chloe",
  "was",
  "devastated",
  "when",
  "she",
  "heard",
  "what",
  "had",
  "happened.",
  "She",
  "couldn't",
  "believe",
  "that",
  "her",
  "fiancé,",
  "the",
  "man",
  "she",
  "was",
  "going",
  "to",
  "marry",
  "the",
  "next",
  "day,",
  "was",
  "gone",
  "forever.",
  "The",
  "police",
  "launched",
  "an",
  "investigation",
  "into",
  "Alan's",
  "death,",
  "but",
  "they",
  "were",
  "unable",
  "to",
  "find",
  "his",
  "killer.",
  "The",
  "motive",
  "for",
  "the",
  "attack",
  "was",
  "unknown,",
  "and",
  "there",
  "were",
  "no",
  "witnesses",
  "to",
  "the",
  "crime.",
  "Chloe",
  "was",
  "never",
  "the",
  "same",
  "after",
  "Alan's",
  "death.",
  "She",
  "struggled",
  "to",
  "come",
  "to",
  "terms",
  "with",
  "her",
  "loss",
  "and",
  "eventually",
  "moved",
  "to",
  "another",
  "country",
  "to",
  "start",
  "a",
  "new",
  "life.",
  "Alan's",
  "parents",
  "were",
  "also",
  "devastated",
  "by",
  "his",
  "death",
  "and",
  "struggled",
  "to",
  "cope",
  "with",
  "their",
  "grief.",
  "Alan's",
  "death",
  "shocked",
  "the",
  "Singaporean",
  "community,",
  "and",
  "it",
  "served",
  "as",
  "a",
  "reminder",
  "that",
  "even",
  "the",
  "most",
  "charmed",
  "lives",
  "can",
  "be",
  "cut",
  "short",
  "by",
  "senseless",
  "violence.",
  "Despite",
  "the",
  "efforts",
  "of",
  "the",
  "police,",
  "his",
  "killer",
  "was",
  "never",
  "found,",
  "and",
  "his",
  "family",
  "and",
  "friends",
  "were",
  "left",
  "with",
  "a",
  "gaping",
  "hole",
  "in",
  "their",
  "lives.",
  "In",
  "the",
  "end,",
  "Alan's",
  "life",
  "was",
  "a",
  "reminder",
  "that",
  "no",
  "one",
  "is",
  "immune",
  "to",
  "tragedy,",
  "and",
  "that",
  "we",
  "should",
  "cherish",
  "every",
  "moment",
  "we",
  "have",
  "with",
  "the",
  "people",
  "we",
  "love.",
];
var words2 = [
  "inchoate",
  "lacuna lacunar",
  "perfuse",
  "suffuse",
  "diffuse",
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
var words3 = ["渾", "廈", "王道楽土", "推しの子","後見人","実質","身元引受人","自信家","偶像","隠し通す","欲張り","図太い","野太い","帝王切開","無痛分娩","羽ばたき","産気づく","端くれ","復帰","危なっかしい","音源","打算","お偉方","酔狂","焦がす","吸い寄せる","腑に落ちる","不可抗力","超常現象","失禁","逸材","猿人","摂理","倫理","隠蔽","母子手帳","心の渇き","狼藉","化身","隈取り","中敷き　（靴の）","迫真","快進撃","中抜き","習い事","歌唱","印税","天引き","世も末","エゴサ","調律","体現","極楽浄土","改革","粗相","早熟","晩熟","広告塔","ちょびっと","仰々しい","重曹","ずぶの素人","急遽","コミュ力","大御所","お灸を据える","貴重","詮索","巷説","網膜","角膜","譲り","勝ち気","受胎","びっちり","さばける","窃盗","釈放","ないがしろ","共演","授業参観","殺害","熱狂","明け暮れ","有名税","免罪符","簡素","袋叩き","頑な","割り出す"];
var countryFlags = [
  "🇵🇲",
  "🇰🇿",
  "🇹🇫",
  "🇧🇱",
  "🇦🇨",
  "🇬🇵",
  "🇵🇳",
  "🇨🇲",
  "🇹🇦",
  "🇮🇴",
  "🇷🇪",
  "🇲🇱",
  "🇸🇳",
  "🇬🇸",
  "🇧🇯",
  "🇹🇫",
];
var countryFlagsAll = [
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

shuffleArray(countryFlagsAll);

const arrayMap = {
  array1: words1,
  array2: words2,
  array3: words3,
  array4: countryFlagsAll,
  // Add more entries for your other word arrays
};

var words = words3;
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
    if (currentWordIndex == words.length - 1) {
      currentWordIndex = 0;
    } else {
      currentWordIndex++;
    }
    iterate();
  } else {
    currentWordIndex--;
    if (currentWordIndex == -1) {
      currentWordIndex = words.legnth - 1;
    }
  }
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    togglePause();
  }
  if (
    event.code === "KeyA" &&
    !event.ctrlKey &&
    !event.altKey &&
    !event.shiftKey &&
    !event.metaKey
  ) {
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
  if (
    event.code === "KeyZ" &&
    !event.ctrlKey &&
    !event.altKey &&
    !event.shiftKey &&
    !event.metaKey
  ) {
    document.getElementById("save").innerHTML +=
      "<span>" + words[currentWordIndex] + "</span> ";
  }
  if (
    event.code === "KeyX" &&
    !event.ctrlKey &&
    !event.altKey &&
    !event.shiftKey &&
    !event.metaKey
  ) {
    document.getElementById("save").innerHTML = "";
  }
  if (
    event.code === "KeyQ" &&
    !event.ctrlKey &&
    !event.altKey &&
    !event.shiftKey &&
    !event.metaKey
  ) {
    words.splice(currentWordIndex, 1);
    if (currentWordIndex == words.length) {
      currentWordIndex = 0;
    }
    displayWord(currentWordIndex);
  }
  if (
    event.code === "KeyC" &&
    !event.ctrlKey &&
    !event.altKey &&
    !event.shiftKey &&
    !event.metaKey
  ) {
    document.getElementById("cat").innerHTML = "";
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
  displayWord(currentWordIndex);
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
  var long = languages[1];
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
  var long = languages[1];
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
