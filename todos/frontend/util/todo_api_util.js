export const fetchTodos = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/todos',
  })    
} 

export const receiveTodo = (todo) => {
  debugger
  return $.ajax({
    method: "POST",
    url: "api/todos",
    data: {
      todo
    }
  });
}; 
