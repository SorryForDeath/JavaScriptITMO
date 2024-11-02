function solveCramer(a1, b1, c1, a2, b2, c2) {
    const D = a1 * b2 - a2 * b1;
    if (D === 0) {
        return "Система уравнений не имеет решений (или имеет бесконечно много)";
    }
    const Dx = c1 * b2 - c2 * b1;
    const Dy = a1 * c2 - a2 * c1;
    const x = Dx / D;
    const y = Dy / D;
    return { x, y };
}
const a1 = 3, b1 = 4, c1 = 5;
const a2 = 5, b2 = 4, c2 = 3;
const solution = solveCramer(a1, b1, c1, a2, b2, c2);

if (typeof solution === "string") console.log(solution);
else console.log(`x = ${solution.x}, y = ${solution.y}`);
