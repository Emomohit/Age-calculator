export const zodiacs = [
    { sign: "Capricorn", element: "Earth", planet: "Saturn", color: "Brown", trait: "Ambitious & Disciplined", start: [1, 1], end: [1, 19] }, 
    { sign: "Aquarius", element: "Air", planet: "Uranus", color: "Blue", trait: "Progressive & Independent", start: [1, 20], end: [2, 18] },
    { sign: "Pisces", element: "Water", planet: "Neptune", color: "Sea Green", trait: "Compassionate & Intuitive", start: [2, 19], end: [3, 20] }, 
    { sign: "Aries", element: "Fire", planet: "Mars", color: "Red", trait: "Courageous & Confident", start: [3, 21], end: [4, 19] },
    { sign: "Taurus", element: "Earth", planet: "Venus", color: "Green", trait: "Reliable & Patient", start: [4, 20], end: [5, 20] }, 
    { sign: "Gemini", element: "Air", planet: "Mercury", color: "Yellow", trait: "Adaptable & Curious", start: [5, 21], end: [6, 20] },
    { sign: "Cancer", element: "Water", planet: "Moon", color: "Silver", trait: "Tenacious & Highly Imaginative", start: [6, 21], end: [7, 22] }, 
    { sign: "Leo", element: "Fire", planet: "Sun", color: "Gold", trait: "Creative & Passionate", start: [7, 23], end: [8, 22] },
    { sign: "Virgo", element: "Earth", planet: "Mercury", color: "Grey", trait: "Loyal & Analytical", start: [8, 23], end: [9, 22] }, 
    { sign: "Libra", element: "Air", planet: "Venus", color: "Pink", trait: "Cooperative & Diplomatic", start: [9, 23], end: [10, 22] },
    { sign: "Scorpio", element: "Water", planet: "Pluto", color: "Black", trait: "Brave & Passionate", start: [10, 23], end: [11, 21] }, 
    { sign: "Sagittarius", element: "Fire", planet: "Jupiter", color: "Purple", trait: "Generous & Idealistic", start: [11, 22], end: [12, 21] },
    { sign: "Capricorn", element: "Earth", planet: "Saturn", color: "Brown", trait: "Ambitious & Disciplined", start: [12, 22], end: [12, 31] }
];

export const chineseZodiacs = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep"];

export function getAstrologyProfile(dob) {
    const y = dob.getFullYear(); 
    const m = dob.getMonth() + 1; 
    const d = dob.getDate();
    const z = zodiacs.find(z => (m === z.start[0] && d >= z.start[1]) || (m === z.end[0] && d <= z.end[1]));
    
    return {
        "Western Zodiac": z ? z.sign : "Unknown",
        "Core Trait": z ? z.trait : "Unknown",
        "Lucky Color": z ? z.color : "Unknown",
        "Ruling Element": z ? z.element : "Unknown",
        "Ruling Planet": z ? z.planet : "Unknown",
        "Chinese Zodiac": chineseZodiacs[y % 12]
    };
}
