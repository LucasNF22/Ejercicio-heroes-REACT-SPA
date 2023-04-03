import { types } from "../../../../../src/auth"

describe('Pruebas en yypes.js', () => {

    test('Debe regresar los types', () => {

        expect( types ).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        })
    })

})