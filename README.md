# Testing Hyperapp tick-tac-toe

So I spent under 2 hours testing [Hyperapp](https://hyperapp.dev/) by doing a
really simple tick-tac-toe game.

## Test it out!

The game is playable at the github pages page:

https://jehna.github.io/testing-hyperapp-tic-tac-toe/

### Test it out locally

Clone the repository and run:

```
yarn # Installs deps
yarn start # Starts a simple web server that serves the `src/` folder as is
```

## License

This code is published under the MIT license

## Contributing

Well, this was a very quick prototype and I don't intend to continue developing
this any further, so 🤷‍♀️

# What's the verdict?

Here are my thoughts about Hyperapp based on this small prototype:

TL;DR So while I think Hyperapp is a minimalistic framework that implements a
few great ideas, it's still a framework and suffers (like most frameworks) from
sprinkling magic dust all around, and while advertising to be minimal, it
manages to do too much in my opinion.

## Pros

I just love the developer experience from start to first render. Just check out
this repo — there's no build step or even npm dependencies needed. The
`index.html` just includes a single script as a `type="module"` and that's it. I
even hacked so I can use component-based CSS files.

I love that I can use "just plain JS" without any magic to compose my VDOM.
Although it's probably going to be unoptimal for bigger sites (if not split
into _gasp_ **micro-frontends**), it's probably just fine for smaller projects.
VDOM is the biggest optimization for subsequent renders anyway, so it's not like
you're building the full DOM from scratch every time something changes.

I love the size of the framework. This whole prototype weighs ~7.5kB (gzipped),
while an empty create-react-app is something like 200kB (gzipped) nowadays. More
is not always more.

## What I missed

I wish I could have had the framework split to a few different building blocks,
which would be replaceable so I could pick my own combination and extend it when
needed.

I also wish it would have used Typescript, although the best part (setup) would
probably not have been that seamless. But I guess one could configure a similar
setup that I had with `tsc` building the sources to a similar folder structure?

And where's the router for this framework? If the benefit of a framework would
be to come "batteries included", it probably should include a router too.

Server-side rendering, anyone? And after that I'd like to have the hydration
stuff like with React. But that's a very minor nag.

## The bad and the awful

When writing this out the framework is at version 2.0.4, but website's pages
[guides](https://hyperapp.dev/guides) and
[ecosystem](https://hyperapp.dev/ecosystem) have lorem ipsum as their content.

While you probably get the whole idea from the ["tutorial" part of the
website](https://hyperapp.dev/tutorial), having at least API reference is the
minimal thing I expect from a tool I use.

And then there's the magic. The author has probably started with a minimal
example, and when in doubt used tuples. So the API is not consistent, it's full
of magic values and stuff does not work like one would expect because of this.

I'll give you an example.

I started with my state being a 2-dimensional "board", so with a value of
`[[],[],[]]`. But as the framework has double meanings for arrays as almost
every argument you can use, this just didn't work:

```js
app({
  init: [[],[],[]],
  view: (state) => ...
})
```

Why, you might ask? The tutorial says `init: 0` is a perfectly valid state, as
is `init: {}`. But you just **need to know** that you cannot use array values as
state because arrays are used as magic values.

While the
functional-extra-layer-for-action-effects-to-make-them-testable-and-whatnot-thinge
looks great on paper, it's really just an annoying extra sprinkle of magic that
you'll need to learn (and remember) to get productive with the framework. I
would have loved if this was a module I could choose not to use. The VDOM part
is plain and simple, so I'd expect the rest of the framework to be as simple to
understand and use.

The subscription system is awkward, because it assumes that subscriptions are
always global. While you can fire actions straight from the context of your view
component, and even return side-effects for them, subscriptions are defined at
the root level. React has the `useEffect` hook, which allows to keep all related
code close to each other, but with Hyperapp's subscription system it was not
possible.

## Conclusion

Hyperapp is indeed a fresh take on what a simple webapp framework could look
like, but it's not something I'd recommend to use in a serious project just yet.
The version 2.0.4 is quite optimistic (I'd assume this is 0.2.4), and I hope the
API goes through a few iterations in the future.

The buzzword bingo hits topics that interest me perfectly (minimalistic, purely
functional), it unfortunately misses the target of delivering those values.

All in all, this looks promising and I hope the future of setting up web
development will be as effortless as it was when using Hyperapp.
