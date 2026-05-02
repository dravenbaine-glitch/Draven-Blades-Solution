import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Draven Blades Solutions",
  description: "Nexus Core OS - Biological Fluid Interface",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ 
        margin: 0, 
        background: "#000", 
        overflow: "hidden", 
        cursor: "none" 
      }}>
        {children}
      </body>
    </html>
  );
}
