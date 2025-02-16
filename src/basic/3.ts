// ! Створіть змінну, яка може містити або рядок, або число(union type)

let unionType: string | number;
unionType = 1;
unionType = "Hello World";
// unionType = false; ПОМИЛКА Type 'boolean' is not assignable to type 'string | number'.

console.log("unionType: ", unionType);

// ? Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable'(literal type).

type literalType = "enable" | "disable";

let statusValue: literalType;

statusValue = "enable";
statusValue = "disable";
// statusValue = "1";  ПОМИЛКА Type '"1"' is not assignable to type 'literalType'.

console.log("statusValue: ", statusValue)
