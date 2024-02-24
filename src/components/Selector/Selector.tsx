import "./selector.styles.css";

import React, { ChangeEvent, useEffect, useState } from "react";

import { BLUR_TIMEOUT } from "components/Selector/selector.config";
import { SelectorProps } from "components/Selector/selector.types";

export function Selector<T>({
  items,
  renderItem,
  onSelectItem,
  onVisibleItem,
  getKey,
  className,
  value,
  ...props
}: SelectorProps<T>) {
  const [searchQuery, setSearchQuery] = useState<string>(value);
  const [suggestions, setSuggestions] = useState<T[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  useEffect(() => {
    setSearchQuery(value);
  }, [value]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    const filteredItems = items.filter(item =>
      onVisibleItem(item)
        .toString()
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    );

    setSuggestions(filteredItems);
  };

  const handleSelectItem = (item: T) => {
    setSearchQuery(onVisibleItem(item).toString());
    onSelectItem(item);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleFocus = () => {
    setSuggestions(items);
    setShowSuggestions(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, BLUR_TIMEOUT);
  };

  return (
    <div className="selector__item-container">
      <input
        className={`selector ${className}`}
        onBlur={handleBlur}
        onChange={handleInputChange}
        onFocus={handleFocus}
        type="text"
        value={searchQuery}
        {...props}
      />
      {showSuggestions ? (
        <ul className="selector__list-container">
          {suggestions.length > 0 ? (
            suggestions.map(item => (
              <button
                key={getKey(item)}
                className="selector__item"
                onClick={() => handleSelectItem(item)}
                type="button"
              >
                {renderItem(item)}
              </button>
            ))
          ) : (
            <span className="selector__no-items-message">No items found</span>
          )}
        </ul>
      ) : null}
    </div>
  );
}
