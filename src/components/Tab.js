function Tab({ children, activeTab, setActiveTab }) {
  return (
    <div>
      <nav>
        {children.map((tab, index) => (
          <button
            onClick={() => setActiveTab(index)}
            key={index}
            className={activeTab === index ? "bg-green-500" : "bg-gray-300"}
          >
            {" "}
            {tab.props.title}{" "}
          </button>
        ))}
      </nav>
      {children[activeTab]}
    </div>
  );
}

Tab.Panel = function ({ children }) {
  return <div> {children} </div>;
};

export default Tab;
