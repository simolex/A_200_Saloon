const form = document.querySelector(".form-test-drive");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = {};
  for (let { name, value } of form.elements) {
    if (name) {
      if (value.trim() === "") {
        alert("Для отправки формы необходимо заполнить все поля");
        return false;
      }
      data[name] = value.trim();
    }
  }
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .then((data) => {
      alert("Запрос успешно отправлен!");
      form.reset();
    })
    .catch((error) => {
      alert("Произошла ошибка со статусом: " + error.message);
    });
});
