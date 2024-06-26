import Comments from './Comments';
import Documents from './Documents';
import ProjectMap from './ProjectMap';
import Overview from './Overview';
import { useState } from 'react';
export default function ProjectSummary({ tabs, data }) {
  const tabContent = () => {
    const activeTab = tabs.find(tab => tab.isActive);

    switch (activeTab?.id) {
      case 1:
        return <Overview data={data} />;
      case 2:
        return <ProjectMap data={data} />;
      case 3:
        return <Documents />;
      case 4:
        return <Comments />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <h2>{}</h2>
      <div className="w-full">{tabContent()}</div>
    </div>
  );
}
