function renderBooking(doc) {
  const data = doc.data();
  const div = document.createElement("div");
  div.innerHTML = `
    <strong>Name:</strong> ${data.name}<br>
    <strong>Reg. No.:</strong> ${data.regNo}<br>
    <strong>Mentor:</strong> ${data.mentor}<br>
    <strong>Reason:</strong> ${data.reason}<br>
    <strong>Lab:</strong> ${data.lab}<br>
    <strong>Date:</strong> ${data.date}<br>
    <strong>Time:</strong> ${data.time}<br>
    <strong>Status:</strong> ${data.status}<br>
    <button onclick="updateStatus('${doc.id}', 'Approved')">Approve</button>
    <button onclick="updateStatus('${doc.id}', 'Rejected')">Reject</button>
    <hr />
  `;
  document.getElementById("bookingList").appendChild(div);
}

function updateStatus(id, status) {
  db.collection("bookings").doc(id).update({ status })
    .then(() => {
      alert(`Status updated to ${status}`);
      location.reload();
    });
}

db.collection("bookings")
  .where("status", "==", "Pending")
//  .orderBy("date")
  .onSnapshot(snapshot => {
    const list = document.getElementById("bookingList");
    list.innerHTML = "";
    if (snapshot.empty) {
      list.innerText = "No bookings available.";
    } else {
      snapshot.forEach(renderBooking);
    }
  });
