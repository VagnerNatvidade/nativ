import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <title>nativ</title>
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
