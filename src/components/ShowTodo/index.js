import ListTodo from "./../ListTodo";
import "./style.scss";
function ShowTodo(props) {
  const { arrList } = props;

  return (
    <div className="showTodo">
      {arrList.map((listItem) => {
        return <ListTodo listItem={listItem}></ListTodo>;
      })}
    </div>
  );
}

export default ShowTodo;
