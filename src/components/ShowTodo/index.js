import ListTodo from "./../ListTodo";
import "./style.scss";
function ShowTodo(props) {
  const { arrList, onDeleteItem, onEditItem } = props;

  return (
    <div className="showTodo">
      {arrList.map((listItem, key) => {
        const { id } = listItem;
        return (
          <ListTodo
            listItem={listItem}
            onDeleteItem={onDeleteItem}
            onEditItem={onEditItem}
            key={id}
          ></ListTodo>
        );
      })}
    </div>
  );
}

export default ShowTodo;
