import { render, screen, fireEvent } from "@testing-library/react";
import {  rest } from 'msw'
import { setupServer } from "msw/node"

import { Tasks } from ".."


describe("Task Component", ()=> {
  const worker = setupServer(
    rest.get("https://jsonplaceholder.typicode.com/todos", async(request, response, context)=> {
      return response(
        context.json([
          {
            id: '1',
            title: 'Correr 10 minutos'
          }
        ])
      )
    })
  )
  beforeAll(()=> {
    worker.listen()
  });


  // limpando todo handle antes de qualquer teste
  beforeAll(()=> {
    worker.resetHandlers()
  });

  it("should fetch and show task on button click",async ()=>{
    render(
      <Tasks />
    );

    // procurando pelo botão pelo texto
    const elementButton = screen.getByText(/Buscar atividades/i);

    // vamos fazer  um onclick no botão
    fireEvent.click(elementButton);

    // depois que usuário clickou no botão vamos ver se temos a task em tela
    await screen.findByText('Correr 10 minutos');
  });


  /**
   * MOSTRAR UMA MENSAGEM DE ERROR SE NOSSA REQUISÃO FALHAR
   */
  it("should show error message on fetch error",async ()=>{

    worker.use(
      rest.get("https://jsonplaceholder.typicode.com/todos", async(request, response, context)=> {
        return response(
          context.status(500), context.json({message: "Request failed with status code 500"})
        )
      })
    )
    render(
      <Tasks />
    );

    // procurando pelo botão pelo texto
    const elementButton = screen.getByText(/Buscar atividades/i);

    // vamos fazer  um onclick no botão
    fireEvent.click(elementButton);

    // depois que usuário clickou no botão vamos ver se temos a task em tela
    await screen.findByText('Request failed with status code 500');
  });
})