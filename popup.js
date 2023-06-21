
chrome.system.cpu.getInfo(function(info) {
    var cpuInfoElement = document.getElementById('cpu-info');
    var processors = info.processors;
    var modelName = info.modelName;
    var totalUsage = 0;
    const watsP = new Map([["Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz", 45], ["AMD Ryzen 7 3750H with Radeon Vega Mobile Gfx  ", 35], ["AMD Ryzen 5 3450U with Radeon Vega Mobile Gfx  ", 15]]); 
    const num = watsP.has(modelName) ? watsP.get(modelName) : 30;

    for (var i = 0; i < processors.length; i++) {
      var usage = processors[i].usage;
      totalUsage += usage.total;
    }
  
    var totalTimeInSeconds = totalUsage / (processors.length * 100000000); // Convertir a segundos
    var totalTimeInSeconds = totalUsage / 100000000; // Convertir a segundos
    var totalTimeInHours = totalTimeInSeconds / 3600; // Convertir a horas
    var huellaCarbono = (totalTimeInHours * num)/1000 * 0.5;
    const mensaje = huellaCarbono > 0.8 ? "Consumo excesivo de energía, gestionar el uso del equipo\n (se recomienda suspender su uso)" 
                    : huellaCarbono < 0.2 ? "Consumo bajo de energía, sin riesgos" 
                    : "Consumo medio de energía, se recomienda ajustar la \nconfiguración de energía";

    cpuInfoElement.textContent = "Procesador: " + modelName.toString() + 
    "\nTiempo de uso (horas): " + totalTimeInHours.toFixed(2).toString() +
    "\nHuella de carbono (kg CO2): " + huellaCarbono.toFixed(2).toString() +
    "\n\n" + mensaje;
  });