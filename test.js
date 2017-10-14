"use strict";

const assert = require("assert");
const RuleTester = require("eslint").RuleTester;
const noRegionRule = require(".").rules["no-region"];

const ruleTester = new RuleTester();

// Ugh
const input = `
//#region lol
foo();
//#endregion
`;

// Ahh...
const output = `

foo();

`;

ruleTester.run("no-region", noRegionRule, {
  valid: [
    {
      code: "//#this is fine"
    }
  ],

  invalid: [
    {
      code: input,
      errors: [
        { message: "Do not use vscode fold regions" },
        { message: "Do not use vscode fold regions" }
      ],
      output
    },
  ]
});
