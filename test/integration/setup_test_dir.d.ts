/**
 * Sets up the given integration fixture with proper bower components.
 *
 * For wct to work it needs to be installed in the bower_components directory
 * (or, with variants, in each variant directory). So this copies the given
 * integration test fixture, then sets up symlinks from
 * bower_components/web-component-tester/browser.js to the browser.js of this
 * repo. It also makes symlinks for each of wct's bower dependencies into the
 * integration tests' bower_components dir.
 *
 * @param dirname The basename of an integration fixture directory.
 * @return A fully resolved path to a copy of the fixture directory with
 *   a proper bower_components directory.
 */
export declare function makeProperTestDir(dirname: string): Promise<string>;
