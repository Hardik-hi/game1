level = 1;
function restart(option) {
  level = 0;
}

function play(choice) {
  var peg,
    flag = 0;

  peg = Math.ceil(Math.random() * 3);

  if (choice == peg) flag = 2;
  else if (choice == 1) {
    if (peg == 2) flag = 0;
    else if (peg == 3) flag = 1;
  } else if (choice == 2) {
    if (peg == 3) flag = 0;
    else if (peg == 1) flag = 1;
  } else if (choice == 3) {
    if (peg == 1) flag = 0;
    else if (peg == 2) flag = 1;
  }
  switch (peg) {
    case 1:
      document.getElementById("oppo").innerHTML = "Opponent has got a STONE.";
      break;

    case 2:
      document.getElementById("oppo").innerHTML = "Opponent has got a PAPER.";
      break;

    case 3:
      document.getElementById("oppo").innerHTML = "Opponent has got a SCISSOR.";
      break;
  }
  switch (flag) {
    case 1:
	  document.getElementById("result").innerHTML = "YOU WIN!";
	  document.getElementById("result").style.color = "#addfad";
      break;

    case 2:
	  document.getElementById("result").innerHTML = "IT'S A DRAW!";
	  document.getElementById("result").style.color = "black";
      break;

    case 0:
	  document.getElementById("result").innerHTML = "YOU LOSE!";
	  document.getElementById("result").style.color = "#f88379";
      break;
  }
}
