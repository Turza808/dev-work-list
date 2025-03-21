function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

function taskCompleted(id1, id2, id3) {
  const element = document.getElementById(id1).innerText;
  let convertedElement = parseInt(element);
  if (convertedElement > 0) {
    if (convertedElement === 1) {
      alert("Congrates!!! You have completed all the current task");
    }
    convertedElement--;
    document.getElementById(id1).innerText = "0" + convertedElement;
  }
  const secondElement = document.getElementById(id2).innerText;
  let convertedSecondElement = parseInt(secondElement);
  convertedSecondElement++;
  document.getElementById(id2).innerText = convertedSecondElement;
  document.getElementById(id3).setAttribute("disabled", true);
}
// fucntion add element in the activity log
function addActivity(titileId) {
  const selectlog = document.getElementById("activity-log");
  const time = new Date().toLocaleTimeString();
  const div = document.createElement("div");
  const title = getElement(titileId).innerText;
  div.innerHTML = `
    <div class="cardbg p-3 border-none rounded-md">
              <p class="text-base">
                You have Completed The Task ${title} at ${time}
              </p>
            </div>
  `;
  selectlog.appendChild(div);
}
document.getElementById("color-change").addEventListener("click", function () {
  document.body.style.backgroundColor =
    `rgb(` +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    `)`;
});
document.getElementById("card-day").innerText = new Date().toLocaleDateString(
  "en-US",
  {
    weekday: "short",
  }
);
document.getElementById("card-date").innerText = new Date().toLocaleDateString(
  "en-Us",
  {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }
);
document.getElementById("clear-history").addEventListener("click", function () {
  document.getElementById("activity-log").innerHTML = "";
});
document.getElementById("discover").addEventListener("click", function () {
  window.location.href = "./blog.html";
});
