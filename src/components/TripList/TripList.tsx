import "./tripList.styles.css";
import React, { useRef, useState, useEffect } from "react";

import { AngleLeftIcon } from "components/Icons/AngleLeftIcon";
import { AngleRightIcon } from "components/Icons/AngleRightIcon";
import { TripItem } from "components/TripItem/TripItem";
import {
  INITIAL_SCROLL_DISTANCE,
  RESIZE_TIMEOUT,
} from "components/TripList/tripList.config";
import { TripListProps } from "components/TripList/tripList.types";

export function TripList({
  trips,
  selectedTrip,
  onTripClick: handleTripClick,
  onAddTripClick: handleAddTripClick,
}: Readonly<TripListProps>) {
  const tripListRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(INITIAL_SCROLL_DISTANCE);
  const [isNavButtonsVisible, setIsNavButtonsVisible] = useState(false);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (tripListRef.current) {
        const containerWidth = tripListRef.current.offsetWidth;
        const contentWidth = tripListRef.current.scrollWidth;
        const itemsWidth = contentWidth / trips.length;

        setScrollDistance(
          itemsWidth >= containerWidth ? containerWidth : itemsWidth
        );

        setTimeout(() => {
          if (tripListRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
              tripListRef.current;

            setIsNavButtonsVisible(scrollLeft > 0 || scrollWidth > clientWidth);
          }
          if (animationRef.current === null) {
            animationRef.current = requestAnimationFrame(() => {
              animationRef.current = null;
              handleResize();
            });
          }
        }, RESIZE_TIMEOUT);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [trips.length]);

  const handleScrollLeft = () => {
    if (tripListRef.current) {
      tripListRef.current.scrollLeft -= scrollDistance;
    }
  };

  const handleScrollRight = () => {
    if (tripListRef.current) {
      tripListRef.current.scrollLeft += scrollDistance;
    }
  };

  return (
    <div className="trip-list__container">
      {isNavButtonsVisible ? (
        <button
          className="trip-list__nav-button trip-list__nav-button--left"
          onClick={handleScrollLeft}
          type="button"
        >
          <AngleLeftIcon className="trip-list__nav-button-icon" />
        </button>
      ) : null}
      <div ref={tripListRef} className="trip-list">
        {trips.map(trip => (
          <TripItem
            key={trip.id}
            className={`${selectedTrip?.id === trip.id && "trip-list__selected-trip"}`}
            onClick={handleTripClick}
            trip={trip}
          />
        ))}
        <button
          className="trip-list__add-button"
          onClick={handleAddTripClick}
          type="button"
        >
          <span className="trip-list__add-button-icon"> + </span>
          <span> Add trip </span>
        </button>
      </div>
      {isNavButtonsVisible ? (
        <button
          className="trip-list__nav-button trip-list__nav-button--right"
          onClick={handleScrollRight}
          type="button"
        >
          <AngleRightIcon className="trip-list__nav-button-icon" />
        </button>
      ) : null}
    </div>
  );
}
