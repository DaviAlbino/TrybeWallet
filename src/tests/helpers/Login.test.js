// import React from "react";
// import { screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import Login from "../../pages/Login";
// import { renderWithRouterAndRedux } from "./renderWith";

// describe('Testes para validar a página Login', () => {
//     it('Verificar a presença do botão e dos inputs na sala', () => {
//         renderWithRouterAndRedux(<Login />)
        
//         const emailInput = screen.getByTestId(/email-input/i);
//         const passwordInput = screen.getByTestId("password-input");
//         const signBtn = screen.getByRole('button');

//         expect(emailInput).toBeInTheDocument();
//         expect(passwordInput).toBeInTheDocument();
//         expect(signBtn).toBeInTheDocument();

//     })

//     it('Verificar se o botão é habilitado corretamente', () => {
//         renderWithRouterAndRedux(<Login />);

//         const emailInput = screen.getByTestId(/email-input/i);
//         const passwordInput = screen.getByTestId(/password-input/i);
//         const signBtn = screen.getByRole('button');
//     })
// })