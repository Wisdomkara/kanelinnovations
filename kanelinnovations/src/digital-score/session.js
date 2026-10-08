const KEY = 'kanel:digital-score:session:v1';
let memoryState = '';

export function getScoreSession() {
  try { return sessionStorage.getItem(KEY) || memoryState; } catch { return memoryState; }
}

export function markScoreSession(state) {
  memoryState = state;
  try { sessionStorage.setItem(KEY, state); } catch { /* In-memory fallback for restricted browsers. */ }
}

export function shouldPromote(pathname) {
  return !getScoreSession() && !pathname.replace(/\/+$/, '').startsWith('/digital-score');
}
