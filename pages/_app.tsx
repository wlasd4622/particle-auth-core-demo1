import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';

import { AuthCoreContextProvider } from '@particle-network/auth-core-modal';
import { merge } from 'lodash';
import type { AppProps } from 'next/app';
import { useMemo } from 'react';

export const isServer = () => typeof window === 'undefined';

export default function MyApp({ Component, pageProps }: AppProps) {


  const authCoreOptions = useMemo(() => {
    const cacheOption = isServer() ? {} : JSON.parse(localStorage.getItem('customModalOptions') || '{}');
    return merge(
        {
            projectId: '3da53d52-1b9b-4d4f-83f6-4765b368afb4',
            clientKey: 'cwLTBxDDv0RlpXyHjS1fedTKLoCwgwVghZ074ORw',
            appId: 'e6d7812f-fde9-4b45-a2f4-cf625abdfe8f',
            themeType: 'light',
            language: 'en',
            promptSettingConfig: {
                promptPaymentPasswordSettingWhenSign: 2,
                promptMasterPasswordSettingWhenLogin: 2,
            },
            wallet: {
                visible: true,
                preload: true,
            },
        },
        cacheOption
    );
}, []);

  return (
  <AuthCoreContextProvider options={authCoreOptions}>
    <NextUIProvider>
      <Component {...pageProps} />
      </NextUIProvider>
    </AuthCoreContextProvider>
  )
}
