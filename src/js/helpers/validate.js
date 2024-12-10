// Knižnica modelov s označením modelu a názvom
const modelLibrary = {
  6540703132: 'Model M306',
  6560701332: 'Model M307',
  1876545321: 'Model M202',
  5678901234: 'Model M404',
  6789012345: 'Model M505',
  2345678901: 'Model M606',
  3456789012: 'Model M707',
  4567890123: 'Model M808',
  7890123456: 'Model M909',
  8901234567: 'Model M010'
};

// Funkcia na rozpoznanie modelu zo skenovaného DMC kódu
export function identifyModel(dmcContent) {
  const modelRegex = /(\d{10})/;
  const match = dmcContent.match(modelRegex);

  if (match) {
    const modelCode = match[1];
    return modelLibrary[modelCode] || 'Neznámy model';
  }
  return 'Označenie modelu nebolo nájdené.';
}
