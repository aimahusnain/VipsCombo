import { useEffect } from 'react';

function useEventListener(target, eventName, handler) {
  useEffect(() => {
    if (!target || !eventName || !handler) {
      throw new Error('Missing required arguments');
    }
    
    const isSupported = target && target.addEventListener;
    if (!isSupported) return;

    target.addEventListener(eventName, handler);

    return () => {
      target.removeEventListener(eventName, handler);
    };
  }, [target, eventName, handler]);
}

export default useEventListener;
