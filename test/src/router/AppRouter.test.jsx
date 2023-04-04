
import { AuthContext } from "../../../src/auth"
import { MemoryRouter } from "react-router-dom"
import { AppRouter } from "../../../src/router/AppRouter"
import { render } from "@testing-library/react"


describe('Pruebas en el <AppRouter />', () => { 

    test('Debe de mostrar el Login si no esta autenticado', () => {
        
        const contextValue = {
            logged: false,
        };

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue } >
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
            
        );
        

    })
})