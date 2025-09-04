interface GetBEMClassArgs {
  b: string;
  e?: string;
  m?: Record<string, boolean>;
  parent?: string;
  extraClassName?: string;
};

const blockElementSeparator = "_";
const blockModifierSeparator = "-";

export function getBEMClass({
  b,
  e = "",
  m = {},
  parent = "",
  extraClassName = "",
}: GetBEMClassArgs): string {
  const className: string[] = [];

  if (parent) {
    className.push(`${parent}_${b}`);
  }

  const blockElement = e ? `${b}${blockElementSeparator}${e}` : b;

  className.push(blockElement);

  className.push(
    ...Object.entries(m)
      .filter(([, value]) => value)
      .map(([modifier]) => `${blockElement}${blockModifierSeparator}${modifier}`)
  );

  if (extraClassName) {
    className.push(extraClassName);
  }

  return className.join(" ");
}
