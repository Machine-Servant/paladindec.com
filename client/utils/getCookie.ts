export const getCookie = (
  name: string,
  cookies: string,
): string | undefined => {
  if (!cookies.length) return;
  if (!name.length) return;
  return cookies
    .split(';')
    .find((x: string) => x.trim().startsWith(`${name}=`))
    ?.split(`${name}=`)
    .pop();
};
