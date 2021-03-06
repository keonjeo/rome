import {parseMarkdown} from "@internal/markdown-parser";
import {createFixtureTests} from "@internal/test-helpers";
import {removeCarriageReturn} from "@internal/string-utils";

const promise = createFixtureTests(async (fixture, t) => {
	const {files} = fixture;
	const inputFile = files.assert("input.md");

	const filename = inputFile.relative;

	const inputContent = removeCarriageReturn(inputFile.content.toString());

	const ast = parseMarkdown({
		input: inputContent,
		path: filename,
	});

	const outputFile = inputFile.absolute.getParent().append(
		inputFile.absolute.getExtensionlessBasename(),
	).join();

	t.snapshot(ast, undefined, {filename: outputFile});
});

// @ts-ignore Doesn't support top-level await lol
await promise;
