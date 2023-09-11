interface SectionLayoutProps {
  children: React.ReactNode
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ children }) => {
  return (
    <div className="h-full w-appSm appMd:w-appMd appLg:w-appLg appXl:w-appXl mx-auto flex items-center justify-center relative z-10">{children}</div>
  );
}

export default SectionLayout;