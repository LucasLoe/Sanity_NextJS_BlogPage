export function StringToKebabStyle(string) {
  const kebabCase = string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
  return kebabCase;
}
