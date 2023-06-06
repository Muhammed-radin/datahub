function connectCommonScript(fileName){
  var script = document.createElement('script')
  script.src = '../view/'+fileName+'.js'
  document.body.appendChild(script)
}

connectCommonScript('alert')