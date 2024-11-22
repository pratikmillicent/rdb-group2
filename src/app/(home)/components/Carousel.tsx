import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";

export default function Carroussel3D(props: any) {
  const table = props.cards.map((element: any, index: any) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(0);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGoToSlide(prev => (prev + 1) % cards.length);
    }, props.autoScrollInterval || 3000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div>
      <div
        style={{
          width: props.width,
          height: props.height,
          margin: props.margin,
        }}
      >
        <Carousel
          offsetFn={offsetFromCenter => {
            return {
              opacity: offsetFromCenter ? 0.8 : 1,
            };
          }}
          slides={cards || []}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showArrows}
          animationConfig={config.gentle}
        />
      </div>
    </div>
  );
}
