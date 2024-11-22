import React, { useEffect, useState } from "react";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";

function ImageModal({
  showModal,
  images,
  initial = 0,
  onClose,
  onChange,
  children,
}: {
  showModal: boolean;
  images: any[];
  initial?: number;
  onClose?: (key: (typeof images)[number]) => void;
  onChange?: (key: (typeof images)[number]) => void;
  children: (key: (typeof images)[number]) => any;
}) {
  const [activeIndex, setActiveIndex] = useState(initial);

  useEffect(() => {
    if (showModal) setActiveIndex(initial);
  }, [showModal]);

  useEffect(() => {
    if (onChange) onChange(images[activeIndex]);
  }, [activeIndex]);

  useEffect(() => {
    if (showModal) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [showModal]);

  return (
    <>
      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: "0",
            zIndex: "100000",
            background: "rgba(0,0,0,.80)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            if (onClose) onClose(images[activeIndex]);
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
            <button
              onClick={(e) => {
                e.stopPropagation();

                setActiveIndex((i) => (i > 0 ? i - 1 : i));
              }}
              style={{
                all: "unset",
                fontSize: "40px",
                color: "#fff",
                display: activeIndex === 0 ? "none" : "block",
              }}
            >
              <BiCaretLeft />
            </button>
            <div onClick={(e) => e.stopPropagation()}>
              {children(images[activeIndex])}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((i) => (i + 1 < images.length ? i + 1 : i));
              }}
              style={{
                all: "unset",
                fontSize: "40px",
                color: "#fff",
                display: activeIndex + 1 >= images.length ? "none" : "block",
              }}
            >
              <BiCaretRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageModal;
