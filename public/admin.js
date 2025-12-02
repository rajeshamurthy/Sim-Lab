const list = document.getElementById("adminBookingList");

db.collection("bookings").orderBy("date").get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      const data = doc.data();
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>Name:</strong> ${data.name}<br>
        <strong>Reg. No.:</strong> ${data.regNo}<br>
        <strong>Mentor:</strong> ${data.mentor}<br>
        <strong>Reason:</strong> ${data.reason}<br>
        <strong>Lab:</strong> ${data.lab}<br>
        <strong>Date:</strong> ${data.date}<br>
        <strong>Status:</strong> ${data.status}
        <hr />
      `;
      list.appendChild(li);
    });
  })
  .catch(error => {
    console.error("Error loading bookings:", error);
  });
