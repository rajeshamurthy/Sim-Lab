// student.js
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("✅ bookLab triggered");

  const name = document.getElementById("name").value.trim();
  const regNo = document.getElementById("regNo").value.trim();
  const mentor = document.getElementById("mentor").value.trim();
  const lab = document.getElementById("lab").value.trim();
  const reason = document.getElementById("reason").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!name || !regNo || !mentor || !lab || !reason || !date || !time) {
    document.getElementById("message").innerText = "All fields are required!";
    return;
  }

  db.collection("bookings").add({
    name,
    regNo,
    mentor,
    lab,
    reason,
    date,
    time,
    status: "Pending"
  })
  .then(() => {
    document.getElementById("message").innerText = "Booking submitted successfully!";
    document.getElementById("bookingForm").reset();
    console.log("📚 Booking added to Firestore");
  })
  .catch(error => {
    console.error("🚨 Error booking:", error);
    document.getElementById("message").innerText = "Error submitting booking!";
  });
});
