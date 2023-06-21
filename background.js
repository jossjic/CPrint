chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.system.cpu.getInfo(function(info) {
      console.log(info);
    });
  });