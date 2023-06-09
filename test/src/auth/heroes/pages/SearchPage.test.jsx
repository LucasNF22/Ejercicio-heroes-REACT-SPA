import {  fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { SearchPage } from "../../../../../src/heroes/pages/SearchPage"

const mockedUseNavigate = jest.fn();

jest.mock( 'react-router-dom', () => ({
    
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));


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
        
        render(
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
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']} > 
                <SearchPage />  
            </MemoryRouter>
        );

        const alertResults = screen.getByLabelText('alert-results');
        expect( alertResults.style.display ).toBe('');
    })
    
//     test('Debe llamar al navigate a la nueva pantalla', () => {
        
//         render(
//             <MemoryRouter initialEntries={['/search?q=batman']} > 
//                 <SearchPage />  
//             </MemoryRouter>
//         );

//         const formValue = screen.getByRole('textbox').value;
//         const formBtn = screen.getByRole('button');

//         fireEvent.click(formBtn);

//         expect( mockedUseNavigate ).toHaveBeenCalledWith(`?q=${ formValue }`)
        

//     })

// })

    test('Debe llamar al navigate a la nueva pantalla', () => { 
        
        render(
            <MemoryRouter initialEntries={['/search']} > 
                <SearchPage />  
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change( input, { target: { name: 'searchText', value: 'spiderman'} } )

        const form = screen.getByRole( 'form' );
        fireEvent.submit( form )    

        expect( mockedUseNavigate ).toHaveBeenCalledWith("?q=spiderman");
        

    });

});