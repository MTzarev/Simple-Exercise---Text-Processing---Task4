function test4(text, searched) {
    //let words = text.split(` `);
    let counter = 0;
    for (const word of text.split(` `)) {
        if (word === searched) {
            counter++;
        }
    }
    console.log(counter);
}
test4('Bulgaria is the best country for leaving. There have a many oportunity for learning a new way to develep yourself',
    'is');