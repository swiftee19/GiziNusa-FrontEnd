import {
  sidebar_buttons_data,
  SidebarButtonDataType,
} from "./sidebarButtonsData";
import SidebarButton from "./SidebarButton";

export default function Sidebar() {
  return (
    <div className="flex flex-col py-10">
      <div className="flex items-center gap-4 pb-8 px-4">
        <img className="size-10" src="/GiziNusa_icon.svg" alt="GiziNusa icon" />
        <h2 className="text-secondary font-bold text-xl">GiziNusa</h2>
      </div>
        {sidebar_buttons_data.map(
          (sidebarButtonData: SidebarButtonDataType) => (
            <SidebarButton
              key={sidebarButtonData.text}
              sidebarButtonData={sidebarButtonData}
            />
          )
        )}
    </div>
  );
}
