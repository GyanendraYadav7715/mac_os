import WindowWrapper from "@hoc/WindowWraper";
import { WindowControlls } from "@components";
import { locations } from "@constants";
import useWindowStore from "@store/window";

const Trash = () => {
  const trashItems = locations.trash.children || [];
    const { openWindow } = useWindowStore();

  const openItem = (item) => {
  // Handle other file types with custom windows
  if (item.fileType && item.kind) {
    return openWindow(`${item.fileType}${item.kind}`, item);
  }
};
  return (
    <>
      <div id="window-header">
        <WindowControlls target="trash" />
        <h2>Trash</h2>
      </div>
      <div>
        {trashItems.length === 0 ? (
          <p>The Trash is empty.</p>
        ) : (
          <ul>
            {trashItems.map((item) => (
              <li key={item.id} onClick={() => openItem(item)}>
                <img src={item.icon} alt={item.name} />
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

const TrashWindow = WindowWrapper(Trash, "trash");
export default TrashWindow;
