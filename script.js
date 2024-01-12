document.addEventListener("DOMContentLoaded", function () {
    var tablinks = document.querySelectorAll(".tab-links");
    var tabcontents = document.querySelectorAll(".tab-contents");

    function opentab(tabname) {
        for (var i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active-link");
        }
        for (var i = 0; i < tabcontents.length; i++) {
            tabcontents[i].classList.remove("active-tab");
        }

        var index = Array.from(tablinks).findIndex(function (tab) {
            return tab.textContent.trim().toLowerCase() === tabname.toLowerCase();
        });

        if (index !== -1) {
            tablinks[index].classList.add("active-link");
            tabcontents[index].classList.add("active-tab");
        }
    }

    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener("click", function (event) {
            var tabName = event.target.textContent.trim().toLowerCase();
            opentab(tabName);
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var sidemenu = document.getElementById("sidemenu");
  
    function openmenu() {
      sidemenu.style.right = "0";
      document.querySelector(".fa-bars").style.display = "none";
      document.querySelector(".fa-xmark").style.display = "block";
    }
  
    function closemenu() {
      sidemenu.style.right = "-200px";
      document.querySelector(".fa-bars").style.display = "block";
      document.querySelector(".fa-xmark").style.display = "none";
    }
  
    window.openmenu = openmenu;
    window.closemenu = closemenu;
  });