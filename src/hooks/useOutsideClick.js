import { useEffect } from "react";

const useDetectOutsideClick = (ref, handler, parentRef = null) => {
  useEffect(() => {
    const listener = (e) => {
      if (
        !ref.current ||
        ref.current.contains(e.target) ||
        parentRef.current.contains(e.target)
      )
        return;
      handler(false);
    };

    document.addEventListener("mousedown", listener);

    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler, parentRef]);
};

export default useDetectOutsideClick;
