/*
    El orden de esta lista define que token se elije si una expresion 
    coincide en dos definiciones (Tiene prioridad la que este definida mas arriba)
*/
let definiciones = [
    [
        'Asign',
        '=',
        transicionDefault,
    ],
    [
        'Asign',
        ':=',
        transicionDefault,
    ],
    [
        'OpRel',
        '<',
        transicionDefault,
    ],
    [
        'OpRel',
        '>',
        transicionDefault,
    ],
    [
        'OpRel',
        '==',
        transicionDefault,
    ],
    [
        'OpRel',
        '!=',
        transicionDefault,
    ],
    [
        'OpRel',
        '<=',
        transicionDefault,
    ],
    [
        'OpRel',
        '>=',
        transicionDefault,
    ],
    [
        'OpMat',
        '+',
        transicionDefault,
    ],
    [
        'OpMat',
        '-',
        transicionDefault,
    ],
    [
        'OpMat',
        '*',
        transicionDefault,
    ],
    [
        'OpMat',
        '/',
        transicionDefault,
    ],
    [
        'Punct',
        ',',
        transicionDefault,
    ],
    [
        'Punct',
        ';',
        transicionDefault,
    ],
    [
        'ParOp',
        '(',
        transicionDefault,
    ],
    [
        'ParCl',
        ')',
        transicionDefault,
    ],
    [
        'BrcOp',
        '{',
        transicionDefault,
    ],
    [
        'BrcCl',
        '}',
        transicionDefault,
    ],
    [
        'Cond',
        'IF',
        transicionDefault,
    ],
    [
        'Type',
        'INT',
        transicionDefault,
    ],
    [
        'Type',
        'FLOAT',
        transicionDefault,
    ],
    [
        'Loop',
        'FOR',
        transicionDefault,
    ],
    [
        'Loop',
        'WHILE',
        transicionDefault,
    ],
    [
        'Id',
        'a',
        transicionAlfabetica,
    ],
    [
        'Num',
        'a',
        transicionNumerica,
    ],
];