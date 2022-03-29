import React from 'react';


export const GoodsList = ({ goods }) => {
  const { item } = goods.items[0];

  return (
    <ul>
      {item.map(item => {
        const processedItem = item.$;

        return (
          <li key={processedItem.code}>
            {processedItem.name}
            <ul>
              {item.parts && (
                item.parts[0].part[0].item.map(part => {
                  return (
                    <li key={part.$.code}>
                      {` | ${part.$.name} | `}
                    </li>
                  );
                })
              )}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};
