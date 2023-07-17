let video = document.getElementById("video");
let newbtn = document.getElementById("newVid");
let vidLink = [
  "https://www.youtube.com/embed/7BrIJrjxVxA",
  "https://www.youtube.com/embed/nDq6TstdEi8",
  "https://www.youtube.com/embed/CqIjxQcAbuU",
];

function vidSelect() {
  // square brackets are needed to access the index
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
// window will close after 3 hours
setTimeout(() => {
  window.close();
}, 10800000);

newbtn.addEventListener("click", vidSelect);
