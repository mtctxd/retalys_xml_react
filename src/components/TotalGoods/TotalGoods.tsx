import React from 'react';

import '../../styles.css';
import ExportedData from '../../types';

type Props = {
  goods: ExportedData,
};

const TotalGoods: React.FC<Props> = ({ goods }) => (
  <div>
    {`Total amoun of items: ${goods.items[0].item.length}`}
  </div>
);

export default TotalGoods;
