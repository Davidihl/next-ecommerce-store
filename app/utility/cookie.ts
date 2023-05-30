import { cookies } from 'next/headers';

export function getCookie(name: string) {
  return cookies().get(name)?.value;
}

// cookies() ... built-in cookie handler from next
// .get ... method to fetch a saved cookie from the client
// ?.value ... and try to access the value. If there is no cookie, the "?" makes sure there is no error
