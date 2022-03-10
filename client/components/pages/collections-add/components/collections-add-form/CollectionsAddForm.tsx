import React, { useState } from 'react';
import { CollectionCreateWithoutUserInput } from '../../../../../@types/codegen/graphql';

type CollectionsAddFormProps = {
  onSubmit: (input: CollectionCreateWithoutUserInput) => void;
};

export const CollectionsAddForm: React.FC<CollectionsAddFormProps> = (
  props,
) => {
  const [state, setState] = useState<CollectionCreateWithoutUserInput>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!state) return;
    props.onSubmit(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) =>
          setState((current) => ({ ...current, name: e.target.value }))
        }
      />
      <button type="submit">Submit</button>
    </form>
  );
};
