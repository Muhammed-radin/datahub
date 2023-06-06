var _alerting = false
var _alertData = []
var _alertIndex = 0

function alert(head, msg) {
  var _id = 'ALERT_ID_' + Math.floor(Math.random() * 99999)
  var html = `<div class="alert-modal" id="${_id}">
    <div class="alert-head">${head}</div>
    <div class="alert-body">${msg}</div>
    <button class="alert-right" onclick="document.getElementById('${_id}').remove();_alerting = false;resolveAlert()">CONTINUE</button>
  </div>`



  if (_alerting) {
    _alertData.push({
      head: head,
      msg: msg
    })
  } else {
    document.body.innerHTML += (html)
    _alerting = true
  }

}

function resolveAlert() {
  if (_alertData.length != 0 && _alertData.length != _alertIndex) {
    alert(_alertData[_alertIndex].head, _alertData[_alertIndex].msg)
    _alertIndex += 1
  }
}
