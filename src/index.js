document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form");
  const ul = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    // console.log(e.target)  //form

    e.preventDefault();

    const newTaskDescription = document.querySelector("#new-task-description");

    // create elements
    const li = document.createElement("li");
    const btnDelete = document.createElement("button");
    const btnEdit = document.createElement("button");
    const inputEdit = document.createElement("input");
    const btnSave = document.createElement("button");

    // dropDown with options
    const dropDown = document.createElement("select");
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    const option3 = document.createElement("option");

    // display task as list
    li.textContent = `${newTaskDescription.value} `;
    li.style.marginBottom = "0.25rem";

    btnDelete.textContent = "Delete";
    btnDelete.style.marginRight = "0.25rem";

    btnEdit.textContent = "Edit";
    btnEdit.style.marginRight = "0.25rem";

    inputEdit.type = "text";
    inputEdit.style.marginRight = "0.25rem";
    inputEdit.style.display = "none"; //hide

    btnSave.textContent = "Apply";
    btnSave.style.display = "none"; //hide

    // set option textContent
    option1.textContent = "Red";
    option1.value = "red";
    option2.textContent = "Yellow";
    option2.value = "yellow";
    option3.textContent = "Green";
    option3.value = "green";

    // attach options to dropDown
    dropDown.title = "Choose Priority";
    dropDown.appendChild(option1);
    dropDown.appendChild(option2);
    dropDown.appendChild(option3);

    dropDown.style.marginRight = "0.25rem";

    // attach elements to li if user adds task
    if (newTaskDescription.value) {
      li.appendChild(dropDown);
      li.appendChild(btnDelete);
      li.appendChild(btnEdit);
      li.appendChild(inputEdit);
      li.appendChild(btnSave);
    } else {
      alert("No task entered!");
      return;
    }

    // attach li/task to ul
    ul.appendChild(li);

    // delete task
    btnDelete.addEventListener("click", (e) => {
      // console.log(e.target) //Delete
      
      li.remove();
    });

    // edit task
    btnEdit.addEventListener("click", (e) => {
      // console.log(e.target) //Edit

      btnDelete.style.display = "none"; //hide
      btnEdit.style.display = "none"; //hide
      dropDown.style.display = "none"; //hide
      inputEdit.style.display = "inline-block";
      btnSave.style.display = "inline-block";
    });

    // save edited task
    btnSave.addEventListener("click", (e) => {
      // console.log(e.target); //Apply

      const updatedTask = inputEdit.value;
      li.firstChild.textContent = `${updatedTask} `; //edit task
      dropDown.style.display = "inline-block"; //now show
      btnDelete.style.display = "inline-block"; //now show
      btnEdit.style.display = "inline-block"; //now show
      inputEdit.style.display = "none";
      btnSave.style.display = "none";
    });

    dropDown.addEventListener("click", (e) => {
      // console.log(e.target.parentNode);  //li

      // switching between options
      switch (e.target.value) {
        case "red":
          e.target.parentNode.style.color = "red";
          break;
        case "yellow":
          e.target.parentNode.style.color = "yellow";
          break;
        case "green":
          e.target.parentNode.style.color = "green";
          break;
        default:
          break;
      }
    });

    // reset form value upon submission
    form.reset();
  });
});

// TODO: careful in using this with arrow function!


