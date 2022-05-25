import { useEffect, useRef } from 'react';

export const useClickOutside = (handler) => {
  let domNode = useRef(null);

  useEffect(() => {
    const handlerOutsideClick = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', handlerOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handlerOutsideClick);
    };
  }, [domNode, handler]);
  return domNode;
};
