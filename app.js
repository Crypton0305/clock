document.addEventListener('DOMContentLoaded', function() {
    function showDateTime() {
        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var s = date.getSeconds(); // 0 - 59
        var session = "PM";
        
        // Array of month names
        var monthNames = ["January", "February", "March", "April", "May", "June", 
                          "July", "August", "September", "October", "November", "December"];
        
        // Date variables
        var day = date.getDate();
        var month = monthNames[date.getMonth()]; // Get month name instead of number
        var year = date.getFullYear();
        
        // Time conversion for 12-hour format
        if(h == 0) {
            h = 12;
        }
        
        if(h > 12) {
            h = h - 12;
            session = "PM";
        }
        
        // Add leading zero if necessary
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        day = (day < 10) ? "0" + day : day;
        
        // Format time and date
        var time = h + ":" + m + ":" + s + " " + session;
        var fullDate = month + " " + day + ", " + year; // Month as name
        
        // Display both date and time
        document.getElementById("MyClockDisplay").innerText = time + "\n" + fullDate;
        document.getElementById("MyClockDisplay").textContent = time + "\n" + fullDate;
        
        setTimeout(showDateTime, 1000);
    }

    showDateTime();
});
