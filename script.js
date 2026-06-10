const scheduleChosens = document.querySelectorAll(".chosen-schedule");
const scheduleTables = document.querySelectorAll(".schedule-table-div");
const scheduleButtons = document.querySelectorAll(".schedule-button");
scheduleButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    scheduleButtons.forEach((button2) => {
      button2.classList.remove("active-schedule-button");
    });
    scheduleTables.forEach((table) => {
      table.classList.remove("active-schedule");
    });
    scheduleChosens.forEach((chosen) => {
      chosen.classList.remove("active-chosen-schedule");
    });
    if (scheduleTables[index]) {
      scheduleTables[index].classList.add("active-schedule");
    }
    if (scheduleChosens[index]) {
      scheduleChosens[index].classList.add("active-chosen-schedule");
    }
    scheduleButtons[index].classList.add("active-schedule-button");
  });
});
