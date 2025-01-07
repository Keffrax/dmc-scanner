// CSS kód vložený priamo do JavaScriptu
const styles = /* css */ `
  .model-info-container {
    margin-top: 10px;
    font-family: Arial, sans-serif;
  }

  .result_item {
    font-size: 15px;
  }

  .model-info {
    margin-bottom: 5px;
    padding: 5px;
    font-size: 14px;
    background-color: #343a40;
    border: 1px solid #ddd;
    border-radius: 4px;
    text-align: center;
    color: #fff; /* Štandardná farba textu */
  }

  .model-info.unknown {
    color: #ff4d4f; /* Červená farba pre neznámy model */
  }

  .model-info.zgs-unknown {
    color: #ff4d4f; /* Červená farba pre neznámy ZGS Stand */
  }

  .model-info.q-unknown {
    color: #ff4d4f; /* Červená farba pre neznámy Q-Stand */
  }

  .model-info strong {
    font-weight: bold;
  }
`;

// Dynamické vloženie CSS do dokumentu
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// Importovanie funkcie na identifikáciu modelu
import { identifyModel } from './validate.js';

/**
 * Removes the scanned result from the element where it is shown.
 *
 * @param {HTMLElement} element - The element to remove the result from.
 */
export function hideResult(element) {
  if (!element) {
    return;
  }

  // Odstráni element <bs-result>
  element.querySelector('bs-result')?.remove();

  // Odstráni všetky <div> elementy (model info)
  element.querySelectorAll('.model-info').forEach(p => p.remove());
}

/**
 * Creates and shows the scanned result inside the given element,
 * including the model identification.
 *
 * @param {HTMLElement} element - The element to show the result in.
 * @param {string} value - The value to create the result with.
 */
export async function showResult(element, value) {
  if (!element || !value) {
    return;
  }

  // Skrytie predchádzajúceho výsledku
  hideResult(element);

  // Identifikácia modelu
  const modelInfo = identifyModel(value);

  // Vytvorenie nového výsledku
  const newResultEl = document.createElement('bs-result');
  newResultEl.setAttribute('value', value);
  newResultEl.setAttribute('model', modelInfo);
  newResultEl.setAttribute('role', 'alert');
  newResultEl.setAttribute('aria-live', 'assertive');
  newResultEl.setAttribute('aria-atomic', 'true');
  element.appendChild(newResultEl);

  // Vytvorenie kontajnera pre model informácie
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('model-info-container');

  // Rozdelenie model info na jednotlivé riadky
  const infoLines = modelInfo.split('\n').filter(line => line.trim() !== ''); // Odstráni prázdne riadky
  infoLines.forEach(line => {
    const lineElement = document.createElement('div');
    lineElement.classList.add('model-info');

    // Ak je riadok "Neznámy model", "Neznámy rok", "Neznámy deň", "Neznámy kód výrobcu", "Neznámy ZGS Stand" alebo "Neznámy Q-Stand", pridáme špeciálnu triedu pre červenú farbu
    if (
      line.includes('Neznámy model') ||
      line.includes('Neznámy rok') ||
      line.includes('Neznámy deň') ||
      line.includes('Neznáma línia') ||
      line.includes('Neznámy kód výrobcu') ||
      line.includes('Neznámy ZGS Stand') ||
      line.includes('Neznámy Q-Stand')
    ) {
      lineElement.classList.add('unknown');
    }

    lineElement.textContent = line;
    infoContainer.appendChild(lineElement);
  });

  // Pridanie informácií do hlavného elementu
  element.appendChild(infoContainer);
}
