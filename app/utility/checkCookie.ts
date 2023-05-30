import { parseJson } from './json';

export function checkCookie(cookieName: string | undefined) {
  if (!cookieName) {
    return [];
  } else {
    return parseJson(cookieName);
  }
}
