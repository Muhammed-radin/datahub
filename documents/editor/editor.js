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

hljs.configure({
  // optionally configure hljs 
  languages: ['javascript', 'html', 'ruby', 'python', 'css', 'scss', 'java', 'shell', 'text']
});

var params = location.search.replace('?', '');
var paramsString = '{"' + params.replaceAll("&", '","').replaceAll('=', '":"') + '"}';
if (params == '') {} else {
  var objectParams = JSON.parse(paramsString);
  objectParams = objectParams

}

var isRead = objectParams == undefined ? false : (objectParams.read ? objectParams.read : false);

var quill = new Quill('#editor', {
  modules: {
    syntax: true,
    toolbar: toolbarOptions,
    /*{
      container: document.getElementById('toolbar'), 
    }*/
  },
  theme: 'snow',
  readOnly: isRead
});

document.querySelector('.ql-toolbar') ? document.querySelector('.ql-toolbar').style.display = isRead ? 'none' : 'block' : null;
objectParams ? quill.root.innerHTML = decodeURI(objectParams.delta) : 0
objectParams ? document.getElementById('titleInput').value = decodeURI(objectParams.title) : 0


setInterval(function() {
  hljs.highlightAll();
  if (history.pushState) {
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?delta=' + quill.root.innerHTML + '&read=false&title=' + document.getElementById('titleInput').value;
    window.history.pushState({ path: newurl }, '', newurl);
  }
  //location.search = 'delta=' + JSON.stringify(quill.getContents())
}, 100)

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