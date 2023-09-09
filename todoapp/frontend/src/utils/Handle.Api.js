import axios from 'axios';

const baseUrl = "http://localhost:5000";

const getAlltodo = (settodo) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      console.log('data--->', data);
      settodo(data);
    })
    .catch((error) => {
      console.error('Verileri alırken hata oluştu:', error);
    });
};

const addtodo = (text, settext, setTodo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      console.log(data);
      settext("");
      getAlltodo(setTodo);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateTodo = (todoId, text, setTodo, settext, setIsUpdating) => {
  axios
    .post(`${baseUrl}/update`, { _id: todoId, text })
    .then((data) => {
      settext("");
      setIsUpdating(false);
      getAlltodo(setTodo);
    })
    .catch((err) => {
      console.log(err);
    });
};
const deleteTodo = (_id,setTodo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      console.log(data);
      getAlltodo(setTodo);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getAlltodo, addtodo, updateTodo,deleteTodo };
