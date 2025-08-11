import { useEffect, useState } from 'react';

/**
 * Hook to check if we're running on the client side.
 * Prevents hydration mismatches by ensuring client-only code runs only after hydration.
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

/**
 * Hook to safely use client-side only values like Date.now(), Math.random(), etc.
 * Returns undefined on server, actual value on client after hydration.
 */
export function useClientValue<T>(getValue: () => T): T | undefined {
  const isClient = useIsClient();
  const [value, setValue] = useState<T | undefined>(undefined);

  useEffect(() => {
    if (isClient) {
      setValue(getValue());
    }
  }, [isClient, getValue]);

  return isClient ? value : undefined;
}
