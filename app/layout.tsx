
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ backgroundColor: '#0a0a0a' }}>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
