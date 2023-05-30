import { parseJson } from './json';

export function checkCookie(cookieName: string) {
  if (!cookieName) {
    return [];
  } else {
    return parseJson(cookieName);
  }
}
