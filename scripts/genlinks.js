var pages = [
"about",
"science",
"teaching",
"people",
"images",
"words"]

function genHeadline() {
  document.write('<a href="#home" onclick="return loadPage(\'pages/home.html\', \'main\');"><span>home</span></a>')
  for (var i = 0; i < pages.length; i++) {
    page = pages[i]
    document.write('<a href="#' + page + '" onclick="return loadPage(\'pages/' + page + '.html\', \'main\');"><span>' + page + '</span></a>')
  }
}

var sec_pic = [
"dbb_seasideboulder.jpg",
"publications.png",
"blackboard.png",
"people_b.gif",
"images.jpg",
"words.png"]

var sec_data = [
"Information about me, bio, CV, ...",
"Research and scientific publications",
"Academic courses, tutoring, advising, ...",
"My own social network",
"Snapshots of the world as I see it",
"Random bloggish ramblings"]

function genPageFrames() {
  var grid = document.getElementById("grid")
  grid.innerHTML = "";
  for (var i = 0; i < pages.length; i++) {
    grid.innerHTML += '\
<a href="#' + pages[i] + '"\
onclick="return loadPage(\'pages/' + pages[i] + '.html\', \'main\');">\
<span class="gsec">\
<span class="h2_">' + pages[i] + '</span><br />\
<span class="secpic">\
<img alt="' + sec_pic[i] + '" src="img/' + sec_pic[i] + '" />\
</span><br />\
<span class="si"> ' + sec_data[i] + '</span>\
</span></a>';
  }
}

