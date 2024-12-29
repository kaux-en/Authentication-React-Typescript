import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: (metric: { name: string, value: number }) => void ) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
      onCLS(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    };
  };

export default reportWebVitals;
