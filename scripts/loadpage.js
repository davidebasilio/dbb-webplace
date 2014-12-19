function loadPage(page, where) {
  if (page == "") {
    url = document.location.href
    parts = url.split("#")
    if (parts.length > 1)
      page = "pages/" + parts[parts.length - 1] + ".html"
  }
  if (page == "")
    page = "pages/home.html"

  var xmlhttp;
  if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  }
  else {// code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function() {
    var main = document.getElementById(where)
    var lmspan = document.getElementById("lastmod")
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      curpage = page
      main.innerHTML = xmlhttp.responseText;
      var lastmod = xmlhttp.getResponseHeader("Last-Modified");
      lmspan.innerHTML = "Last updated on " + lastmod
      var arr = main.getElementsByTagName('script')
      for (var n = 0; n < arr.length; n++) {
          eval(arr[n].innerHTML)
      }
    } else if (xmlhttp.status == 404) {
      // main.innerHTML = "No such page: " + page;
      // main.innerHTML = '<object type="text/html" data="pages/notfound.html"></object>'
      loadPage('pages/notfound.html', 'main')
    }
  }
  xmlhttp.open("GET", page, true)
  xmlhttp.send()
}

window.onpopstate = function () {return loadPage('', 'main')}

