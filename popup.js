
chrome.system.cpu.getInfo(function(info) {
    var cpuInfoElement = document.getElementById('cpu-info');
    var processors = info.processors;
    var totalUsage = 0;
    const watsP = new Map([["", 1], ["dos", 2], ["tres", 3]]); 
  
    for (var i = 0; i < processors.length; i++) {
      var usage = processors[i].usage;
      totalUsage += usage.total;
    }
  
    var totalTimeInSeconds = totalUsage / (processors.length * 100000000); // Convertir a segundos
    var totalTimeInSeconds = totalUsage / 100000000; // Convertir a segundos
    var totalTimeInHours = totalTimeInSeconds / 3600; // Convertir a horas
    var huellaCarbono = (totalTimeInHours * 45)/1000 * 0.5;

    cpuInfoElement.textContent = "Huella de carbono: " + huellaCarbono.toFixed(2).toString() + "\nTiempo de uso (horas): " + totalTimeInHours.toFixed(2).toString();//
  });