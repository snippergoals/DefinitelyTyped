import codeFrame from "babel-code-frame";

describe('babel-code-frame', () => {
    it('frames given code', () => {
        const code = `
            const number = 1;
            var string = 'foo';

            function print(name: string) {
                console.log(string + name);
            }
        `;

        codeFrame(code, 5, 22);
        codeFrame(code, 5, 22, { forceColor: true });
        codeFrame(code, 2, 2, { highlightCode: true });
    });
});
