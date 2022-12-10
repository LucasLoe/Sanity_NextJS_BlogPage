import LightenDarkenColor from "./LightenDarkenColor";

export default function GenerateColorShades(color, name='unnamed') {

    function range(start, stop, step) {
        var a = [start], b = start;
        while (b < stop) {
            a.push(b += step || 1);
        }
        return a;
    }

    let numberRange = range(-100, 100, 10);

    let colorMap = {
        "c-100": LightenDarkenColor(color, 10),
        "c-300": LightenDarkenColor(color, 30),
        "c-500": LightenDarkenColor(color, 50),
        "c-700": LightenDarkenColor(color, 70),
        "c-900": LightenDarkenColor(color, 90),
    }

    return colorMap
}