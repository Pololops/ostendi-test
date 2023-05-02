export const generateLinkPath = (path: string) => {
  const splitPath = path.split('/');
  const endPath = splitPath.at(-1);
  if (endPath) {
    splitPath.push(endPath.replace('ab_', 'abs_'));
  }
  return splitPath.join('/');
};