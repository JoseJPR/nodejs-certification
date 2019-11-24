# NodeJS Certification [![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

![Logo OpenJS](https://www.linuxfoundation.org/wp-content/uploads/2019/03/openjsf-color.png)

## Description

The OpenJS Foundation is committed to growing our community of hosted projects. We believe it is important to foster a broad range of skills within the contributor and implementer communities, enabling continued and sustained adoption of JavaScript and related technologies.

[OpenJS Fundation](https://openjsf.org)

The OpenJS Node.js Application Developer certification is ideal for the Node.js developer with at least two years of experience working with Node.js.

[Application Developer (JSNAD)](https://training.linuxfoundation.org/certification/jsnad/)

This repository contains practical examples for each of the points in the official NodeJS documentation for the preparation of NodeJS certification.

## 📖 Temary

[Usage & Example](https://nodejs.org/api/synopsis.html) \
[Assertion Testing](https://nodejs.org/api/assert.html) \
[Buffer](https://nodejs.org/api/buffer.html) \
[Child Processes](https://nodejs.org/api/child_process.html) \
[Cluster](https://nodejs.org/api/cluster.html) \
[Command Line Options](https://nodejs.org/api/cli.html) \
[Console](https://nodejs.org/api/console.html) \
[Crypto](https://nodejs.org/api/crypto.html) \
[Debugger](https://nodejs.org/api/debugger.html) \
[DNS](https://nodejs.org/api/dns.html) \
[Domain](https://nodejs.org/api/domain.html) \
[ECMAScript Modules](https://nodejs.org/api/esm.html) \
[Errors](https://nodejs.org/api/errors.html) \
[Events](https://nodejs.org/api/events.html) \
[File System](https://nodejs.org/api/fs.html) \
[Globals](https://nodejs.org/api/globals.html) \
[HTTP](https://nodejs.org/api/http.html) \
[HTTP/2](https://nodejs.org/api/http2.html) \
[HTTPS](https://nodejs.org/api/https.html) \
[Inspector](https://nodejs.org/api/inspector.html) \
[Internationalization](https://nodejs.org/api/intl.html) \
[Modules](https://nodejs.org/api/modules.html) \
[Net](https://nodejs.org/api/net.html) \
[OS](https://nodejs.org/api/os.html) \
[Path](https://nodejs.org/api/path.html) \
[Performance Hooks](https://nodejs.org/api/perf_hooks.html) \
[Policies](https://nodejs.org/api/policy.html) \
[Process](https://nodejs.org/api/process.html) \
[Punycode](https://nodejs.org/api/punycode.html) \
[Query Strings](https://nodejs.org/api/querystring.html) \
[Readline](https://nodejs.org/api/readline.html) \
[REPL](https://nodejs.org/api/repl.html) \
[Report](https://nodejs.org/api/report.html) \
[Stream](https://nodejs.org/api/stream.html) \
[String Decoder](https://nodejs.org/api/string_decoder.html) \
[Timers](https://nodejs.org/api/timers.html) \
[TLS/SSL](https://nodejs.org/api/tls.html) \
[Trace Events](https://nodejs.org/api/tracing.html) \
[TTY](https://nodejs.org/api/tty.html) \
[UDP/Datagram](https://nodejs.org/api/dgram.html) \
[URL](https://nodejs.org/api/url.html) \
[Utilities](https://nodejs.org/api/util.html) \
[V8](https://nodejs.org/api/v8.html) \
[VM](https://nodejs.org/api/vm.html) \
[Worker Threads](https://nodejs.org/api/worker_threads.html) \
[Zlib](https://nodejs.org/api/zlib.html)

## 💪 JSNAD Domains & Competencies

- Buffer and Streams – 11%
  - Node.js Buffer API’s
  - Incremental Processing
  - Transforming Data
  - Connecting Streams
- Control flow – 12%
  - Managing asynchronous operations
  - Control flow abstractions
- Child Processes – 8%
  - Spawning or Executing child processes
  - Child process configuration
- Diagnostics – 6%
  - Debugging Node.js
  - Basic performance analysis
- Error Handling – 8%
  - Common patterns
  - Handling errors in various scenarios
- Node.js CLI – 4%
  - Node executable command line flags
- Events – 11%
  - The event system
  - Building event emitters
  - Consuming event emitters
- File System – 8%
  - Input/output
  - Watching
- JavaScript Prerequisites – 7%
  - Language fundamentals
  - Scoped to core language features introduced since EcmaScript 1 and still heavily used today
- Module system – 7%
  - CommonJS Module System only
- Process/Operating System – 6%
  - Controlling the process
  - Getting system data
- Package.json – 6%
  - Package configuration
  - Dependency management
- Unit Testing – 6%
  - Using assertions
  - Testing synchronous code
  - Testing asynchronous code

## 🌍 Websites of Interest

- Generic \
  [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
  [Education in Node.js](https://github.com/nodejs/education)

- Child Processes \
  [Node.js Child Processes: Everything you need to know](https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/)
  [Understanding execFile, spawn, exec, and fork in Node.js](https://dzone.com/articles/understanding-execfile-spawn-exec-and-fork-in-node)

## 📌 Methodologies and Guidelines

ESTlint, tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. \
  [NPM ESLint](https://www.npmjs.com/package/eslint) \
  [NPM ESLint | Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

## 📐 Infrastructure

### Install NodeJS Dependences

```bash
$npm i
```

### Running the App

```bash
# Run
$node  --experimental-modules ./src/'folder'/'file.mjs'
```

## 📂 Code scaffolding

```any
/
├── assets 🌈                 # Images Sources.
|   └── ...                   # ...
|   |
├── env 🔌                    # Configure enviroments deploy.
|   └── ...                   # ...
|   |
├── src 💯
|   ├── usage-example         # Usage & Example.
|   |   ├── example01         # Http server return pain text.
|   |   └── example02         # Http server return json object.
|   |
|   ├── assertion-testing     # Assertion Testing.  
|   |   ├── example01         # Equal numbers or not with assert.strictEqual method.
|   |   ├── example02         # Equal numbers and string or not with assert.equal method.
|   |   ├── example03         # Equal arrays values and structure or not with strict.deepEqual method.
|   |   ├── example04         # Equal objects values and structure or not with strict.deepEqual method.
|   |   └── example05         # Http request with Reject results and objects results with structure and typeof control.
|   |
|   ├── async-hooks           # Async Hooks.
|   |   ├── example01         # Create http server with external request to get content. This functions launch async hooks and save into .log file.
|   |   ├── test.log          # Log example file.
|   |   └── ...               # ...
|   |
|   ├── buffer                # Buffer.
|   |   ├── example01         # Create first safe and not Buffer empty and with string.
|   |   ├── example02         # Get length of string and buffer string.
|   |   ├── example03         # Is Buffer and is Encoding functions.
|   |   ├── example04         # Work with compare, concat, equal, includes, indexOf, lastIndeOf, keys and slice functions.
|   |   ├── example05         # Work with toString and toJSON functions.
|   |   └── ...               # ...
|   |
|   ├── child-processes       # Child Processes.
|   |   ├── example01         # spawn function.
|   |   ├── example02         # exec and execSync functions.
|   |   ├── example03         # spawn and spawnSync functions.
|   |   ├── example04         # exec and spawn functions with custom sh file.
|   |   ├── example05         # exec and spawn functions with magick tool (you need install imagemagick library).
|   |   ├── example06         # execFile and execFileSync functions.
|   |   ├── example07         # fork function with example messages to childs.
|   |   ├── example07-sub01   # sub process message fork function.
|   |   ├── example07-sub01   # sub process message fork function.
|   |   ├── example08         # fork function with process ls and sh.
|   |   ├── example08-sub01   # sub process spawnSync ls fork function.
|   |   ├── example08-sub01   # sub process spawnSync sh fork function.
|   |   ├── test.sh           # Sh example file.
|   |   ├── cat.jpg           # Image cat example.
|   |   └── ...               # ...
|   |
|   ├── cluster               # Cluster.
|   |   ├── example01         # Show CPUs number and create a cluster for each core.
|   |   └── ...               # ...
|   |
|   └── ...
└── ...
```

## ⛽️ Review and Update Dependences

For review and update all npm dependences of this project you need install in global npm package "npm-check-updates" npm module.

```bash
# Install and Run
$npm i -g npm-check-updates
$ncu
```

## Happy Code

Created with JavaScript, lot of ❤️ and a few ☕️

## This README.md file has been written keeping in mind

- [GitHub Markdown](https://guides.github.com/features/mastering-markdown/)
- [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)