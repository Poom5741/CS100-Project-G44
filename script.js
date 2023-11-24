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

