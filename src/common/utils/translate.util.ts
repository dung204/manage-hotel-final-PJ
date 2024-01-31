import { KeyLanguage } from '@/translation/types';
import i18next from 'i18next';

/**
 * @param {KeyLanguage} key - The `key` parameter in the `translate` function is of type `KeyLanguage`.
 * It is used to specify the key or identifier for the translation that needs to be retrieved.
 * @returns The function `translate` returns a string.
 */
const translate = (key: KeyLanguage): string => {
  return i18next.t(key);
};

export default translate;
