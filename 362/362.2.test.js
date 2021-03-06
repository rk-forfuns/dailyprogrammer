const { solve } = require("./362.2");

describe("363.2", () => {
  const examples = [
    [
      '"WE ARE DISCOVERED. FLEE AT ONCE" (9, 3) clockwise',
      "CEXXECNOTAEOWEAREDISLFDEREV"
    ],
    [
      '"why is this professor so boring omg" (6, 5) counter-clockwise',
      "TSIYHWHFSNGOMGXIRORPSIEOBOROSS"
    ],
    [
      '"Solving challenges on r/dailyprogrammer is so much fun!!" (8, 6) counter-clockwise',
      "CGNIVLOSHSYMUCHFUNXXMMLEGNELLAOPERISSOAIADRNROGR"
    ],
    [
      '"For lunch let\'s have peanut-butter and bologna sandwiches" (4, 12) clockwise',
      "LHSENURBGAISEHCNNOATUPHLUFORCTVABEDOSWDALNTTEAEN"
    ],
    [
      '"I\'ve even witnessed a grown man satisfy a camel" (9, 5) clockwise',
      "IGAMXXXXXXXLETRTIVEEVENWASACAYFSIONESSEDNAMNW"
    ],
    [
      '"Why does it say paper jam when there is no paper jam?" (3, 14) counter-clockwise',
      "YHWDSSPEAHTRSPEAMXJPOIENWJPYTEOIAARMEHENAR"
    ]
  ];

  examples.forEach(([input, expectedResult]) => {
    it(`should solve main task (input '${input}')`, () => {
      const result = solve(input);
      expect(result).toBe(expectedResult);
    });
  });
});
