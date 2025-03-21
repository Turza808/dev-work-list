const btnClasses = document.getElementsByClassName("task-btn");

for (const btn of btnClasses) {
  btn.addEventListener("click", function (event) {
    const buttonId = event.target.id;
    alert(`Board Updated Successfully`);
    taskCompleted("task-assigned-num", "total-completed", buttonId);
    const parentButtonId = document.querySelector(`#${buttonId}`).parentNode
      .parentNode;
    const title = parentButtonId.querySelector("h1").id;
    console.log(parentButtonId.querySelector("h1").id);
    addActivity(title);
  });
}
