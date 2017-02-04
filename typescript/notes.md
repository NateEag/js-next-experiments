# TypeScript Notes


## Code Intelligence

Looks like tsserver is a built-in standalone code analysis engine, which is a
nice touch. Means it should be easy to use whatever editor you like.

tide-mode appears to be the standard tool for interacting with it in Emacs.
How's that work?

Looks like jump-to-def does indeed work just fine after turning it on.

Autocompletion seems like it needs more effort to integrate, though. ...ahhhh,
that's because it only ships with company-mode support, I gather. I've heard
it's not too hard to adapt company


## REPL

I reeeeally prefer languages with a REPL.

TypeScript, as a transpiled, statically-typed language, may not have a
satisfactory one.

tsun is the first one Google knows about. Installing it in my dotfiles'
node_modules collection failed, which is not inspiring.

Installing it globally worked, but I had to manually install typescript
globally too, which does not seem... optimal.

So, can I actually use the REPL usefully?

hmmm. So far I don't seem to be able to import anything.

That seems to be due to me not understanding how TypeScript module definitions
work, though.


## Suspected Weaknesses

Most of the code in the web universe is JS. That is, of course, not
strongly-typed, so any time you use it, you lose TS's typing guarantees.

There are apparently some workarounds for this - understand them and see how
painful they sound.

This is kind of a big hole, though.

Also, you're stuck in extended-language-land. Dropping back to pure JS would
never really be feasible, and if TypeScript ever ceased to be maintained, you'd
have to.

Sure, you could just transpile it to ES 6 and commit that, but I'm guessing the
generated code would be annoying to work with.


## ES6

I've been meaning to understand ES 6 for a while.

After a few hours of poking at TypeScript, I'm thinking I need to actually
learn ES 6 properly, because TypeScript 2 clearly builds on top of ES 6. Except
where it diverges, as modules seem to do.

So, I guess I should start to run down that rabbit hole first.
