import { render } from "@testing-library/react";
import { AuthProvider } from "../../../src/auth";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../../src/router/AppRouter";

describe("Pruebas en el <AppRouter />", () => {
    // test('Debe de mostrar el login si no está autenticado.', () => {

    //     const contextValue = {
    //         logged: false
    //     };

    //     render(
    //         <MemoryRouter initialEntries={['/marvel']}>
    //             <AuthProvider.Provider value={ contextValue } >
    //                 <AppRouter />
    //             </AuthProvider.Provider>
    //         </MemoryRouter>
    //     )

    //     expect( screen.getAllByText('Login').length ).toBe(2)
    // });

    test("Debe mostrar el componenete de Marvel si está autenticado", () => {
        const contextValue = {
            logged: false,
            user: {
                name: "Lucas",
                id: '12'
            }
        };

        render(
            <MemoryRouter initialEntries={["login"]}>
                <AuthProvider.Provider value={contextValue}>
                    <AppRouter />
                </AuthProvider.Provider>
            </MemoryRouter>
        );

        expect(screen.getAllByText("Marvel").length).toBeGreaterThan(1);
    });
});
