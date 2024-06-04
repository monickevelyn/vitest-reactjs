import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom'
import sum from './sum'

describe('sum', async () => {
    it('verifica se a função sum está ok', () => {
        expect(sum(1, 1)).toBe(2)
    })
})