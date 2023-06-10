function createInput() {
  return document.createElement('input')
}

var lineNumberIndex = 0

class Line {
  constructor() {
    this.number = lineNumberIndex += 1;
    this.input = createInput()
    this.attributes = 'class="h1"'

    document.body.appendChild(this.input)
    this.input.style.opacity = '0%'
  }
}

var loopers = []
setInterval(function(){
  loopers.forEach(function (v) {
    v()
    console.log(v);
  })
})


var editor = document.getElementById('editor')
var editorLine = [
    new Line()
  ]

editor.onclick = function(e) {
  var x = e.clientX,
    y = e.clientY;
  var totalLineHeightLength = lineNumberIndex * 12
  if (editorLine.length == 1) {
    editorLine[0].input.focus()
    var id = 'INPUT_ID' + Math.floor(Math.random() * 999);
    editor.innerHTML = '<p '+editorLine[0].attributes+' id="' + id + '">' + editorLine[0].input.value + '</p>'
    
    loopers.push(function (){
      document.getElementById(id).innerHTML = editorLine[0].input.value
    })
  }
}