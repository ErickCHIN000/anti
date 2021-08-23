let count;

function con(){
  console.log(Cookies.get());
}

function save() {
  Cookies.set('count', count);
  display_anti();
}
  
function load(){
  count = Cookies.get('count');
  display_anti();
}

function clear(){
  //Cookies.remove('count');
  Cookies.remove('count', { path: '' })
  display_anti();
}

function display_anti(){
  document.getElementById("count").innerHTML = "Count: " + count;
}
