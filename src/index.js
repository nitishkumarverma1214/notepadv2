import { textarea, notes } from "./map.js";
// active will mark the active note. it is 0-indexed.
export let active = 0;
export const btnBgColor = "#888";
export const boldBtn = document.querySelector(".bold-div");

export const underlineBtn = document.querySelector(".underline-div");

const copyBtn = document.querySelector(".copy-div");

const saveBtn = document.querySelector(".save-div");

const selectedText = document.querySelector(".editor");


export function resetBtnBgColor(btn){
  btn.style.backgroundColor ="";
}

boldBtn.addEventListener("click", function (event) {
  if (selectedText.innerText.length !== 0) {
    document.execCommand("bold", false, null);
    textarea[active] = selectedText.innerHTML;
    // boldBtn.style.backgroundColor = btnBgColor;
  } else {
    alert("Nothing to bold");
  }
});

underlineBtn.addEventListener("click", function (event) {
  if (selectedText.innerHTML.length !== 0) {
    document.execCommand("underline", false, null);
    // underlineBtn.style.backgroundColor = btnBgColor;
  } else {
    alert("Nothing to underline");
   
    
  }
});

copyBtn.addEventListener("click", function (event) {
 
  const content = document.getElementById("editorId").textContent;
  console.log('content:'+content);
  if (content.length !== 0) {
    navigator.clipboard.writeText(content).then(
      () => {
        alert("Text Copied");
      },
      () => {
        alert("Text not copied");
      }
    );
  } else {
    alert("Nothing to copy");
  }
});

saveBtn.addEventListener("click", function (event) {
  /* need to track the current/active note. */

  textarea[notes[active]] = selectedText.innerHTML;
  alert("Your note is saved.");
});

export function setActive(act) {
  active = act;
}

// reset the bold and underline when the content of text is empty

selectedText.addEventListener(
  "paste",
  function (event) {
    // let temp =
    console.log(selectedText.innerHTML);
    //  selectedText.innerHTML =  selectedText.innerText;
  },
  false
);
