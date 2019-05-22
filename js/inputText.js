function inputText(el, text, etype){
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
    el.value = text;
  }
  
  module.exports = { inputText }