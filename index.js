import isServer from './utils/is-server.js'
import $fetch from './utils/fetch.js'
import applyRelativePathPackages from './utils/apply-relative-path-packages.js'
import CmsifyHtmlFlag from './utils/cmsify-html-flag.js'
import cmsifyGetHtmlFlags from './utils/cmsify-get-html-flags.js'
import routeParser from './utils/route-parser.js'

const cmsifyPrefix = '/cmsify'

export { cmsifyPrefix, isServer, $fetch, applyRelativePathPackages, CmsifyHtmlFlag, cmsifyGetHtmlFlags, routeParser }
export default { cmsifyPrefix, isServer, $fetch, applyRelativePathPackages, CmsifyHtmlFlag, cmsifyGetHtmlFlags, routeParser }