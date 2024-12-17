// Knižnica modelov s označením modelu a názvom
const modelLibrary = {
  16540703132: 'M306',
  16560701332: 'M307',
  16540701732: 'M308',
  16540703032: 'M309',
  16560702432: 'M310',
  16540703632: 'M311',
  16540704332: 'M312',
  16540706601: 'M313',
  16560701532: 'M334',
  16540700903: 'M423',
  '5E131552E': 'M333',
  '4M0201994BE': 'M400'
};

// Funkcia na rozpoznanie modelu a analýzu DMC obsahu
export function identifyModel(dmcContent) {
  let result = '';

  // Identifikácia modelu M333
  if (dmcContent.includes('PWS130721000001')) {
    const modelCode = dmcContent.substring(dmcContent.length - 9); // "5E131552E"
    const modelName = modelLibrary[modelCode] || 'Neznámy model';
    result += `Model: ${modelName}\n`;
  }
  // Identifikácia modelu M400
  else if (dmcContent.includes('#4M')) {
    const modelCode = dmcContent.replace(/[^A-Za-z0-9]/g, ''); // Odstránenie nealfanumerických znakov
    const modelName = modelLibrary[modelCode] || 'Neznámy model';
    result += `Model: ${modelName}\n`;
  }
  // Identifikácia ostatných modelov (10 číslic po prvom znaku)
  else {
    const modelCode = dmcContent.substring(0, 11);
    const modelName = modelLibrary[modelCode] || 'Neznámy model';
    result += `Model: ${modelName}\n`;
  }

  // Analýza ďalších častí DMC kódu podľa špecifikácie
  const year = dmcContent.substring(11, 13); // Rok produkcie (napr. 22)
  const dayOfYear = dmcContent.substring(13, 16); // Deň v roku (napr. 026)
  const serialNumber = dmcContent.substring(16, 21); // Poradové číslo kusu (napr. 00532)
  const manufacturerCode = dmcContent.substring(21, 23); // Kód výrobcu (napr. 20)
  const zgsStand = dmcContent.substring(23, 26); // ZGS stand (napr. 006)
  const qStand = dmcContent.substring(26, 29); // Q-stand (napr. 003)

  result += `Rok produkcie: 20${year}\n`;
  result += `Deň v roku výroby: ${dayOfYear}\n`;
  result += `Poradové číslo kusu: ${serialNumber}\n`;
  result += `Kód výrobcu: ${manufacturerCode}\n`;
  result += `ZGS stand: ${zgsStand}\n`;
  result += `Q-stand: ${qStand}\n`;

  return result;
}
