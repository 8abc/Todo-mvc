/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page";

describe("todo actions", () => {
  const TodoPage = new TodoPage();

  beforeEach(() => {
    todoPage.navigate();
    todoPage.addTodo("Wash dishes");
  });
});
