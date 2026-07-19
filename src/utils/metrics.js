export function getChronology(dob, now) {
    const diffMs = now - dob;
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    const diffYears = diffDays / 365.25;
    
    return {
        diffDays,
        diffYears,
        diffMs,
        display: {
            "Years Lived": Math.floor(diffYears),
            "Months Lived": Math.floor(diffYears * 12),
            "Weeks Lived": Math.floor(diffDays / 7),
            "Days Lived": Math.floor(diffDays).toLocaleString(),
            "Hours Lived": Math.floor(diffDays * 24).toLocaleString(),
            "Minutes Lived": Math.floor(diffDays * 24 * 60).toLocaleString(),
            "Seconds Lived": Math.floor(diffMs / 1000).toLocaleString()
        }
    };
}

export function getBiologicalEstimates(diffDays) {
    return {
        "Heartbeats (Avg)": Math.floor(diffDays * 24 * 60 * 80).toLocaleString(),
        "Breaths Taken (Avg)": Math.floor(diffDays * 24 * 60 * 16).toLocaleString(),
        "Hours Slept": Math.floor((diffDays * 8)).toLocaleString(),
        "Dreams Had": Math.floor((diffDays * 4)).toLocaleString(),
        "Steps Taken": Math.floor(diffDays * 5000).toLocaleString(),
        "Food Eaten (kg)": Math.floor(diffDays * 1.5).toLocaleString(),
        "Water Drank (L)": Math.floor(diffDays * 2.5).toLocaleString(),
        "Hair Grown (cm)": (diffDays * 0.04).toFixed(1),
        "Nails Grown (cm)": (diffDays * 0.01).toFixed(1),
        "Skin Shed (kg)": (diffDays * 0.011).toFixed(1)
    };
}

export function getPlanetaryAges(diffDays) {
    const planets = { Mercury: 87.97, Venus: 224.7, Mars: 686.98, Jupiter: 4332.59, Saturn: 10759, Uranus: 30685, Neptune: 60189 };
    let data = {};
    for (const [planet, days] of Object.entries(planets)) {
        data[`Age on ${planet}`] = (diffDays / days).toFixed(2);
    }
    return data;
}

export function getAnimalAges(diffYears) {
    const animals = { Dog: 7, Cat: 4, Turtle: 0.5, Rabbit: 10, Elephant: 1.5, Horse: 3, Mouse: 40 };
    let data = {};
    for (const [animal, multiplier] of Object.entries(animals)) {
        data[`Age in ${animal} Years`] = (diffYears * multiplier).toFixed(1);
    }
    return data;
}

export function getMilestones(dob, now) {
    const nextBday = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
    if (now > nextBday) nextBday.setFullYear(now.getFullYear() + 1);
    
    return {
        "Next Birthday In": Math.ceil((nextBday - now) / 86400000) + " Days",
        "10,000 Days Old": new Date(dob.getTime() + (10000 * 86400000)).toLocaleDateString(),
        "20,000 Days Old": new Date(dob.getTime() + (20000 * 86400000)).toLocaleDateString(),
        "1 Billion Seconds": new Date(dob.getTime() + (1000000000 * 1000)).toLocaleDateString()
    };
}
