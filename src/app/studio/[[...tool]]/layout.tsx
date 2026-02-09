export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Root layout (`src/app/layout.tsx`) zaten <html> ve <body> etiketlerini
  // oluşturuyor, burada tekrar oluşturmuyoruz ki hydration hatası olmasın.
  return <div className="min-h-screen">{children}</div>;
}
