function updateTime() {
    let today = new Date();
    
    let thisMonth = today.getMonth();
    let months = ["January", "February", "March", "April", "May", "June", "july", "August", "September", "October","November", "December"];
    let thisDate = today.getDate();
    let thisYear = today.getFullYear();

    let dateElem = document.getElementById("dateHere");
    dateElem.innerHTML = months[thisMonth] + " " + thisDate + ", " + thisYear;



    // CONDITIONALS
    let solarTerm = document.getElementById("solarTerm");
    let isMay = true

    // if(isApril && thisDate >= 20) {
    //     solarTerm.innerHTML = "穀雨 곡우 gǔyǔ - Corn Rain";
    // }

    if(isMay && thisDate <= 5) {
        solarTerm.innerHTML = "穀雨 곡우 gǔyǔ - Corn Rain";
    }

    if(isMay && thisDate >= 6 && thisDate <= 20) {
        solarTerm.innerHTML = "立夏 입하 lìxià - Summer commences";
    }

    

    //// TIME ////
    let thisHour = today.getHours();
    let thisMinute = today.getMinutes(); 
    
    let timeElem = document.getElementById("timeHere");
      
    // CONDITIONALS
    if(thisHour > 12) {
      thisHour = thisHour - 12;
    }
    if(thisHour < 10) {
        thisHour = "0" + thisHour;
      }

    if(thisMinute < 10) {
        thisMinute = "0" + thisMinute;
      }
      
    
      
    timeElem.innerHTML = thisHour + ":" + thisMinute;
    }
    
    setInterval(updateTime, 1000)