import * as fs from 'fs';
import { join } from 'path';
import prettier from 'prettier';
import ts from 'typescript';

const prog = ts.factory.createInterfaceDeclaration(
  [],
  [],
  'Test',
  [],
  [],
  [
    ts.factory.createPropertySignature(
      [],
      'a',
      undefined,
      ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
    ),
  ],
);

const printer = ts.createPrinter();

const source = printer.printNode(
  ts.EmitHint.Unspecified,
  prog,
  ts.createSourceFile(
    join(__dirname, '..', 'out', 'program.ts'),
    '',
    ts.ScriptTarget.Latest,
  ),
);

fs.writeFile(
  join(__dirname, '..', 'out', 'program.ts'),
  prettier.format(source, { parser: 'typescript', singleQuote: true }),
  (err) => {
    if (err) {
      console.error(err);
    }
  },
);
