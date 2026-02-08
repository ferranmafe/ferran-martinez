type Props = {
  children: React.ReactNode;
};

export const Section = ({ children }: Props) => {
  return (
    <section className="flex justify-center">
      {children}
    </section>
  );
};
