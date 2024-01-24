function readLines() { // FIXME what's the return type?
    const myAsyncIterable: any = {};
    myAsyncIterable[Symbol.asyncIterator] = async function* () {
        yield "hello";
        yield "async";
        yield "iteration!";
    };
    return myAsyncIterable;
}

async function hello() {
    for await (const line of readLines()) {
        console.log('line', line);
    }

}

hello().catch(console.error);

