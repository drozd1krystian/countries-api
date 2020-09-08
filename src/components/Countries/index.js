import React from "react";
import "./style.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Country from "./Country";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import SkeletonCard from "./Country/skeletonCard";

const mapState = ({ countries }) => ({
  countries: countries.countries,
  isLoading: countries.isLoading,
});

const Countries = (props) => {
  const { countries, isLoading } = useSelector(mapState);
  const [items, setItems] = useState([]);

  const getNext = () => {
    const start = items.length;
    const end = items.length + 16;

    const slides = [
      ...items,
      ...countries
        .slice(start, end)
        .map((el) => <Country country={el} key={el.name} />),
    ];
    setItems(slides);
  };
  useEffect(() => {
    const generateSlides = () => {
      return isLoading
        ? Array(countries.length > 0 ? countries.length : 15)
            .fill()
            .map((_, id) => <SkeletonCard key={id} />)
        : countries
            .slice(0, 16)
            .map((el) => <Country country={el} key={el.name} />);
    };
    const slides = generateSlides();
    setItems(slides);
  }, [setItems, countries, isLoading]);

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={getNext}
      hasMore={items.length < countries.length}
    >
      <div className="countries">{items}</div>
    </InfiniteScroll>
  );
};

export default Countries;
