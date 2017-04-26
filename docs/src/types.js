/**
 * @typedef {Object} FieldType
 * @property {string} key
 * @property {string} type
 * @property {?*} value
 */

/**
 * @typedef {Object} DoctrineType
 * @property {?Array<DoctrineType>} elements
 * @property {?Array<FieldType>} fields
 * @property {?Array<CommentTag>} applications
 * @property {?DoctrineType} expression
 * @property {?Array<DoctrineType>} applications
 * @property {string} type
 * @property {?string} name
 * @property {?string} key
 */

/**
 * @typedef {Object} CommentTag
 * @property {?string} name
 * @property {string} title
 * @property {?Object} description
 * @property {?*} default
 * @property {number} lineNumber
 * @property {?DoctrineType} type
 * @property {?Array<CommentTag>} properties
 */

/**
 * @typedef {Object} Remark
 * @property {string} type
 * @property {Array<Object>} children
 */

/**
 * @typedef {'private' | 'public' | 'protected'} Access
 */

/**
 * @typedef {'instance' | 'static' | 'inner' | 'global'} Scope
 */

/**
 * @typedef {
 * 'class' |
 * 'constant' |
 * 'event' |
 * 'external' |
 * 'file' |
 * 'function' |
 * 'member' |
 * 'mixin' |
 * 'module' |
 * 'namespace' |
 * 'typedef' |
 * 'interface'} Kind
 */

/**
 * @typedef {Object} JSDocComment
 * @property {Array<CommentTag>} tags
 * @property {Array<CommentTag>} augments
 * @property {Array<CommentTag>} params
 * @property {Array<CommentTag>} properties
 * @property {Array<CommentTag>} returns
 * @property {Array<Remark>} sees
 * @property {Array<CommentTag>} throws
 * @property {Array<CommentTag>} todos
 * @property {?Remark} description
 * @property {?Remark} summary
 * @property {?Remark} depreciated
 * @property {?Remark} classdesc
 * @property {?string} name
 * @property {?Kind} kind
 * @property {?string} memberof
 * @property {?Scope} scope
 * @property {?Access} access
 * @property {?string} alias
 * @property {?string} copyright
 * @property {?string} author
 * @property {?string} license
 * @property {?string} version
 * @property {?string} since
 * @property {?string} lends
 * @property {?string} override
 */
