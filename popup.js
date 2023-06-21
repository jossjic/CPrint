chrome.system.cpu.getInfo(function(info) {
    var cpuInfoElement = document.getElementById('cpu-info');
    cpuInfoElement.textContent = JSON.stringify(info, null, 2);
  });

