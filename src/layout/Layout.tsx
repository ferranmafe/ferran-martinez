import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex justify-center w-screen flex-1">{children}</div>
      <Footer />
    </div>
  );
};
