import { useEffect, useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState(() => {
    const storedTab = localStorage.getItem("activeTab");
    return storedTab || "tab1";
  });

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const tabs = [
    { id: "tab1", label: "Tab 1", title: "Content 1" },
    { id: "tab2", label: "Tab 2", title: "Content 2" },
    { id: "tab3", label: "Tab 3", title: "Content 3" },
    { id: "tab4", label: "Tab 4", title: "Content 4" },
  ];

  const tabClickHandler = (e) => {
    setActiveTab(e.target.id);
  };

  return (
    <section className="max-w-[1200px] mx-auto px">
      <h2 className="bg-[#1abced] text-3xl text-white font-semibold px-3 py-3.5">
        Tabs Component with React
      </h2>
      <div className="bg-[#1abced] pt-6 px-3  flex gap-x-10 text-white text-[18px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={tab.id}
            onClick={tabClickHandler}
            className={`${
              tab.id === activeTab &&
              "border-b-2 border-[#f5e042] text-[#f5e042]"
            } cursor-pointer`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="bg-[#1a99ed] px-3 pt-6 h-80">
        {tabs.map((tab) => (
          <div key={tab.id}>
            {tab.id === activeTab && (
              <>
                <h3 className="text-white text-3xl">{tab.title}</h3>
                <p className="text-white mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum consectetur pariatur cum omnis sequi fugit commodi
                  eaque tempora mollitia? Molestias dolore nihil quo delectus.
                  Adipisci doloribus quas ipsam quam, pariatur necessitatibus,
                  iste saepe voluptate praesentium eveniet fugiat.
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tabs;
