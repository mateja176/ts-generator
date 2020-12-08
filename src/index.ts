import * as fs from 'fs';
import { join } from 'path';
import ts from 'typescript';

const prog = ts.factory.createInterfaceDeclaration([], [], 'Test', [], [], []);

const printer = ts.createPrinter();

fs.writeFile(
  join(__dirname, '..', 'out', 'program.ts'),
  printer.printNode(
    ts.EmitHint.Unspecified,
    prog,
    ts.createSourceFile(
      join(__dirname, '..', 'out', 'program.ts'),
      '',
      ts.ScriptTarget.Latest,
    ),
  ),
  (err) => {
    console.error(err);
  },
);
