function updateTime() {
    let today = new Date();
    
    let thisMonth = today.getMonth();
    let months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER","NOVEMBER", "DECEMBER"];
    let thisDate = today.getDate();
    let thisYear = today.getFullYear();

    let dateElem = document.getElementById("dateHere");
    dateElem.innerHTML = months[thisMonth] + " " + thisDate + ", " + thisYear;



// CONDITIONALS
    let solarTerm = document.getElementById("solarTerm");

// Feb 4-feb18: 立春 입춘 lìchūn - Beginning of Spring
    if(thisMonth == 1 && thisDate >= 4 && thisDate <= 18) {
        document.body.style.backgroundImage = "url('images/1.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

// Feb 19-march 5: 雨水 우수 yǔshuǐ - Rain Water
    if(thisMonth == 1 && thisDate >= 19) {
        document.body.style.backgroundImage = "url('images/2.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
    if(thisMonth == 2 && thisDate <= 5) {
        document.body.style.backgroundImage = "url('images/2.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

// March 6-march20: 驚蟄 경칩 jīngzhé - Awakening of Insects
    if(thisMonth == 2 && thisDate >= 6 && thisDate <= 20) {
        document.body.style.backgroundImage = "url('images/3.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

// March 21-apr 4: 春分 춘분 chūnfēn - Spring Equinox 
    if(thisMonth == 2 && thisDate >= 21) {
        document.body.style.backgroundImage = "url('images/4.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
    if(thisMonth == 3 && thisDate <= 4) {
        document.body.style.backgroundImage = "url('images/4.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

// Apr 5-apr 19: 清明 청명 qīngmíng - Pure Brightness
    if(thisMonth == 3 && thisDate >= 5 && thisDate <= 19) {
        document.body.style.backgroundImage = "url('images/5.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

// Apr 20-may 5: 穀雨 곡우 gǔyǔ - Grain Rain 
    if(thisMonth == 3 && thisDate >= 20) {
        document.body.style.backgroundImage = "url('images/6.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
    if(thisMonth == 4 && thisDate <= 5) {
        document.body.style.backgroundImage = "url('images/6.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

// May 6-may 20: 立夏 입하 lìxià - Beginning of Summer 
    if(thisMonth == 4 && thisDate >= 6 && thisDate <= 20) {
        document.body.style.backgroundImage = "url('images/7.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

// May 21-june 5: 小滿 소만 xiǎomǎn - Grain Buds
    if(thisMonth == 4 && thisDate >= 21) {
        document.body.style.backgroundImage = "url('images/8.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
    if(thisMonth == 5 && thisDate <= 5) {
        document.body.style.backgroundImage = "url('images/8.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

// June 6-june 20: 芒種 망종 mángzhòng - Grain in Ear
    if(thisMonth == 5 && thisDate >= 6 && thisDate <= 20) {
        document.body.style.backgroundImage = "url('images/9.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

// June 21-Jul 6: 夏至 하지 xiàzhì - Summer Solstice
    if(thisMonth == 5 && thisDate >= 21) {
        document.body.style.backgroundImage = "url('images/10.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
    if(thisMonth == 6 && thisDate <= 6) {
        document.body.style.backgroundImage = "url('images/10.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }


// Jul 7-jul 22: 小暑 소서 xiǎoshǔ - Minor Heat
    if(thisMonth == 6 && thisDate >= 7 && thisDate <= 22) {
        document.body.style.backgroundImage = "url('images/11.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

// Jul 23-aug 7: 大暑 대서 dàshǔ - Major heat
    if(thisMonth == 6 && thisDate >= 23) {
        document.body.style.backgroundImage = "url('images/12.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
    if(thisMonth == 7 && thisDate <= 7) {
        document.body.style.backgroundImage = "url('images/12.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

// Aug 8-aug 22: 立秋 입추 lìqiū - Beginning of Autumn
    if(thisMonth == 7 && thisDate >= 8 && thisDate <= 22) {
        document.body.style.backgroundImage = "url('images/13.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

// Aug 23-sep7: 處暑 처서 chǔshǔ - End of Heat
    if(thisMonth == 7 && thisDate >= 23) {
        document.body.style.backgroundImage = "url('images/14.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
    if(thisMonth == 8 && thisDate <= 7) {
        document.body.style.backgroundImage = "url('images/14.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

// Sep 8-sep22: 白露 백로 báilù - White Dew
    if(thisMonth == 8 && thisDate >= 8 && thisDate <= 22) {
        document.body.style.backgroundImage = "url('images/15.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

// Sep 23-oct7: 秋分 추분 qiūfēn - Autumn Equinox
    if(thisMonth == 8 && thisDate >= 23) {
        document.body.style.backgroundImage = "url('images/16.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
    if(thisMonth == 9 && thisDate <= 7) {
        document.body.style.backgroundImage = "url('images/16.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

// Oct 8-oct22: 寒露 한로 hánlù - Cold Dew
    if(thisMonth == 9 && thisDate >= 8 && thisDate <= 22) {
        document.body.style.backgroundImage = "url('images/17.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

// Oct 23-nov6: 霜降 상강 shuāngjiàng - Frost's Descent
    if(thisMonth == 9 && thisDate >= 23) {
        document.body.style.backgroundImage = "url('images/18.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
    if(thisMonth == 10 && thisDate <= 6) {
        document.body.style.backgroundImage = "url('images/18.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

// Nov 7-nov21: 立冬 입동 lìdōng - Beginning of Winter
    if(thisMonth == 10 && thisDate >= 7 && thisDate <= 21) {
        document.body.style.backgroundImage = "url('images/19.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

// Nov 22-dec6: 小雪 소설 xiǎoxuě - Minor Snow
    if(thisMonth == 10 && thisDate >= 22) {
        document.body.style.backgroundImage = "url('images/20.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
    if(thisMonth == 11 && thisDate <= 6) {
        document.body.style.backgroundImage = "url('images/20.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

// Dec 7-dec21: 大雪 대설 dàxuě - Major Snow
    if(thisMonth == 11 && thisDate >= 7 && thisDate <= 21) {
        document.body.style.backgroundImage = "url('images/21.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

// Dec 22-jan5: 冬至 동지 dōngzhì - Winter Solstice
    if(thisMonth == 11 && thisDate >= 22) {
        document.body.style.backgroundImage = "url('images/22.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
    if(thisMonth == 0 && thisDate <= 5) {
        document.body.style.backgroundImage = "url('images/22.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

// Jan 6-jan19: 小寒 소한 xiǎohán - Minor Cold
    if(thisMonth == 0 && thisDate >= 6 && thisDate <= 19) {
        document.body.style.backgroundImage = "url('images/23.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

// Jan 20-feb3: 大寒 대한 dàhán - Major Cold
    if(thisMonth == 0 && thisDate >= 20) {
        document.body.style.backgroundImage = "url('images/24.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
    if(thisMonth == 1 && thisDate <= 3) {
        document.body.style.backgroundImage = "url('images/24.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }

    


    //// TIME ////
    let thisHour = today.getHours();
    let thisMinute = today.getMinutes(); 
    let thisSecond = today.getSeconds();
    
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

    if(thisSecond < 10) {
        thisSecond = "0" + thisSecond;
      }
      
    timeElem.innerHTML = thisHour + ":" + thisMinute + ":" + thisSecond;
}
    
setInterval(updateTime, 1000)