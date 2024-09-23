const liveDateEl = document.getElementById("live-date");

const mainBalance = document.getElementById("main-balance");

const buttonHistory = document.getElementById("show-history-btn");
const buttonDonate = document.getElementById("show-donate-btn");


const modalInfoEl = document.getElementById('my_modal_5');


const historyInfoEl = document.getElementById('history-checked-box');


const donatePlace = document.getElementById('donate-title-1');
const donatePlace2 = document.getElementById('donate-title-2');
const donatePlace3 = document.getElementById('donate-title-3');



const donateBox = document.getElementById('donate-box-1');
const donateBox2 = document.getElementById('donate-box-2');
const donateBox3 = document.getElementById('donate-box-3');




const liveDate =document.getElementById("live-date"); 

document.getElementById("blog-file-btn").addEventListener("click", function () {
  window.location.href = "blog.html";
});

  

document.querySelectorAll(".donate-btn").forEach(function (button, index) {
  button.addEventListener("click", function () {
    const donateInputEl = document.querySelectorAll(".donate-input")[index];
    const donateBalanceEl = document.querySelectorAll(".balance-value")[index];
    const donateNum = donateInputEl.value;
    const balance = mainBalance.innerText;
    if (donateNum > 0 && balance > 0) {
      let currentMainBalance = parseFloat(balance);
      let currentCardBalance = parseFloat(donateBalanceEl.innerText);
      
      let isValid = currentMainBalance - parseFloat(donateNum);

      if (isValid >= 0) {
        donateBalanceEl.innerText = currentCardBalance + parseFloat(donateNum);
        mainBalance.innerText = currentMainBalance - parseFloat(donateNum);
        donateInputEl.value = "";
        modalInfoEl.showModal();
   
          historyInfoEl.innerHTML += ` <li class="  flex justify-center items-center font-semibold text-lg p-4">
            <span>${donateNum}</span>
          <span>Taka is </span>
          <span>${donatePlace.innerText}</span>

          </li>
          `

          historyInfoEl.innerHTML += ` <li class=" flex justify-center items-center font-semibold text-lg p-2">
          
           <div>
            <span>Date:</span>
          <span>${liveDate.innerText}</span>
           <span>(Bangladesh Standard Time)</span>
          </div>

          </li>`
    

      } 
       else {
       
        alert("invalid main balance!");
      }
   

  
    

    } else {
     
      alert("Invalid donation !");
    }
   
  });
});

//show the history  form
document
  .getElementById("show-history-btn")
  .addEventListener("click", function () {
    //show history button clicked
    buttonHistory.classList.add("bg-green-400");
    buttonHistory.classList.add("text-black");

    //remove donate button bg attributes
    buttonDonate.classList.remove("bg-green-400");
    buttonDonate.classList.remove("text-black");

    document.getElementById("history-checked-box").classList.remove("hidden");

    // hide the donate form
    document.getElementById("card-parent-container").classList.add("hidden");
  });

//show the donation form and hide the history form

document

  .getElementById("show-donate-btn")
  .addEventListener("click", function () {
    //remove  history button clicked
    buttonHistory.classList.remove("bg-green-400");
    buttonHistory.classList.remove("text-black");

    //show donate buttone clicked
    buttonDonate.classList.add("bg-green-400");
    buttonDonate.classList.add("text-black");

    document.getElementById("card-parent-container").classList.remove("hidden");

    //hide the history form
    document.getElementById("history-checked-box").classList.add("hidden");
  });

// date and time after submitting donation
const now = new Date();
const options = {
  timeZone: "Asia/Dhaka", // Specify your desired timezone
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "short",
};

const formattedTime = now.toLocaleString("en-US", options);

liveDateEl.textContent = formattedTime;



// font-family lexend ;
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
};
