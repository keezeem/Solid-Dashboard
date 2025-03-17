import Navbar from "@/components/Navbar";


const Layout = ({ children }: { children: React.ReactNode }) => {
return (
    <div className="h-full w-full">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;