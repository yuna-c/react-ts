// In Next.js, this file would be called: app/layout.jsx
import Providers from "./providers/RQProvider";
import { CounterProvider } from "./providers/CounterProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <CounterProvider>{children}</CounterProvider>
        </Providers>
      </body>
    </html>
  );
}
