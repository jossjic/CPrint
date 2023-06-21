
/*chrome.system.cpu.getInfo(function(info) {
    var cpuInfoElement = document.getElementById('cpu-info');
    
    var archName = info.archName;
    var modelName = info.modelName;
    var totalSum = 0;
    for (var i = 0; i < info.processors.length; i++) {
        totalSum += info.processors[i].usage.total;
    }

    //cpuInfoElement.textContent = JSON.stringify(info, null, 2);
    // Mostrar solo los dos elementos específicos en el elemento 'cpu-info'

    var cpuInfo = {
      archName: archName,
      modelName: modelName,
      totalSum: totalSum
    };

    //cpuInfoElement.textContent = JSON.stringify(cpuInfo, null, 2);
    //cpuInfoElement.textContent = totalSum.toString();
});
*/

chrome.system.cpu.getInfo(function(info) {
    var cpuInfoElement = document.getElementById('cpu-info');

    var processors = info.processors;
    var totalUsage = 0;
  
    for (var i = 0; i < processors.length; i++) {
      var usage = processors[i].usage;
      totalUsage += usage.total;
    }
  
    var totalTimeInSeconds = totalUsage / (processors.length * 100000000); // Convertir a segundos
    var totalTimeInSeconds = totalUsage / 100000000; // Convertir a segundos
  var totalTimeInHours = totalTimeInSeconds / 3600; // Convertir a horas

    cpuInfoElement.textContent = totalTimeInHours.toString();// Imprimir el tiempo de uso del procesador en segundos
  });