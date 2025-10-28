// navlinks, active member effect changer
{
 const homelogo = document.getElementById('navlinks-homelogo');
const projectlogo = document.getElementById('navlinks-projects');
const skilllogo = document.getElementById('navlinks-skills');
const contact = document.getElementById('navlinks-contact');

const navItems = [homelogo, projectlogo, skilllogo, contact];

navItems.forEach(item => {
  item.classList.remove('activelink');
  item.classList.add('nonactivelink');
});

homelogo.classList.replace('nonactivelink', 'activelink');

navItems.forEach(clickedItem => {
  clickedItem.onclick = () => {
    navItems.forEach(item => {
      item.classList.remove('activelink');
      item.classList.add('nonactivelink');
    });
    clickedItem.classList.add('activelink');
    clickedItem.classList.remove('nonactivelink');
  };
});


}

// container1, all functions
{
  // let BoxSwitcher_counter = 1;
  // let PrevBoxSwitcher_counter = 0;
  // const boxes = document.querySelectorAll(".boxes");
  
  // boxes[0].classList.add("activeBOX");

  // function BoxSwitcher() {
  //   boxes[BoxSwitcher_counter].classList.add("activeBOX");
  //   boxes[PrevBoxSwitcher_counter].classList.remove("activeBOX");

  //   PrevBoxSwitcher_counter = BoxSwitcher_counter;

  //   BoxSwitcher_counter = (BoxSwitcher_counter + 1) % boxes.length;
  // }

  // setInterval(BoxSwitcher, 5000);
}


// container2, functions
{
  
}