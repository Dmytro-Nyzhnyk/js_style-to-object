'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayProperties = sourceString.split(';');

  const checkedArr = arrayProperties.filter((value) => /[a-zA-Z]/.test(value));

  const obj = {};

  for (let i = 0; i < checkedArr.length; i++) {
    const valueArr = checkedArr[i].split(':');

    const keyObj = valueArr[0].trim();
    const valueObj = valueArr[1].trim();

    obj[keyObj] = valueObj;
  }

  return obj;
}

module.exports = convertToObject;
