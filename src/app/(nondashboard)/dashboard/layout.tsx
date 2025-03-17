import SideBar from "@/components/SideBar";



const Layout = ({ children }: { children: React.ReactNode }) => {
return (
    <div className="h-full w-full">
      <SideBar />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;