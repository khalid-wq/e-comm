import TopBare from "../ui/admin/TopBare";

import Sidebar from "../ui/admin/Sidebare";

const Layout = ({ children }) => {
  return (
    <div className=" flex bg-backColor">
      <div className="basis-[15%] ">
        <Sidebar />
      </div>
      <div className="basis-[85%] ">
        <TopBare />
        <div className="p-3"> {children}</div>
      </div>
    </div>
  );
};

export default Layout;
