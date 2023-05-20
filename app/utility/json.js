import sjson from 'secure-json-parse';

export function parseJson(string) {
  if (!string) return undefined;

  try {
    return sjson(string);
  } catch {
    return undefined;
  }
}

// Instead of JSON.parse() sjson provides a more secure method to protect the server from "prototype poisoning"
// https://www.npmjs.com/package/secure-json-parse
