// Define a function that returns the first matching element
function getFirstSelector(selector) {
  const firstSelector = document.querySelector(selector)
  return firstSelector
}


// Define a function that pulls .target out of #nested id
function nestedTarget() {
  const nestedSelector = document.querySelector('#nested .target')
  return nestedSelector
}


// Define a function that increases the ranks of all ranked lists by n
function increaseRankBy(n) {
  let rankedList = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n;
  }
}


// Build a function that pulls out the deepest child element from div#grand-node
function deepestChild() {
  let deepElement = document.getElementById('grand-node').querySelectorAll('div');
    return deepElement[deepElement.length - 1] // We want the last div (using array index numerology)
}
