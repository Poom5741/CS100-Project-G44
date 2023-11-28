document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
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
    const activitiesContainer = document.getElementById("activities-container");
    const activityForm = document.getElementById("activity-form");
  
    activityForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const activityName = document.getElementById("activity-name").value;
      const activityImageUrl = document.getElementById("activity-image-url").value;
  
      if (activityName.trim() !== "" && activityImageUrl.trim() !== "") {
        // Create a new activity box
        const newActivity = document.createElement("div");
        newActivity.classList.add("activity-box");
  
        const activityImage = document.createElement("div");
        activityImage.classList.add("activity-image");
        activityImage.innerHTML = `<img src="${activityImageUrl}" alt="${activityName}">`;
  
        const activityNameElement = document.createElement("div");
        activityNameElement.classList.add("activity-name");
        activityNameElement.textContent = activityName;
  
        newActivity.appendChild(activityImage);
        newActivity.appendChild(activityNameElement);
  
        activitiesContainer.appendChild(newActivity);
  
        // Clear the form fields
        document.getElementById("activity-name").value = "";
        document.getElementById("activity-image-url").value = "";
      } else {
        alert("Please enter both activity name and image URL.");
      }
    });
  });
  