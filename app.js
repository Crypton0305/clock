document.addEventListener('DOMContentLoaded', function() {
    function showDateTime(){
        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var s = date.getSeconds(); // 0 - 59
        var session = "PM";
        
        // Date variables
        var day = date.getDate();
        var month = date.getMonth() + 1; // Months are zero-based
        var year = date.getFullYear();
        
        // Time conversion for 12-hour format
        if(h == 0){
            h = 12;
        }
        
        if(h < 12){
            h = h - 12;
            session = "AM";
        }
        
        // Add leading zero if necessary
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        day = (day < 10) ? "0" + day : day;
        month = (month < 10) ? "0" + month : month;
        
        // Format time and date
        var time = h + ":" + m + ":" + s + " " + session;
        var fullDate = month + "/" + day + "/" + year;
        
        // Display both date and time
        document.getElementById("MyClockDisplay").innerText = fullDate + " " + time;
        document.getElementById("MyClockDisplay").textContent = fullDate + " " + time;
        
        setTimeout(showDateTime, 1000);
    }

    showDateTime();
});
