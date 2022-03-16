import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Container,
  Display,
  DropdownButton,
  Item,
  SelectItems,
} from './DropdownSelect.styles';

type DropdownSelectProps<T> = {
  className?: string;
  renderSelectedItem: (item: T) => React.ReactElement;
  renderItem: (item: T) => React.ReactElement;
  extractKey: (item: T) => React.Key;
  onSelect: (item: T) => void | Promise<void>;
  value?: T;
  items?: T[];
};

export function DropdownSelect<T>(
  props: React.PropsWithChildren<DropdownSelectProps<T>>,
) {
  const [selected, setSelected] = useState<T | undefined>(props.value);
  const [isSelectionVisible, setIsSelectionVisible] = useState<boolean>(false);
  const [currentHighlightIndex, setCurrentHighlightIndex] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const selectItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelected(props.value);
  }, [props.value]);

  const isClickOutside = useCallback((e: MouseEvent) => {
    if (!ref?.current?.contains(e.target as Node)) {
      setIsSelectionVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousedown', isClickOutside);
    return () => window.removeEventListener('mousedown', isClickOutside);
  }, [isClickOutside]);

  const handleSelect = useCallback(
    (item: T) => {
      if (!props.items) return;
      const idx = props.items?.indexOf(item);
      setCurrentHighlightIndex(idx);
      setSelected(item);
      setIsSelectionVisible(false);
      dropdownButtonRef.current?.blur();
      selectItemsRef.current?.blur();
      props.onSelect(item);
    },
    [props],
  );

  const keydownHandler = useCallback(
    (e: KeyboardEvent) => {
      if (!isSelectionVisible) return;
      if (!props.items) return;
      if (e.shiftKey) return;

      switch (e.key) {
        case 'ArrowUp':
          if (currentHighlightIndex > 0) {
            setCurrentHighlightIndex((current) => current - 1);
          }
          break;
        case 'ArrowDown':
          if (currentHighlightIndex < props.items.length - 1) {
            setCurrentHighlightIndex((current) => current + 1);
          }
          break;
        case 'Enter':
          handleSelect(props.items[currentHighlightIndex]);
          break;
        case 'Escape':
          setIsSelectionVisible(false);
          break;
        default:
          break;
      }
    },
    [
      isSelectionVisible,
      props.items,
      handleSelect,
      setCurrentHighlightIndex,
      currentHighlightIndex,
    ],
  );

  useEffect(() => {
    window.addEventListener('keydown', keydownHandler);
    return () => window.removeEventListener('keydown', keydownHandler);
  }, [keydownHandler]);

  useEffect(() => {
    if (isSelectionVisible && props.items) {
      const current = selectItemsRef.current?.childNodes[
        currentHighlightIndex
      ] as HTMLDivElement;
      current.focus();
      current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [selectItemsRef, isSelectionVisible, props.items, currentHighlightIndex]);

  return (
    <Container ref={ref} className={props.className}>
      <div className="flex flex-row items-center w-full h-full overflow-hidden">
        <Display onClick={() => setIsSelectionVisible((current) => !current)}>
          {selected && props.renderSelectedItem(selected)}
        </Display>
        <DropdownButton
          tabIndex={0}
          ref={dropdownButtonRef}
          onClick={() => setIsSelectionVisible((current) => !current)}
        >
          *
        </DropdownButton>
      </div>
      {isSelectionVisible && (
        <SelectItems tabIndex={1} ref={selectItemsRef}>
          {props.items?.map((item, idx) => (
            <Item
              tabIndex={idx + 2}
              key={props.extractKey(item)}
              onClick={() => handleSelect(item)}
            >
              {props.renderItem(item)}
            </Item>
          ))}
        </SelectItems>
      )}
    </Container>
  );
}
