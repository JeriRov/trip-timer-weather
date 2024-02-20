import "./Selector.css";

import React, { ChangeEvent, useState } from "react";

import { SelectorProps } from "../../components/Selector/selector.types";

export const Selector = <T,>({
  items,
  renderItem,
  onSelectItem,
  onVisibleItem,
  getKey,
  className,
  ...props
}: SelectorProps<T>) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<T[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    const filteredItems = items.filter(item =>
      onVisibleItem(item)
        ?.toString()
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
    }, 200);
  };

  return (
    <div className="selector__container">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`selector ${className}`}
        {...props}
      />
      {showSuggestions && (
        <ul className="selector__items-container">
          {suggestions.length > 0 ? (
            suggestions.map(item => (
              <button
                key={getKey(item)}
                onClick={() => handleSelectItem(item)}
                className="selector__item"
              >
                {renderItem(item)}
              </button>
            ))
          ) : (
            <span className={"selector__no-items-message"}>No items found</span>
          )}
        </ul>
      )}
    </div>
  );
};
