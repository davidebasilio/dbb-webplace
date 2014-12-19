people = [
"Riccardo Cattaneo",
"John D. Kubiatowicz",
"Daniel Sanchez",
"Marco D. Santambrogio",
"Filippo Sironi",
"Donatella Sciuto"]

people_url = [
"http://www.riccardocattaneo.eu/",
"http://www.cs.berkeley.edu/~kubitron/",
"http://people.csail.mit.edu/sanchez/",
"http://home.dei.polimi.it/santambr/",
"http://scholar.google.com/citations?user=0LglGQQAAAAJ",
"http://home.deib.polimi.it/sciuto/"]

people_pic = [
"http://www.riccardocattaneo.eu/images/personal_photo.jpg",
"http://www.cs.berkeley.edu/~kubitron/kubi-quantum-reduced.jpg",
"http://people.csail.mit.edu/sanchez/daniel.jpg",
"img/people/santa.jpg",
"img/people/pippo.jpg",
"img/people/sciuto.jpg"]

people_data = [
"The original <i>Nostromo</i>",
"My host faculty at Berkeley ParLab",
"My host faculty at MIT CSAIL",
"My PhD advisor",
"Fellow guerrila coder",
"My PhD tutor"]

function genPeople() {
  var grid = document.getElementById("grid")
  grid.innerHTML = "";
  for (var i = 0; i < pages.length; i++) {
    grid.innerHTML += '\
<a href="' + people_url[i] + '">\
<span class="gpeople">\
<span class="h2_">' + people[i] + '</span><br />\
<span class="peoplepic">\
<img alt="' + people[i] + '" src="' + people_pic[i] + '" />\
</span><br />\
<span class="si">' + people_data[i] + '</span>\
</span></a>'
  }
}

