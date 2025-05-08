import read from './tools/reader';
import json from './tools/parser';

/**
 * Загрузчик игровой сохранения
 * @static
 */
export default class GameSavingLoader {
  /**
   * Загружает игровое сохранение
   * 
   * @static
   * 
   * @param {string} data - данные игрового сохранения
   * 
   * @return {object} - объект игрового сохранения в формате 
   */
  static load(data = '') {
    return read(data)
      .then((result) => json(result))
      .then((jsonString) => JSON.parse(jsonString));
  }
}
