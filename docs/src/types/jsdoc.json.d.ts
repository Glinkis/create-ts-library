interface IDocumentationConfig {
  polyglot?: boolean;
  inferPrivate?: string;
  noPackage?: boolean;
  toc?: object[];
  paths?: { [key: string]: number };
  access?: string[];
  defaultGlobals?: boolean;
  defaultGlobalsEnvs?: string[];
  external?: string[];
  theme: string;
  requireExtension?: string[];
  parseExtension: string[];
}

interface InputsConfig {
  inputs: ISourceFile[];
  config: IDocumentationConfig;
}

interface ICommentError {
  message: string;
  commentLineNumber?: number;
}

interface IDoctrineType {
  elements?: IDoctrineType[];
  expression?: IDoctrineType;
  applications?: IDoctrineType[];
  type: string;
  name?: string;
  key?: string;
  value?: any;
  fields?: any[];
  params?: any[];
}

interface ICommentLoc {
  start: {
    line: number
  };
  end: {
    line: number
  };
}

interface ISourceFile {
  source?: string;
  file: string;
}

interface ICommentContext {
  sortKey: string;
  file: string;
  ast: object;
  loc: ICommentLoc;
  code: string;
  github?: ICommentContextGitHub;
}

interface ICommentContextGitHub {
  path: string;
  url: string;
}

interface ICommentTag {
  name?: string;
  title: string;
  description?: any;
  default?: any;
  lineNumber?: number;
  type: IDoctrineType;
  properties?: ICommentTag[];
}

interface ICommentMembers {
  static: IJsDocComment[];
  instance: IJsDocComment[];
  events: IJsDocComment[];
  global: IJsDocComment[];
  inner: IJsDocComment[];
}

interface ICommentExample {
  caption?: string;
  description?: object;
}

interface IRemark {
  type: string;
  children: any[];
}

type Access = "private" | "public" | "protected";
type Scope = "instance" | "static" | "inner" | "global";
type Kind =
  | "class"
  | "constant"
  | "event"
  | "external"
  | "file"
  | "function"
  | "member"
  | "mixin"
  | "module"
  | "namespace"
  | "typedef"
  | "interface";

interface IJsDocComment {
  errors: ICommentError[];
  tags: ICommentTag[];

  augments: ICommentTag[];
  examples: ICommentExample[];
  params: ICommentTag[];
  properties: ICommentTag[];
  returns: ICommentTag[];
  sees: IRemark[];
  throws: ICommentTag[];
  todos: ICommentTag[];

  description?: IRemark;
  summary?: IRemark;
  deprecated?: IRemark;
  classdesc?: IRemark;

  members: ICommentMembers;

  name?: string;
  kind?: Kind;

  memberof?: string;
  scope?: Scope;
  access?: Access;
  alias?: string;

  copyright?: string;
  author?: string;
  license?: string;
  version?: string;
  since?: string;
  lends?: string;
  override?: boolean;

  type?: IDoctrineType;

  context: ICommentContext;

  path?: Array<{
    name: string,
    scope: Scope
  }>;
}

interface IReducedComment {
  name: string;
  kind: Kind;
  scope?: Scope;
}
