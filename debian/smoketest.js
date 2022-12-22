'use strict';
try {
    const matchLoosely = require('..');
    const lodash = require('lodash');
    var blk=matchLoosely('blk', 'Arabic_PF_B');
    console.log(blk);
    if(lodash.isEqual(blk,{ property: 'Block', value: 'Arabic_Presentation_Forms_B' }))
	process.exit(0);
    else {
	process.stderr.write('not equal');
	process.exit(1);
    }
}
catch(e) {
    process.stderr.write(e.toString());
    process.exit(2);
}
