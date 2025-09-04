import { Callback } from "@/types/callback";
import { SimpleObject } from "@/types/simple-object";

type generateModifiersArgs = {
  initialModifiers?: SimpleObject<boolean>;
  entries: Array<unknown>;
  test: Callback<{ key: string; value: boolean }>;
};

export function generateModifiers({
  initialModifiers = {},
  entries,
  test,
}: generateModifiersArgs): SimpleObject<boolean> {
  return entries.reduce((modifiers: SimpleObject<boolean>, mod: unknown) => {
    const { key, value } = test(mod);

    return {
      ...modifiers,
      [key]: value,
    };
  }, initialModifiers);
}
