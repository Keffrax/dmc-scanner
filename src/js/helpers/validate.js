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

// Knižnica ZGS Stand pre jednotlivé modely
const zgsLibrary = {
  M306: '006',
  M307: '004',
  M308: '004',
  M311: '004',
  M313: '004',
  M309: '005',
  M310: '002',
  M423: '002',
  M312: '003',
  M334: '003'
};

// Knižnica Q Stand pre jednotlivé modely
const qStandLibrary = {
  M306: '003',
  M307: '003',
  M308: '003',
  M309: '003',
  M310: '001',
  M311: '001',
  M312: '001',
  M313: '001',
  M334: '001',
  M423: '001'
};

// Funkcia na rozpoznanie modelu a analýzu DMC obsahu
export function identifyModel(dmcContent) {
  let result = '';

  // Identifikácia modelu M333
  let modelName = '';
  if (dmcContent.includes('PWS130721000001')) {
    const modelCode = dmcContent.substring(dmcContent.length - 9); // "5E131552E"
    modelName = modelLibrary[modelCode] || 'Neznámy model';
    result += `Model: ${modelName}\n`;
  }
  // Identifikácia modelu M400
  else if (dmcContent.includes('#4M')) {
    const modelCode = dmcContent.replace(/[^A-Za-z0-9]/g, ''); // Odstránenie nealfanumerických znakov
    modelName = modelLibrary[modelCode] || 'Neznámy model';
    result += `Model: ${modelName}\n`;
  }
  // Identifikácia ostatných modelov (10 číslic po prvom znaku)
  else {
    const modelCode = dmcContent.substring(0, 11);
    modelName = modelLibrary[modelCode] || 'Neznámy model';
    result += `Model: ${modelName}\n`;
  }

  // Analýza ďalších častí DMC kódu podľa špecifikácie
  const year = dmcContent.substring(11, 13); // Rok produkcie (napr. 22)
  const dayOfYear = dmcContent.substring(13, 16); // Deň v roku (napr. 026)
  const serialNumber = dmcContent.substring(16, 21); // Poradové číslo kusu (napr. 00532)
  const line = dmcContent.substring(21, 22); // Línia (napr. 2)
  const manufacturerCode = dmcContent.substring(22, 24); // Kód výrobcu (napr. 20)
  const zgsStand = dmcContent.substring(24, 27); // ZGS stand (napr. 006)
  const qStand = dmcContent.substring(27, 30); // Q-stand (napr. 003)
  const freePositions = dmcContent.substring(30, 36); // Voľné pozície (napr. 000000)

  // Kontrola roku produkcie
  const fullYear = `20${year}`;
  if (fullYear === '2026') {
    result += `Rok produkcie: ${fullYear}\n`;
  } else {
    result += `Rok produkcie: Neznámy rok (${fullYear})\n`;
  }

  // Kontrola platnosti dňa v roku
  const dayOfYearInt = parseInt(dayOfYear, 10);
  if (dayOfYearInt < 1 || dayOfYearInt > 365) {
    result += `Deň v roku: Neznámy deň (${dayOfYear})\n`;
  } else {
    result += `Deň v roku výroby: ${dayOfYear}\n`;
  }

  // Kontrola Poradového čísla kusu
  if (/^\d{5}$/.test(serialNumber)) {
    result += `Poradové číslo kusu: ${serialNumber}\n`;
  } else {
    result += `Poradové číslo kusu: Neznáme poradové číslo (${serialNumber})\n`;
  }

  // Kontrola Línií
  if (line === '0') {
    result += `Línia: ${line}\n`;
  } else {
    result += `Línia: Neznáma línia (${line})\n`;
  }

  // Kontrola Kódu výrobcu
  if (manufacturerCode === '20') {
    result += `Kód výrobcu: ${manufacturerCode}\n`;
  } else {
    result += `Kód výrobcu: Neznámy kód výrobcu (${manufacturerCode})\n`;
  }

  // Kontrola ZGS Stand
  const correctZgsStand = zgsLibrary[modelName] || 'Neznámy ZGS Stand';
  if (zgsStand === correctZgsStand) {
    result += `ZGS stand: ${zgsStand}\n`;
  } else {
    result += `ZGS stand: Neznámy ZGS Stand (${zgsStand})\n`;
  }

  // Kontrola Q Stand
  const correctQStand = qStandLibrary[modelName] || 'Neznámy Q-Stand';
  if (qStand === correctQStand) {
    result += `Q-stand: ${qStand}\n`;
  } else {
    result += `Q-stand: Neznámy Q-Stand (${qStand})\n`;
  }

  // Kontrola Voľných pozícií
  if (freePositions === '000000') {
    result += `Voľné pozície: ${freePositions}\n`;
  } else {
    result += `Voľné pozície: Neznáme voľné pozície (${freePositions})\n`;
  }

  return result;
}
