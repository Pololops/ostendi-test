export const generateLinkPath = (path: string) => {
  const splitPath = path.split('/');
  const endPath = splitPath.at(-1);
  if (endPath) {
    splitPath.push(endPath.replace('ab_', 'abs_'));
  }
  return splitPath.join('/');
};

export const generateLinkSignature = (id: string, label: string, path: string, state: State): LinkSign => {
  const key = (state && state.length > 0) ? state[state.length - 1].key + 1 : 0;

  return {
    id,
    label: label.charAt(0).toUpperCase() + label.slice(1),
    path,
    key,
  };
}