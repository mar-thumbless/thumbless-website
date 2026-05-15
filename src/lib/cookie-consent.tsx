'use client';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

type ConsentValue = 'accepted' | 'rejected' | null;

const STORAGE_KEY = 'cookie_consent';

export function getStoredConsent(): ConsentValue {
  if (typeof window === 'undefined') return null;
  const v = localStorage.getItem(STORAGE_KEY);
  return v === 'accepted' || v === 'rejected' ? v : null;
}

const CookieConsentContext = createContext<{
  consent: ConsentValue;
  accept: () => void;
  reject: () => void;
}>({ consent: null, accept: () => {}, reject: () => {} });

export function useCookieConsent() {
  return useContext(CookieConsentContext);
}

function clearOptionalCookies() {
  document.cookie.split(';').forEach((c) => {
    const name = c.split('=')[0].trim();
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
  });
}

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsentState] = useState<ConsentValue>(null);

  useEffect(() => {
    setConsentState(getStoredConsent());
  }, []);

  const accept = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setConsentState('accepted');
  }, []);

  const reject = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    clearOptionalCookies();
    setConsentState('rejected');
  }, []);

  return (
    <CookieConsentContext.Provider value={{ consent, accept, reject }}>
      {children}
    </CookieConsentContext.Provider>
  );
}
