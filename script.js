var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');

window.onclick = function(event) {
  if (event.target == modal)
  {
    modal.style.display = "none";
  }else if (event.target == modal2)
  {
    modal2.style.display = "none";
  }else if (event.target == mySidenav) {
    document.getElementById("mySidenav").style.width = "0";
  }
}


function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
