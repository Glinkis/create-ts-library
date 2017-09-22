type DocumentationConfig = {
  polyglot?: boolean,
  inferPrivate?: string,
  noPackage?: boolean,
  toc?: Array<Object>,
  paths?: { [key: string]: number },
  access?: Array<string>,
  defaultGlobals?: boolean,
  defaultGlobalsEnvs?: Array<string>,
  external?: Array<string>,
  theme: string,
  requireExtension?: Array<string>,
  parseExtension: Array<string>
};

type InputsConfig = {
  inputs: Array<SourceFile>,
  config: DocumentationConfig
};

type CommentError = {
  message: string,
  commentLineNumber?: number
};

type DoctrineType = {
  elements?: Array<DoctrineType>,
  expression?: DoctrineType,
  applications?: Array<DoctrineType>,
  type: string,
  name?: string,
  key?: string,
  value?: any,
  fields?: Array<any>,
  params?: Array<any>
};

type CommentLoc = {
  start: {
    line: number
  },
  end: {
    line: number
  } 
};

type SourceFile = {
  source?: string,
  file: string
};

type CommentContext = {
  sortKey: string,
  file: string,
  ast: Object,
  loc: CommentLoc,
  code: string,
  github?: CommentContextGitHub
};

type CommentContextGitHub = {
  path: string,
  url: string
};

type CommentTag = {
  name?: string,
  title: string,
  description?: any,
  default?: any,
  lineNumber?: number,
  type: DoctrineType,
  properties?: Array<CommentTag>
};

type CommentMembers = {
  static: Array<JSDocComment>,
  instance: Array<JSDocComment>,
  events: Array<JSDocComment>,
  global: Array<JSDocComment>,
  inner: Array<JSDocComment>
};

type CommentExample = {
  caption?: string,
  description?: Object
};

type Remark = {
  type: string,
  children: Array<any>
};

type Access = 'private' | 'public' | 'protected';
type Scope = 'instance' | 'static' | 'inner' | 'global';
type Kind =
  | 'class'
  | 'constant'
  | 'event'
  | 'external'
  | 'file'
  | 'function'
  | 'member'
  | 'mixin'
  | 'module'
  | 'namespace'
  | 'typedef'
  | 'interface';

type JSDocComment = {
  errors: Array<CommentError>,
  tags: Array<CommentTag>,

  augments: Array<CommentTag>,
  examples: Array<CommentExample>,
  params: Array<CommentTag>,
  properties: Array<CommentTag>,
  returns: Array<CommentTag>,
  sees: Array<Remark>,
  throws: Array<CommentTag>,
  todos: Array<CommentTag>,

  description?: Remark,
  summary?: Remark,
  deprecated?: Remark,
  classdesc?: Remark,

  members: CommentMembers,

  name?: string,
  kind?: Kind,

  memberof?: string,
  scope?: Scope,
  access?: Access,
  alias?: string,

  copyright?: string,
  author?: string,
  license?: string,
  version?: string,
  since?: string,
  lends?: string,
  override?: boolean,

  type?: DoctrineType,

  context: CommentContext,

  path?: Array<{
    name: string,
    scope: Scope
  }>
};

type ReducedComment = {
  name: string,
  kind: Kind,
  scope?: Scope
};
