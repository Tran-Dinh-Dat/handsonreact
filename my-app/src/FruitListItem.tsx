export interface FruitItem {
  id: number;
  name: string;
}

interface FruitItemProps {
  fruit: FruitItem;
}


function FruitListItem({ fruit }: FruitItemProps) {
  return <li>{fruit.name}</li>
}

export default FruitListItem;
