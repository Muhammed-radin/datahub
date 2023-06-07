var _alerting = false
var _alertData = []
var _alertIndex = 0

function alert(head = 'Untitled', msg = '') {
  var _id = 'ALERT_ID_' + Math.floor(Math.random() * 99999)
  var html = `
  <div class="block-div bg-ogrey" id="${_id}_BLOCK"></div>
  <div class="alert-modal" id="${_id}">
    <div class="alert-head">${head}</div>
    <div class="alert-body">${msg}</div>
    <button class="alert-right" onclick="document.getElementById('${_id}').remove();document.getElementById('${_id}_BLOCK').remove();_alerting = false;resolveAlert()">CONTINUE</button>
  </div>`



  if (_alerting) {
    _alertData.push({
      head: head,
      msg: msg
    })
  } else {
    document.body.innerHTML += (html)
    document.getElementById(_id+'_BLOCK').style.display = 'block';
    _alerting = true
  }

}

function resolveAlert() {
  if (_alertData.length != 0 && _alertData.length != _alertIndex) {
    alert(_alertData[_alertIndex].head, _alertData[_alertIndex].msg)
    _alertIndex += 1
  }
}
