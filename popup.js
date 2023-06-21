
chrome.system.cpu.getInfo(function(info) {
    var cpuInfoElement = document.getElementById('cpu-info');
    var processors = info.processors;
    var modelName = info.modelName;
    var totalUsage = 0;
    const watsP = new Map([["Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz", 45], ["AMD Ryzen 7 3750H with Radeon Vega Mobile Gfx", 35], ["AMD Ryzen 5 3450U with Radeon Vega Mobile Gfx", 15]]); 
    const num = watsP.has(modelName) ? watsP.get(modelName) : 0;

    for (var i = 0; i < processors.length; i++) {
      var usage = processors[i].usage;
      totalUsage += usage.total;
    }
  
    var totalTimeInSeconds = totalUsage / (processors.length * 100000000); // Convertir a segundos
    var totalTimeInSeconds = totalUsage / 100000000; // Convertir a segundos
    var totalTimeInHours = totalTimeInSeconds / 3600; // Convertir a horas
    var huellaCarbono = (totalTimeInHours * num)/1000 * 0.5;

    cpuInfoElement.textContent = "Huella de carbono: " + huellaCarbono.toFixed(2).toString() + 
    "\nTiempo de uso (horas): " + totalTimeInHours.toFixed(2).toString() +
    "\nProcesador: " + modelName.toString() +
    "\nConsumo procesador (W): " + num.toString();//
  });