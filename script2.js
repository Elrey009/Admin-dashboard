// const datePosition = document.getElementById("updateDate");
// function updateDate() {
//   // Array of month names
//   const monthNames = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   // Get the current date
//   const currentDate = new Date();

//   // Format the date as Dec-02-2023
//   const month = monthNames[currentDate.getMonth()]; // Months are zero-based
//   const day = currentDate.getDate().toString().padStart(2, "0");
//   const year = currentDate.getFullYear();

//   const formattedDate = `${month}-${day}-${year}`;

//   return formattedDate;
// }

// function loadDate() {
//   // Call the function to update the date
//   const newDate = updateDate();

//   const dateContainer = document.getElementById("updateDate");

//   console.log(dateContainer);

//   dateContainer.innerHTML = newDate.toString();

//   // Display the updated date
//   console.log(`Updated date: ${newDate}`);
// }

// window.onload = loadDate;

// var myDate = new Date("2023-12-12T01:50:32.000");
// (month = myDate.getMonth()), (date = myDate.getDate()), (day = myDate.getDay());

// console.log(day);

// let dateToday = document.getElementById("updateDate");

// let date = new Date();
// console.log(today);

// datePosition.textContent = today;



// 

// const firstSection = document.querySelector(".section-request");
// const thirdSection = document.querySelector(".section1");
// const secondSection = document.querySelector(".Messagessss");
// const sideBar = document.querySelectorAll(".side-bar a.list");

// sideBar.forEach((tab) => {
//     tab.addEventListener("click", () => {
//       if (tab.classList.contains('request')) {
//         firstSection.style.display = "block";
//         secondSection.style.display = "none";
//         thirdSection.style.display = "none";
//       } else if (tab.classList.contains("messages")) {
//         secondSection.style.display = "block";
//         firstSection.style.display = "none";
//         thirdSection.style.display = "none";
//       }

//     });
//   });;


