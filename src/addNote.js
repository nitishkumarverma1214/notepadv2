import { textarea, notes } from "./map.js";
import {
  active,
  setActive,
  btnBgColor,
  boldBtn,
  underlineBtn
} from "./index.js";

const selectedText = document.querySelector(".editor");
const addNoteBtn = document.querySelector("#add-note");
let noteList = document.querySelector(".list");
let count = 1;

const noteOneBtn = document.getElementById("0");

// update note1 btn with color
noteOneBtn.style.backgroundColor = "orange";
// add listener to note1 btn
noteOneBtn.addEventListener("click", function (event) {
  let currId = noteOneBtn.id;
  autoSave(active);
  showNote(noteOneBtn.id);
  highlightSelected(active, currId);
  setActive(currId);
});

function showNote(active) {
  let actText = textarea[notes[active][0]];

  const textCont = document.getElementById("editorId");
  textCont.innerHTML = actText;
  if (notes[active][1] === true) {
    boldBtn.style.backgroundColor = btnBgColor;
  } else {
    boldBtn.style.backgroundColor = "";
  }
  if (notes[active][2] === true) {
    underlineBtn.style.backgroundColor = btnBgColor;
  } else {
    underlineBtn.style.backgroundColor = "";
  }
}

function autoSave(currId) {
  textarea[notes[currId][0]] = selectedText.innerHTML;
}

function highlightSelected(oldbtn, newbtn) {
  let btnList = document.getElementsByClassName("select-note");

  btnList[oldbtn].style.backgroundColor = "";
  btnList[newbtn].style.backgroundColor = "orange";
}

addNoteBtn.addEventListener("click", function (event) {
  let div = document.createElement("div");
  let input = document.createElement("input");
  input.value = "Note-" + count;
  input.className = "input-box";
  div.className = "common";
  let btn = document.createElement("button");
  btn.innerHTML = '<img src="./resources/edit-icon.svg" alt="edit" />';
  btn.id = count;

  // Found the bug it should be className not class
  btn.className = "select-note";

  div.appendChild(input);
  div.appendChild(btn);
  noteList.appendChild(div);
  textarea.push("");
  notes[count] = [count, false, false];

  let prevbtnId = active;
  //autoSave
  autoSave(active);
  // update the active to the count value.
  setActive(count);
  let newbtnId = active;

  showNote(active);

  count++;

  highlightSelected(prevbtnId, newbtnId);

  // We need to add the event listener every time when a new element is add to div.list

  btn.addEventListener("click", function (event) {
    let currId = btn.id;
    console.log(active);
    autoSave(active);
    showNote(currId);
    highlightSelected(active, currId);
    setActive(currId);
  });
});
