var toolbarOptions = [

  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }], // custom button values
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }], // superscript/subscript
  [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
  [{ 'direction': 'rtl' }], // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['link', 'clean'] // remove formatting button
];


var quill = new Quill('#editor', {
  modules: {
    syntax: true,
    toolbar: toolbarOptions,
    /*{
      container: document.getElementById('toolbar'), 
    }*/
  },
  theme: 'snow'
});



setInterval(function() {
  hljs.highlightAll();
})

var swaper = document.getElementById('swaper')

var swap = false
swaper.onclick = function() {
  if (swap == false) {
    document.querySelector('.ql-toolbar').style.display = 'none'
    swap = true
  } else {
    document.querySelector('.ql-toolbar').style.display = ''
    swap = false
  }
}