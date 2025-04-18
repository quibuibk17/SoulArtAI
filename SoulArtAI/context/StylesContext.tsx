import React, { createContext, useState } from 'react';

type Style = {
  id: string;
  name: string;
  type: 'Avatar' | 'Video' | 'Sticker';
  rating: number;
  usage: string;
  imageUrl: string;
  isFavorite?: boolean;
};

type StylesContextType = {
  styles: Style[];
  favorite: (id: string) => void;
};

const StylesContext = createContext<StylesContextType>({
  styles: [],
  favorite: () => {},
});

export function StylesProvider({ children }: { children: React.ReactNode }) {
  const [styles, setStyles] = useState<Style[]>([
    {
      id: '1',
      name: 'Ghibli',
      type: 'Avatar',
      rating: 5,
      usage: '300k',
      imageUrl: 'https://placehold.co/200x200?text=Ghibli',
      isFavorite: false
    },
    {
      id: '2',
      name: 'Cartoon',
      type: 'Avatar',
      rating: 4.5,
      usage: '250k',
      imageUrl: 'https://placehold.co/200x200?text=Cartoon',
      isFavorite: false
    },
    {
      id: '3',
      name: 'Joyful Nod',
      type: 'Video',
      rating: 4.7,
      usage: '150k',
      imageUrl: 'https://placehold.co/200x200?text=Joyful+Nod',
      isFavorite: false
    },
    {
      id: '4',
      name: 'Warm Greeting',
      type: 'Video',
      rating: 5,
      usage: '50k',
      imageUrl: 'https://placehold.co/200x200?text=Warm+Greeting',
      isFavorite: false
    },
    {
      id: '5',
      name: 'Sticker',
      type: 'Sticker',
      rating: 0,
      usage: '0',
      imageUrl: 'https://placehold.co/200x200?text=Sticker',
      isFavorite: false
    }
  ]);

  const favorite = (id: string) => {
    setStyles(prevStyles => 
      prevStyles.map(style => 
        style.id === id ? { ...style, isFavorite: !style.isFavorite } : style
      )
    );
  };

  return (
    <StylesContext.Provider value={{ styles, favorite }}>
      {children}
    </StylesContext.Provider>
  );
}

export const useStyles = () => React.useContext(StylesContext);