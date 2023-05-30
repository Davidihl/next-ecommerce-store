import sjson from 'secure-json-parse';

export function parseJson(cookieValue: string) {
  if (!cookieValue) return undefined;

  try {
    return sjson(cookieValue);
  } catch {
    return undefined;
  }
}

// Instead of JSON.parse() sjson provides a more secure method to protect the server from "prototype poisoning"
// https://www.npmjs.com/package/secure-json-parse
