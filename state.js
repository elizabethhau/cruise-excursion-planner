const ls = typeof localStorage  !== 'undefined' ? localStorage  : { getItem: () => null, setItem: () => {} };
const ss = typeof sessionStorage !== 'undefined' ? sessionStorage : { getItem: () => null, setItem: () => {} };

export const STATE = {
  user: ls.getItem('cp_user'),
  tab: 'vote',
  portIndex: 0,
  votes: {},
  schedule: [],
  requests: [],
  creds: {
    apiKey:        ls.getItem('cp_apiKey') || '',
    clientId:      ls.getItem('cp_clientId') || '',
    spreadsheetId: ls.getItem('cp_spreadsheetId') || '',
  },
  accessToken: (() => {
    try {
      const cached = JSON.parse(ss.getItem('cp_token') || 'null');
      if (cached && cached.exp > Date.now()) return cached.tok;
    } catch {}
    return null;
  })(),
  offlineQueue: (() => {
    try { return JSON.parse(ls.getItem('cp_queue') || '[]'); }
    catch { return []; }
  })(),
  filters: {
    accessibleOnly: ls.getItem('cp_filterAccessible') === 'true',
    maxPrice: ls.getItem('cp_maxPrice') ? Number(ls.getItem('cp_maxPrice')) : null,
  },
  syncing: false,
  lastSync: null,
  _pollTimer: null,
};
