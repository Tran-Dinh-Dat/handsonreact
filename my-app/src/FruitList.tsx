
import FruitListItem, { FruitItem } from "./FruitListItem";

interface FruitListItemProps {
  fruits: FruitItem[];
}

function FruitList({fruits}: FruitListItemProps) {
  return (
    <ul>
      {fruits?.map((fruit) => (
        <FruitListItem key={fruit.id} fruit={fruit}/>
      ))}
    </ul>
  )
}

export default FruitList;
