# quitjs [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> resignation letter in seconds

this is a Node.js app that makes a PDF resignation letter based on given parameters or default values.
I made this for fun and a quick hands on with Node.js.

## Note
It currently only works with Persian (fa-IR) language.

## Usage

clone this repo and run following in the folder. all options must be in Persian and if any of them isn't provided it will be filled up with default values.

The output file is ``quit.pdf``

```sh
node QUIT.js {First Name} {Last Name} {Employee Number} {Reason for Quitting}
```
## License

MIT © [Reza Arani Kashani]()


[npm-image]: https://badge.fury.io/js/quitjs.svg
[npm-url]: https://npmjs.org/package/quitjs
[travis-image]: https://travis-ci.org/RezaTheGreat/quitjs.svg?branch=master
[travis-url]: https://travis-ci.org/RezaTheGreat/quitjs
[daviddm-image]: https://david-dm.org/RezaTheGreat/quitjs.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/RezaTheGreat/quitjs
