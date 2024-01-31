export type NestedKeyOf<ObjectType extends Object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends Object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export type KeyLanguage = NestedKeyOf<
  typeof import('@/translation/locales/japan.json')
>;
