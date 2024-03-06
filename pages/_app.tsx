import { type AppProps } from "next/app";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { ErrorBoundary } from "components/pages/ErrorBoundary";
import Metadata from "components/pages/Metadata";
import StyledApp from "components/pages/StyledApp";
import { FileSystemProvider } from "contexts/fileSystem";
import { MenuProvider } from "contexts/menu";
import { ProcessProvider } from "contexts/process";
import { SessionProvider } from "contexts/session";
import { ViewportProvider } from "contexts/viewport";

import 'styles/globals.css';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <ViewportProvider>
    <ProcessProvider>
      <FileSystemProvider>
        <SessionProvider>
          <ErrorBoundary>
            <Metadata />
            <StyledApp>
              <MenuProvider>
                <GoogleAnalytics
                  gaMeasurementId="G-8QERXNZ66X"
                  trackPageViews
                />
                <Component {...pageProps} />
              </MenuProvider>
            </StyledApp>
          </ErrorBoundary>
        </SessionProvider>
      </FileSystemProvider>
    </ProcessProvider>
  </ViewportProvider>
);

export default App;
