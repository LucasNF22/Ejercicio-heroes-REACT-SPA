import { authReducer, types } from "../../../../src/auth";


describe('pruebas en authReducer.js', () => {

    test('Debe retornar el estado por defecto', () => {

        const state = authReducer( { logged: false }, {} );
        expect( state ).toEqual( { logged: false } );
    });

    test('(LOGIN) debe de llamar el login autenticar y establecer el user', () => {

        const action = {
            type: types.login,
            payload:{
                name: 'Lucas',
                id: '01'
            }
        };

        const state = authReducer({ logged: false }, action);
        expect( state ).toEqual({
            logged: true,
            user: action.payload    
        });
        
    });

    test('(LOGOUT) debe borrar el nombre del usuario y retornar el logged en false', () => {
        
        const state = {
            logged: true,
            user: { name: 'Lucas', id: '01' }
        };


        const action = {
            type: types.logout,           
        };
        
        const newState = authReducer( state, action);
        expect( newState ).toEqual( { logged: false } );

    });


});