import { describe, expect, it,   } from 'vitest'
import '@testing-library/jest-dom'
import App from './App'
import { render, screen  } from '@testing-library/react'

// npm run test

// getby___(conteúdo) -- busca o elemento especificado ("busque esse elemento")
// find___() -- 
// query__() -- 

// fireEvent.___() -- dispara um evento


// atentar-se aos métodos e props que são usados no componente para fazer o render, como Providers e etc.

describe('App', async () => {
    it('verifica se no App tem texto', () => {
        render(<App />)

        expect(screen.getByText('Oi esse é o teste')).toBeInTheDocument()
    })

    it('evento de click', () => {
        render(<App />)
        
        
    })
})