import { describe, it, expect } from 'vitest';
import { getAstrologyProfile } from './astrology';

describe('Astrology Logic', () => {
    it('should correctly identify Capricorn for Jan 1', () => {
        const dob = new Date(1995, 0, 1); // Month is 0-indexed in JS Date (0 = Jan)
        const profile = getAstrologyProfile(dob);
        expect(profile["Western Zodiac"]).toBe("Capricorn");
        expect(profile["Ruling Element"]).toBe("Earth");
    });

    it('should correctly identify Leo for Aug 1', () => {
        const dob = new Date(2000, 7, 1);
        const profile = getAstrologyProfile(dob);
        expect(profile["Western Zodiac"]).toBe("Leo");
        expect(profile["Ruling Planet"]).toBe("Sun");
    });
});
