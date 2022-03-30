type Part = {
  $: {
    code: string;
    name: string;
  };
};

type Item = {
  $: {
    code: string;
    name: string;
  };
  parts?: Part[];
};

type ItemHolder = {
  item: Item[];
};

type ExportedData = {
  items: ItemHolder;
};

export default ExportedData;
