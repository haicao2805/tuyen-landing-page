interface SectionLayoutProps {
  children: React.ReactNode
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ children }) => {
  return (
    <div className="h-full w-app mx-auto flex items-center justify-center">{children}</div>
  );
}

export default SectionLayout;