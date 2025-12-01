// BUG: This React component should render a list of items but it's not displaying correctly.
// Fix the bug and make it display the list properly.

function ItemList({ items }) {
  return (
    <ul className="max-w-md mx-auto mt-8 bg-white rounded-lg shadow-md">
      {items.map(item => {
        <li key={item.id} className="px-6 py-3 border-b border-gray-200 hover:bg-gray-50">
          {item.name}
        </li>
      }
      )}
    </ul>
  );
}

export default ItemList;
