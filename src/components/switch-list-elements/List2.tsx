export interface ListProps {
  items: string[];
  handleSelect: (selectedItems: string) => void;
}

const List2 = ({ items, handleSelect }: ListProps) => {
  return (
    <div>
      <ul className="list-none p-4 border border-[#E7E5E4] dark:border-[#44403C] rounded-2xl bg-white dark:bg-[#1C1917] shadow-warm min-w-[180px]">
        {items.map((item, index) => {
          return (
            <li key={item} className="group flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-[#F5F5F0] dark:hover:bg-[#292524] transition-colors">
              <input
                type="checkbox"
                name="item"
                id={`li-2-${index}`}
                value={item}
                onChange={(e) => {
                  handleSelect(e.target.value)
                }}
                className="w-4 h-4 rounded accent-[#B45309] dark:accent-[#F59E0B]"
              />
              <label htmlFor={`li-2-${index}`} className="font-body text-sm text-[#1C1917] dark:text-[#FAFAF7] cursor-pointer select-none">
                {item}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List2;
