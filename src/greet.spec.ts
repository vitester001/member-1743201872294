import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
    it('should return default greeting with name when no greeting provided', () => {
        expect(greet('John')).toBe('Hello, John!');
    });

    it('should return custom greeting with name when greeting provided', () => {
        expect(greet('John', 'Hi')).toBe('Hi, John!');
    });

    it('should work with empty string name', () => {
        expect(greet('')).toBe('Hello, !');
    });

    it('should work with empty string greeting', () => {
        // Empty string greeting should still use default greeting
        expect(greet('John', '')).toBe('Hello, John!');
    });

    it('should work with special characters in name', () => {
        expect(greet('John@123')).toBe('Hello, John@123!');
    });

    it('should work with special characters in greeting', () => {
        expect(greet('John', 'Hey!!!')).toBe('Hey!!!, John!');
    });

    it('should work with whitespace in name', () => {
        expect(greet('John Doe')).toBe('Hello, John Doe!');
    });

    it('should work with whitespace in greeting', () => {
        expect(greet('John', 'Good morning')).toBe('Good morning, John!');
    });
});
