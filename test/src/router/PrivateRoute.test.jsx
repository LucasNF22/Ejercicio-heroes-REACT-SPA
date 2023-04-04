import { render, screen } from '@testing-library/react'
import { PrivateRoute } from '../../../src/router/PrivateRoute';
import { AuthContext } from '../../../src/auth'
import { MemoryRouter, Route, Routes } from 'react-router-dom';



describe('Pruebas en <PrivateRoute />', () => {

    test('Debe mostrar el children si esta autenticado', () => {

    Storage.prototype.setItem = jest.fn()

        const contextValue = {
            logged: true,
            user: {
                name: 'Lucas',
                id: '01'
            }
        }

        render( 
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter initialEntries={['lastPath', '/marvel?q=spiderman']}>
                    <PrivateRoute >
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        // screen.debug()

        expect( screen.getAllByText('Ruta Privada') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel?q=spiderman');

    });
})