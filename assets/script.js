let video = document.getElementById("video");
let vidLink = [
  "https://www.youtube.com/watch?v=nDq6TstdEi8",
  "https://www.youtube.com/watch?v=7BrIJrjxVxA",
  "https://www.youtube.com/watch?v=CqIjxQcAbuU",
];

function vidSelect() {
  // square brackets are needed to access the index
  let vidRec = vidLink[Math.floor(Math.random() * vidLink.length)];
  return vidRec;
  video.innerHTML = ``;
}

console.log(vidSelect());
