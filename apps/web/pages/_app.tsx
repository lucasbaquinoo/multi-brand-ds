import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { Theme, ThemeProvider } from '@emotion/react';
import '../styles/global.css';

const theme = {
  color: {
    primary: 'gray'
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const [brandTheme, setBranchTheme] = useState<Theme>();

  useEffect(() => {
    fetch(`/api/brands`)
      .then(res => res.json())
      .then(res => setBranchTheme(res))
  }, []);

  return (
    <ThemeProvider theme={brandTheme || theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}