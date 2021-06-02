import React, {useState} from 'react';

import {createContext} from 'react';
interface ImageColors {
  primary: string;
  secondary: string;
}
interface ContextProps {
  color: ImageColors;
  pColor: ImageColors;
  setColors: (colors: ImageColors) => void;
  setPreviousColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps); //TODO: definir tipo
export const GradientProvider = ({children}: any) => {
  const [color, setColor] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [pColor, setPColor] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const setColors = (colors: ImageColors) => {
    setColor(colors);
  };
  const setPreviousColors = (colors: ImageColors) => {
    setPColor(colors);
  };

  return (
    <GradientContext.Provider
      value={{color, pColor, setColors, setPreviousColors}}>
      {children}
    </GradientContext.Provider>
  );
};
