import { fireEvent, render, screen } from '@testing-library/react';
import { AuthContext } from '../../../../src/auth';
import { PrivateRoute } from '../../../../src/router/PrivateRoute';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { Navbar } from '../../../../src/ui';

const mockedUseNavigate = jest.fn();

jest.mock( 'react-router-dom', () => ({
    
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en el <Navbar />', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Lucas',
            id: '123',
        },
        logout: jest.fn()

    };

    beforeEach( ()=> jest.clearAllMocks() );



    test('Debe mostrar el nombre de usuario si esta logueado', () => {

        

        render(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter initialEntries={["/marvel"]}>
                    <PrivateRoute >
                        <Navbar/>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Lucas') ).toBeTruthy()

    });

    test('Al hacer click en el boton, debe llamar al logout y al Navigate', () => {

        render(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter initialEntries={["/marvel"]}>
                    <PrivateRoute >
                        <Navbar/>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);
        
        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true});

    });


});
