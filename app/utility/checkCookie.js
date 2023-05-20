import { parseJson } from './json';

export function checkCookie(cookieName) {
  if (!cookieName) {
    return [];
  } else {
    return parseJson(cookieName);
  }
}
