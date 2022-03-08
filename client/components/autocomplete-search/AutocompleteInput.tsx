import { debounce } from 'lodash';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Item, ResultsContainer } from './AutocompleteInput.styles';

type AutocompleteInputProps<T> = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'onSelect'
> & {
  items?: T[];
  onTextChange: (value: string) => Promise<void>;
  onSelect: (item: T) => void;
  renderItem: (item: T) => React.ReactElement;
  extractKey: (item: T) => React.Key;
  extractLabel: (item: T) => string;
  loading: boolean;
};

export function AutocompleteInput<T>({
  onSelect,
  ...props
}: React.PropsWithChildren<AutocompleteInputProps<T>>) {
  const [term, setTerm] = useState<string>();
  const [currentHighlightIndex, setCurrentHighlightIndex] = useState<number>(0);
  const [selection, setSelection] = useState<T>();
  const ref = useRef<HTMLInputElement>(null);

  const isHidden = useMemo(
    () =>
      !term || term.length === 0 || (!!term && term.length > 0 && !!selection),
    [term, selection],
  );

  const debounced = useMemo(
    () => debounce(props.onTextChange, 300, { leading: true, trailing: true }),
    [props.onTextChange],
  );

  useEffect(() => {
    const doSearch = async () => {
      if (term) {
        await debounced(term);
      }
    };
    doSearch();
  }, [term, debounced]);

  useEffect(() => {
    if (!selection) return;
    setTerm(props.extractLabel(selection));
  }, [setTerm, props, selection]);

  const handleClick = (idx: number) => {
    if (!props.items) return;
    setSelection(props.items[currentHighlightIndex]);
    onSelect(props.items[idx]);
  };

  const handleKeydown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!props.items) return;
      if (e.shiftKey) return;
      if (e.key === 'ArrowUp' && currentHighlightIndex > 0) {
        setCurrentHighlightIndex((current) => current - 1);
      } else if (
        e.key === 'ArrowDown' &&
        currentHighlightIndex < props.items?.length - 1
      ) {
        setCurrentHighlightIndex((current) => current + 1);
      } else if (e.key === 'Enter') {
        setSelection(props.items[currentHighlightIndex]);
        onSelect(props.items[currentHighlightIndex]);
      } else {
        setSelection(undefined);
      }
    },
    [currentHighlightIndex, props.items, onSelect],
  );

  const handleClearButtonClick = useCallback(() => {
    setTerm('');
    setSelection(undefined);
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <div className="relative inline-block">
      <div className="flex flex-row items-center">
        <input
          ref={ref}
          className="px-4 py-2 text-xl border rounded-full shadow-xl border-black-500 shadow-white-900"
          type="text"
          {...props}
          onChange={(event) => setTerm(event.currentTarget.value)}
          onKeyDown={handleKeydown}
          value={term}
        />
        <button
          className="w-8 h-8 ml-4 border rounded-full border-white-900 active:bg-red-50"
          onClick={handleClearButtonClick}
        >
          &#10005;
        </button>
      </div>
      <ResultsContainer isHidden={isHidden}>
        {props.loading ? (
          <div className="pt-2 text-center">Loading...</div>
        ) : (
          term &&
          (props.items?.length ? (
            <ul>
              {props.items?.map((item, idx) => (
                <Item
                  key={props.extractKey(item)}
                  isActive={currentHighlightIndex === idx}
                  onClick={() => handleClick(idx)}
                >
                  {props.renderItem(item)}
                </Item>
              ))}
            </ul>
          ) : (
            <div>No Results...</div>
          ))
        )}
      </ResultsContainer>
    </div>
  );
}
