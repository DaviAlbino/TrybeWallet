import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../../pages/Login";
import App from "../../App";
import { renderWithRouterAndRedux } from "./renderWith";

describe('Testes para validar a página Login', () => {
    it('Verificar a presença do botão e dos inputs na sala', () => {
        renderWithRouterAndRedux(<Login />)
        
        const emailInput = screen.getByTestId(/email-input/i);
        const passwordInput = screen.getByTestId("password-input");
        const signBtn = screen.getByRole('button');

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(signBtn).toBeInTheDocument();

    })

    it('Verificar se o botão é habilitado corretamente', () => {
        renderWithRouterAndRedux(<Login />);

        const emailInput = screen.getByTestId(/email-input/i);
        const passwordInput = screen.getByTestId(/password-input/i);
        const signBtn = screen.getByRole('button');

        userEvent.type(emailInput, 'test@test.com')
        userEvent.type(passwordInput, '123456')
        expect(signBtn).toHaveProperty('disabled', false)
    })

    it('Teste se o caminho da rota é correto após clicar no botão', () => {
        const { history } = renderWithRouterAndRedux(<App />)

        const emailInput = screen.getByTestId(/email-input/i);
        const passwordInput = screen.getByTestId(/password-input/i);
        const signBtn = screen.getByRole('button', { name: 'Entrar' });
        
        userEvent.type(emailInput, 'test@test.com');
        userEvent.type(passwordInput, '123456');
        userEvent.click(signBtn);
        
        expect(history.location.pathname).toBe('/carteira');
    })
})