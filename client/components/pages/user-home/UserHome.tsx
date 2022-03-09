import React, { useState } from 'react';
import { AppLayout } from '../../app-layout';
import { ClientOnly } from '../../client-only';
import { SearchInput } from './components/search-input';
import { SearchResults } from './components/search-results';

type UserHomeProps = {
  loading: boolean;
  onSignout: () => void;
};

export const UserHome: React.FC<UserHomeProps> = (props) => {
  const [selectedCardName, setSelectedCardName] = useState<string>();

  const handleCardSearchSelect = (name: string) => {
    setSelectedCardName(name);
  };

  return (
    <AppLayout title="Home" loading={props.loading}>
      <ClientOnly>
        <h1 className="mb-2 text-xl font-bold text-black-500">Find a card</h1>
        <SearchInput onCardSearchSelect={handleCardSearchSelect} />
        <SearchResults className="mt-10" cardName={selectedCardName} />
      </ClientOnly>
    </AppLayout>
  );
};
