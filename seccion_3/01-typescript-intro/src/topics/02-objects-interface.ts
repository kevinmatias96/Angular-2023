
const skills: string[] = ['bash', 'counter', 'healing'];

interface caracter {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: caracter = {
    name: 'strider',
    hp: 100,
    skills: ['bash', 'counter']
}

strider.hometown = 'Rivendell'

console.table(strider)


export{}