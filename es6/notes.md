# ES 6

Playing with TypeScript just a little this afternoon persuaded me that
familiarizing myself with ES 6 first would be smart, because TypeScript clearly
builds on that foundation.

I'm beginning to think it would be instructive to build a small Node CLI
project in each of them, just to see what's similar and what's different.

I could then also see if I can build up some tooling to get similar type
inference happening in native JS (Flow, or maybe JSDoc-Flow, or perhaps even
tern-lint?), and compare the experience.

A little research seems to show that current Node engines (6, 7, and 8) support
almost all of ES 6, so I guess I don't have to worry about using Babel if I use
one of them.

...okay, that turns out to be not true. Node 6 apparently does not support ES
modules: https://github.com/nodejs/help/issues/53

Thus, I will have to get Babel set up to write genuine ES 6 modules.

Similarity between TS and ES 6, then: you need transpilation for both (though
in a few years transpiling ES 6 will probably be fairly optional - not so for
TS).



So, I guess step one is reading about features
