let video = document.getElementById("video");
let newbtn = document.getElementById("newVid");
let twenbtn = document.getElementById("twenty");
let allVids = [
  "https://www.youtube.com/embed/7BrIJrjxVxA",
  "https://www.youtube.com/embed/nDq6TstdEi8",
  "https://www.youtube.com/embed/CqIjxQcAbuU",
];
let snowVid = ["https://www.youtube.com/embed/7BrIJrjxVxA"];
let thunderVid = ["https://www.youtube.com/embed/nDq6TstdEi8"];
let animalVid = ["https://www.youtube.com/embed/CqIjxQcAbuU"];
// must be declared globally in order to be used in all functions.
let vidLink;
document.addEventListener("DOMContentLoaded", function () {
  let answer = prompt(
    'Please select what kind of video you would like to see. Enter "snow", "storm", "animal" or "all"'
  );

  // // square brackets are needed to access the index
  if (answer === "snow" || answer === "Snow") {
    vidLink = snowVid;
  } else if (answer === "storm" || answer === "Storm") {
    vidLink = thunderVid;
  } else if (answer === "animal" || answer === "Animal") {
    vidLink = animalVid;
  } else if (answer === "all" || answer === "All" || !answer) {
    vidLink = allVids;
  } else {
    return (video.innerHTML = `<p> you may have mispelled something, please refresh and try again.</p>`);
  }
});

function vidSelect() {
  // if the vidlink array is empty display out of vids
  // put this before the array is modified
  if (vidLink.length === 0) {
    video.innerHTML = `<p> you have run out of videos, refrsh to start again.</p>`;
    newbtn.classList.add("hidden");
    return;
  }
  // set the index to a random selection
  let index = Math.floor(Math.random() * vidLink.length);
  // sets the index for the vidLink
  let vidRec = vidLink[index];
  console.log(vidRec);
  video.innerHTML = `<iframe width="426" height="240" src="${vidRec}"></iframe>`;
  // takes in the index and removes the video currently selected from the array
  // splice takes in an index
  vidLink.splice(index, 1);
}
// flag setting fulltime to false
let fullTime = false;
// sets full time to the opposite
function switcher() {
  fullTime = !fullTime;
  // if true clears counter and gives alert, everytime button is clicked, it checks
  if (fullTime === true) {
    clearTimeout(count);
    alert("24 hour mood is active\nto deactivate click the button again");
  } else {
    // if false calls closure
    closer();
  }
}
// sets timeout, count is set timeout so it can be cleared
function closer() {
  count = setTimeout(() => {
    // window will close after 3 hours
    window.close();
  }, 10800000);
}

newbtn.addEventListener("click", vidSelect);
twenbtn.addEventListener("click", switcher);
// calls automatically if twenbtn is clicked it will be interuppted
closer();
