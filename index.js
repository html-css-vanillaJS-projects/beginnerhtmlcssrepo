const imgcontainer = document.getElementById("container");
count = 3;

function onPress(e) {


  if (count >= -1 && count <= 3) {
    if (e.target.innerHTML.includes("previous")) {
      imgcontainer.children[count - 1].style.transition = "opacity 1s ease-in-out";
      imgcontainer.children[count - 1].style.display = "none";
    } else {
      imgcontainer.children[count].style.transition = "all 1.0s ease-in-out";
      imgcontainer.children[count].style.display = "grid";
    }

  }

  if (e.target.innerHTML.includes("previous")) {
    count = count - 1;
  } else {
    count = count + 1;
  }

  if (count > 2) {

    count = 3;
  }

  if (count < 0) {
    count = 0;

  }





}