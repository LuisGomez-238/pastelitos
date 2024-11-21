import { useState, useEffect } from 'react';
import { calculateCakePrice } from '../utils/pricingLogic';

export const useCakePricing = (initialOptions = {}) => {
  const [options, setOptions] = useState({
    size: '6inch',
    cakeType: 'vanilla',
    filling: null,
    frostingType: 'buttercream',
    extraFilling: false,
    extraFrosting: false,
    decorations: [],
    ...initialOptions
  });

  const [price, setPrice] = useState(0);

  useEffect(() => {
    const newPrice = calculateCakePrice(options);
    setPrice(newPrice);
  }, [options]);

  const updateOption = (key, value) => {
    setOptions(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return {
    price,
    options,
    updateOption
  };
}; 