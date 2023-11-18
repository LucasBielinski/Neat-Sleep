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
let modal = document.getElementById("mymodal");
let form = document.getElementById("theForm");
let selected = form.value;
// must be declared globally in order to be used in all functions.

function formsbmit(e) {
  e.preventDefault();
  let answer = selected;
  tellTime();
  modal.classList.add("hidden");
  let vidLink;

  // // square brackets are needed to access the index
  switch (answer.toLowerCase()) {
    case "snow":
      vidLink = snowVid;
      break;

    case "storm":
      vidLink = thunderVid;
      break;

    case "animal":
      vidLink = animalVid;
      break;

    case "all":
    case "":
      vidLink = allVids;
      break;

    default:
      video.innerHTML = `<p> you may have mispelled something, please refresh and try again.</p>`;
      return;
  }
  // anonymous function due to issues transfering input an anonymous function is called here
  newbtn.addEventListener("click", function () {
    vidSelect(vidLink);
  });
}
// document.addEventListener("DOMContentLoaded", function () {
//   let answer = prompt(
//     'Please select what kind of video you would like to see. Enter "snow", "storm", "animal" or "all"'
//   );
//   tellTime();
//   let vidLink;

//   // // square brackets are needed to access the index
//   switch (answer.toLowerCase()) {
//     case "snow":
//       vidLink = snowVid;
//       break;

//     case "storm":
//       vidLink = thunderVid;
//       break;

//     case "animal":
//       vidLink = animalVid;
//       break;

//     case "all":
//     case "":
//       vidLink = allVids;
//       break;

//     default:
//       video.innerHTML = `<p> you may have mispelled something, please refresh and try again.</p>`;
//       return;
//   }
//   // anonymous function due to issues transfering input an anonymous function is called here
//   newbtn.addEventListener("click", function () {
//     vidSelect(vidLink);
//   });
// });

function vidSelect(vidLink) {
  // if the vidlink array is empty display out of vids
  // put this before the array is modified
  console.log(vidLink);
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
// DayJS is finicky, hardest part so far
function tellTime() {
  let clock = document.getElementById("time");
  let morning = dayjs("6:00 am", "h:mm A");
  let morningEnd = dayjs("11:59 pm", "h:mm A");
  let noon = dayjs("12:00 pm", "h:mm A");
  let noonEnd = dayjs("4:59 pm", "h:mm A");
  function update() {
    // methods wont work if its not an object, must be brought in full
    let currentTime = dayjs();
    let isTime;
    if (currentTime.isBefore(morningEnd) && currentTime.isAfter(morning)) {
      isTime = "Good Morning";
    } else if (currentTime.isBefore(noonEnd) && currentTime.isAfter(noon)) {
      isTime = "Good Afternoon";
    } else {
      isTime = "Good Night";
    }
    clock.innerHTML = `${isTime} it is currently\n${currentTime.format(
      "h:mm A"
    )}`;
  }
  // updates every second
  setInterval(update, 1000);
}
twenbtn.addEventListener("click", switcher);
// calls automatically if twenbtn is clicked it will be interuppted
closer();
