import Footer from "../_components/footer";
import Navbar from "../_components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="font-roboto">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
