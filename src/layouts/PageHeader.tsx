import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import Sen1 from "../assets/sen1.png";
import { Button } from "../components/Button";
import { useState } from "react";
import { useSidebarContext } from "../contexts/SidebarContext";

export function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      {/* Left Most Part */}
      <PageHeaderFirstSection hidden={showFullWidthSearch} />
      {/* Central Part */}

      <form
        className={` gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => {
              setShowFullWidthSearch(false);
            }}
            type="button"
            variant="ghost"
            size="icon"
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none "
          />
          <Button className="py-2 px-4 rounded-r-full border border-secondary-border border-l-0 flex-shrink-0">
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>

      {/* Right Most Part */}
      <div
        className={`flex-shrink-0  md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          className="md:hidden"
          size="icon"
          variant="ghost"
        >
          <Search />
        </Button>
        <Button className="md:hidden" size="icon" variant="ghost">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
}

type PageHeaderFirstSectionProps = {
  hidden?: boolean;
};

export function PageHeaderFirstSection({
  hidden=false,
}: PageHeaderFirstSectionProps) {
  const { toggle } = useSidebarContext();
  return (
    <div
      className={` gap-4 items-center flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      }`}
    >
      <Button onClick={toggle} variant="ghost" size="icon">
        <Menu />
      </Button>
      <a href="/">
        <img src={Sen1} alt="youtube ko jastai logo" className="h-6" />
      </a>
    </div>
  );
}
