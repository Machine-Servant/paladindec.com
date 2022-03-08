import React, { useEffect, useState } from 'react';

export function ClientOnly({
  children,
  ...delegated
}: React.PropsWithChildren<unknown>) {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    console.log('mounted', isMounted);
  }, [isMounted]);

  if (!isMounted) return null;

  return <div {...delegated}>{children}</div>;
}
