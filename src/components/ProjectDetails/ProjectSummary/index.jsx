import Comments from './Comments';
import Documents from './Documents';
import Map from './Map';
import Overview from './Overview';
export default function ProjectSummary({ tabs }) {
  const tabContent = () => {
    const activeTab = tabs.find(tab => tab.isActive);
    switch (activeTab?.id) {
      case 1:
        return <Overview />;
      case 2:
        return <Map />;
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
      <div className="w-full">{tabContent()}</div>
    </div>
  );
}
