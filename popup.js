chrome.system.cpu.getInfo(function(info) {
    var cpuInfoElement = document.getElementById('cpu-info');
    
    var archName = info.archName;
    var modelName = info.modelName;
    var totalSum = 0;
    for (var i = 0; i < info.processors.length; i++) {
        totalSum += info.processors[i].usage.total;
    }


    // Mostrar solo los dos elementos específicos en el elemento 'cpu-info'
    var cpuInfo = {
      archName: archName,
      modelName: modelName,
      totalSum: totalSum
    };

    cpuInfoElement.textContent = JSON.stringify(cpuInfo, null, 2);
  });