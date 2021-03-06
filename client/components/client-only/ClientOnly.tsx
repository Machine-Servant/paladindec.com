import React, { useEffect, useState } from 'react';

export function ClientOnly({
  children,
  ...delegated
}: React.PropsWithChildren<Record<string, unknown>>) {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <div {...delegated}>{children}</div>;
}
