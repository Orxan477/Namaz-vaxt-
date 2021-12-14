var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


const d= new Date();
    let day=(d.getDate());
   let month=(d.getMonth()+1);
   let year=(d.getFullYear());
   getData(day,month,year);
   currentData=document.querySelector(".current").innerHTML=d;
   
date=document.querySelector("#date");
button=document.querySelector(".btn");
button.onclick=function () {
   const d= new Date(date.value);
   let day=(d.getDate());
   let month=(d.getMonth()+1);
   let year=(d.getFullYear());
   getData(day,month,year);
}


async function getData(day,month,year){
let dateData= await fetch(`https://api.aladhan.com/v1/calendar?latitude=40&longitude=49&method=2&month=${month}&year=${year}`);
let timeNamaz= await dateData.json();
document.querySelector(".table").lastElementChild.innerHTML='';
fillTable(timeNamaz,day);
}



function fillTable(timeNamaz,day){
    document.querySelector(".table").classList.remove("d-none")
    i=day-1;
    let tr=`<tr>
                 <td>Imsak</td>
                 <td>${timeNamaz.data[i].timings.Imsak}</td>
            </tr>
            <tr>
                 <td>Fajr</td>
                 <td>@${timeNamaz.data[i].timings.Fajr}</td>
            </tr>
            <tr>
                <td>Sunrise</td>
                <td>@${timeNamaz.data[i].timings.Sunrise}</td>
            </tr>
            <tr>
                <td>Dhuhr</td>
                <td>@${timeNamaz.data[i].timings.Dhuhr}</td>
            </tr>
            <tr>
                <td>Asr</td>
                <td>@${timeNamaz.data[i].timings.Asr}</td>
            </tr>
            <tr>
                <td>Sunset</td>
                <td>@${timeNamaz.data[i].timings.Sunset}</td>
            </tr>
            <tr>
                <td>Maghrib</td>
                <td>@${timeNamaz.data[i].timings.Maghrib}</td>
            </tr>
            <tr>
                <td>Isha</td>
                <td>@${timeNamaz.data[i].timings.Isha}</td>
            </tr>
            <tr>
                <td>Midnight</td>
                <td>@${timeNamaz.data[i].timings.Midnight}</td>
            </tr>
       `

document.querySelector(".table").lastElementChild.innerHTML=tr;
}