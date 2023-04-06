import { getByLabelText, getByText, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../../../src/heroes/pages/SearchPage"


describe('Pruebas en <SearchPage />', () => {

    test('Debe mostrarse correctamente con valores por defecto', () => {
        
        const { container } = render(
            <MemoryRouter> 
                <SearchPage />  
            </MemoryRouter>
        );

        expect( container ).toMatchSnapshot();        

    });
    
    test('Debe mostrar el resultado con el valor del input del queryString', () => {
        
        const { container } = render(
            <MemoryRouter initialEntries={['/search?q=batman']} > 
                <SearchPage />  
            </MemoryRouter>
        );

        const img = screen.getByRole('img');
        expect( img.src ).toContain( '/public/heroes/dc-batman.jpg' );
        
        const input = screen.getByRole('textbox');
        expect( input.value ).toBe( 'batman' );
        
        // screen.debug()

        const alertSearch = screen.getByLabelText('alert-search');
        const alertResults = screen.getByLabelText('alert-results');
            
        expect( alertSearch.style.display ).toBe('none');
        expect( alertResults.style.display ).toBe('none');
    });

    test('Debe mostrar error si no se encuentra el hero', () => {
        
        
    })
    
    test('Debe llamar al navigate a la nueva pantalla', () => {
        

    })

})