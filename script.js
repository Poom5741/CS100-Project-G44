document.querySelectorAll(".nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
function toggleProfileDetails() {
  var profileDetails = document.getElementById("profile-details");

  // สลับคลาสเพื่อเปิด/ปิดการแสดงเนื้อหา
  profileDetails.classList.toggle("show-details");
}

// เพิ่มฟังก์ชัน toggleProfileDetails2() เพื่อแสดง/ซ่อนข้อมูล Member 2
function toggleProfileDetails2() {
  var profileDetails = document.getElementById("profile-details2");

  // สลับคลาสเพื่อเปิด/ปิดการแสดงเนื้อหา
  profileDetails.classList.toggle("show-details");
}

function toggleProfileDetails3() {
  var profileDetails = document.getElementById("profile-details3");

  // สลับคลาสเพื่อเปิด/ปิดการแสดงเนื้อหา
  profileDetails.classList.toggle("show-details");
}

// JavaScript code

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("activity-form");
  const activitiesContainer = document.getElementById("activities-container");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Reset error messages
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach((element) => (element.textContent = ""));

    // Form fields
    const fullname = document.getElementById("fullname");
    const studentID = document.getElementById("studentID");
    const email = document.getElementById("email");
    const activityName = document.getElementById("activity-name");
    const academicYear = document.getElementById("academicYear");
    const semester = document.getElementById("semester");
    const startDate = document.getElementById("startDate");
    const endDate = document.getElementById("endDate");
    const activityImageURL = document.getElementById("activity-image-url");

    // Validation functions
    function validateFullname() {
      const value = fullname.value.trim();
      if (value === "") {
        document.getElementById("fullnameError").textContent =
          "Please enter your full name.";
        return false;
      }
      return true;
    }

    function validateStudentID() {
      const value = studentID.value.trim();
      if (value === "" || !/^\d{10}$/.test(value)) {
        document.getElementById("studentIDError").textContent =
          "Please enter a valid 10-digit student 66 ID.";
        return false;
      } else if (value[0] != "6" || value[1] != "6") {
        document.getElementById("studentIDError").textContent =
          "Please enter a valid 10-digit student 66 ID.";
        return false;
      }
      return true;
    }

    function validateEmail() {
      const value = email.value.trim();
      if (value === "" || !/^[a-zA-Z0-9._-]+@dome\.tu\.ac\.th$/.test(value)) {
        document.getElementById("emailError").textContent =
          "Please enter a valid university email (xxx.yyy@dome.tu.ac.th).";
        return false;
      }
      return true;
    }

    function validateActivityName() {
      const value = activityName.value.trim();
      if (value === "") {
        document.getElementById("activityNameError").textContent =
          "Please enter an activity name.";
        return false;
      }
      return true;
    }

    // Date formatting function
    function formatDate(inputDate) {
      const date = new Date(inputDate);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    }

    // Perform validation
    const isFullnameValid = validateFullname();
    const isStudentIDValid = validateStudentID();
    const isEmailValid = validateEmail();
    const isActivityNameValid = validateActivityName();

    // If all validations pass, add a new activity component
    if (
      isFullnameValid &&
      isStudentIDValid &&
      isEmailValid &&
      isActivityNameValid
    ) {
      // Create a new activity box
      const newActivity = document.createElement("div");
      newActivity.classList.add("activity-box");

      const activityImage = document.createElement("div");
      activityImage.classList.add("activity-image");
      activityImage.innerHTML = `<img src="${activityImageURL.value}" alt="${activityName.value}">`;

      const activityNameElement = document.createElement("div");
      activityNameElement.classList.add("activity-name");
      activityNameElement.textContent = activityName.value;

      const activityData = document.createElement("div");
      activityData.classList.add("activity-data");
      const ul = document.createElement("ul");
      ul.classList.add("no-bullet-list");

      const dataItems = [
        "fullname",
        "studentID",
        "email",
        "academicYear",
        "semester",
        "startDate",
        "endDate",
      ];

      dataItems.forEach((item) => {
        const li = document.createElement("li");
        li.classList.add(item);
        if (item === "startDate" || item === "endDate") {
          li.textContent = formatDate(document.getElementById(item).value);
        } else {
          li.textContent = document.getElementById(item).value;
        }
        ul.appendChild(li);
      });

      activityData.appendChild(ul);

      newActivity.appendChild(activityImage);
      newActivity.appendChild(activityNameElement);
      newActivity.appendChild(activityData);

      activitiesContainer.appendChild(newActivity);

      // Clear the form fields
      form.reset();
    }
  });
});
