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

  element.querySelector('bs-result')?.remove();
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

  // Identifikácia modelu
  const modelInfo = identifyModel(value);

  // Vytvorenie alebo aktualizácia výsledku
  const oldResultEl = element.querySelector('bs-result');

  if (oldResultEl) {
    oldResultEl.setAttribute('value', value);
    oldResultEl.setAttribute('model', modelInfo);
  } else {
    const newResultEl = document.createElement('bs-result');
    newResultEl.setAttribute('value', value);
    newResultEl.setAttribute('model', modelInfo);
    newResultEl.setAttribute('role', 'alert');
    newResultEl.setAttribute('aria-live', 'assertive');
    newResultEl.setAttribute('aria-atomic', 'true');
    element.appendChild(newResultEl);
  }

  // Zobrazenie modelu pod výsledkom
  const modelElement = document.createElement('p');
  modelElement.textContent = modelInfo;
  element.appendChild(modelElement);
}
