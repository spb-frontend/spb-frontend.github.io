'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

require('babel-core/register');
require('babel-polyfill');

var path = require('path');
var RSS = require('rss');

var _require = require('./internals'),
    defaultOptions = _require.defaultOptions,
    runQuery = _require.runQuery,
    writeFile = _require.writeFile;

var publicPath = './public';

// A default function to transform query data into feed entries.
var serialize = function serialize(_ref) {
  var site = _ref.site,
      allMarkdownRemark = _ref.allMarkdownRemark;
  return allMarkdownRemark.edges.map(function (edge) {
    return Object.assign({}, edge.node.frontmatter, {
      description: edge.node.excerpt,
      url: edge.node.frontmatter.link,
      guid: edge.node.frontmatter.link,
      image: edge.node.frontmatter.image,
      custom_elements: [{ 'content:encoded': edge.node.html }]
    });
  });
};

exports.onPostBuild = function () {
  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref2, pluginOptions) {
    var graphql = _ref2.graphql;

    var _Object$assign, query, setup, feeds, rest, globals, _loop, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, f;

    return regeneratorRuntime.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            delete pluginOptions.plugins;

            /*
             * Run the site settings query to gather context, then
             * then run the corresponding feed for each query.
             */
            _Object$assign = Object.assign({}, defaultOptions, pluginOptions), query = _Object$assign.query, setup = _Object$assign.setup, feeds = _Object$assign.feeds, rest = _Object$assign.rest;
            _context2.next = 4;
            return runQuery(graphql, query);

          case 4:
            globals = _context2.sent;


            /* TODO: придумать решение получше */
            globals.site.siteMetadata = globals.site.siteMetadata.podcast;

            _loop = regeneratorRuntime.mark(function _loop(f) {
              var locals, output, ctx, feed, items;
              return regeneratorRuntime.wrap(function _loop$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      locals = {};

                      if (!f.query) {
                        _context.next = 5;
                        break;
                      }

                      _context.next = 4;
                      return runQuery(graphql, f.query);

                    case 4:
                      locals = _context.sent;

                    case 5:
                      output = path.join(publicPath, f.output);
                      ctx = Object.assign({}, globals, locals);
                      feed = new RSS(setup(Object.assign({}, rest, ctx)));
                      items = f.serialize ? f.serialize(ctx) : serialize(ctx);


                      items.forEach(function (i) {
                        return feed.item(i);
                      });

                      _context.next = 12;
                      return writeFile(output, feed.xml());

                    case 12:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _loop, undefined);
            });
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context2.prev = 10;
            _iterator = feeds[Symbol.iterator]();

          case 12:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context2.next = 18;
              break;
            }

            f = _step.value;
            return _context2.delegateYield(_loop(f), 't0', 15);

          case 15:
            _iteratorNormalCompletion = true;
            _context2.next = 12;
            break;

          case 18:
            _context2.next = 24;
            break;

          case 20:
            _context2.prev = 20;
            _context2.t1 = _context2['catch'](10);
            _didIteratorError = true;
            _iteratorError = _context2.t1;

          case 24:
            _context2.prev = 24;
            _context2.prev = 25;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 27:
            _context2.prev = 27;

            if (!_didIteratorError) {
              _context2.next = 30;
              break;
            }

            throw _iteratorError;

          case 30:
            return _context2.finish(27);

          case 31:
            return _context2.finish(24);

          case 32:
            return _context2.abrupt('return', Promise.resolve());

          case 33:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee, undefined, [[10, 20, 24, 32], [25,, 27, 31]]);
  }));

  return function (_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();