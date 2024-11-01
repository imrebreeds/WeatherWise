document.getElementById("submit").addEventListener("click", function (event) {
    // Prevent default form submission
    event.preventDefault();

    // Get values from form fields
    const name = document.getElementById("name").value;
    const tel = document.getElementById("tel").value;
    const activity = document.getElementById("activity").value;
    const date = document.getElementById("date").value;
    const notes = document.getElementById("notes").value;

    // Ensure all fields are filled
    if (name && tel && activity && date && notes) {
        // Display the input values in the output section
        document.getElementById("displayName").textContent = name;
        document.getElementById("displayTel").textContent = tel;
        document.getElementById("displayActivity").textContent = activity;
        document.getElementById("displayDate").textContent = date;
        document.getElementById("displayNotes").textContent = notes;

        // Show the output and Edit/Delete buttons, hide the Submit button
        document.getElementById("output").style.display = "block";
        document.getElementById("submit").style.display = "none";
        document.getElementById("edit").style.display = "inline-block";
        document.getElementById("delete").style.display = "inline-block";

        // Disable form fields after submission
        document.getElementById("name").disabled = true;
        document.getElementById("tel").disabled = true;
        document.getElementById("activity").disabled = true;
        document.getElementById("date").disabled = true;
        document.getElementById("notes").disabled = true;
    } else {
        alert("Please fill in all fields.");
    }
});

document.getElementById("edit").addEventListener("click", function () {
    // Enable form fields for editing
    document.getElementById("name").disabled = false;
    document.getElementById("tel").disabled = false;
    document.getElementById("activity").disabled = false;
    document.getElementById("date").disabled = false;
    document.getElementById("notes").disabled = false;

    // Show the Submit button again and hide the output section
    document.getElementById("output").style.display = "none";
    document.getElementById("submit").style.display = "inline-block";
    document.getElementById("edit").style.display = "none";
    document.getElementById("delete").style.display = "none";
});

document.getElementById("delete").addEventListener("click", function () {
    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("activity").value = "";
    document.getElementById("date").value = "";
    document.getElementById("notes").value = "";

    // Hide the output section and reset buttons visibility
    document.getElementById("output").style.display = "none";
    document.getElementById("submit").style.display = "inline-block";
    document.getElementById("edit").style.display = "none";
    document.getElementById("delete").style.display = "none";
});
