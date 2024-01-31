import { KeyLanguage } from '@/translation/types';
import { useTranslation } from 'react-i18next';
/**
 * The `useAppTranslation` function is a custom hook that provides translation functionality using the
 * `useTranslation` hook.
 * @returns The `useAppTranslation` function returns an object that includes the `translation` object
 * returned from the `useTranslation` hook, as well as a `translate` function.
 */

const useAppTranslation = () => {
  const translation = useTranslation();

  const translate = (key: KeyLanguage, params?: Object) => {
    return translation.t(key as unknown as string, params);
  };
  return {
    ...translation,
    translate,
  };
};

export default useAppTranslation;
