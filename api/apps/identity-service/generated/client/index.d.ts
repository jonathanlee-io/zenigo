
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Subdomain
 * 
 */
export type Subdomain = $Result.DefaultSelection<Prisma.$SubdomainPayload>
/**
 * Model Hostname
 * 
 */
export type Hostname = $Result.DefaultSelection<Prisma.$HostnamePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subdomain`: Exposes CRUD operations for the **Subdomain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subdomains
    * const subdomains = await prisma.subdomain.findMany()
    * ```
    */
  get subdomain(): Prisma.SubdomainDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hostname`: Exposes CRUD operations for the **Hostname** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hostnames
    * const hostnames = await prisma.hostname.findMany()
    * ```
    */
  get hostname(): Prisma.HostnameDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Client: 'Client',
    Project: 'Project',
    Subdomain: 'Subdomain',
    Hostname: 'Hostname'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "client" | "project" | "subdomain" | "hostname"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Subdomain: {
        payload: Prisma.$SubdomainPayload<ExtArgs>
        fields: Prisma.SubdomainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubdomainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubdomainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainPayload>
          }
          findFirst: {
            args: Prisma.SubdomainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubdomainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainPayload>
          }
          findMany: {
            args: Prisma.SubdomainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainPayload>[]
          }
          create: {
            args: Prisma.SubdomainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainPayload>
          }
          createMany: {
            args: Prisma.SubdomainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubdomainCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainPayload>[]
          }
          delete: {
            args: Prisma.SubdomainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainPayload>
          }
          update: {
            args: Prisma.SubdomainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainPayload>
          }
          deleteMany: {
            args: Prisma.SubdomainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubdomainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubdomainUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainPayload>[]
          }
          upsert: {
            args: Prisma.SubdomainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainPayload>
          }
          aggregate: {
            args: Prisma.SubdomainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubdomain>
          }
          groupBy: {
            args: Prisma.SubdomainGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubdomainGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubdomainCountArgs<ExtArgs>
            result: $Utils.Optional<SubdomainCountAggregateOutputType> | number
          }
        }
      }
      Hostname: {
        payload: Prisma.$HostnamePayload<ExtArgs>
        fields: Prisma.HostnameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HostnameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostnamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HostnameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostnamePayload>
          }
          findFirst: {
            args: Prisma.HostnameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostnamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HostnameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostnamePayload>
          }
          findMany: {
            args: Prisma.HostnameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostnamePayload>[]
          }
          create: {
            args: Prisma.HostnameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostnamePayload>
          }
          createMany: {
            args: Prisma.HostnameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HostnameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostnamePayload>[]
          }
          delete: {
            args: Prisma.HostnameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostnamePayload>
          }
          update: {
            args: Prisma.HostnameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostnamePayload>
          }
          deleteMany: {
            args: Prisma.HostnameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HostnameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HostnameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostnamePayload>[]
          }
          upsert: {
            args: Prisma.HostnameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostnamePayload>
          }
          aggregate: {
            args: Prisma.HostnameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHostname>
          }
          groupBy: {
            args: Prisma.HostnameGroupByArgs<ExtArgs>
            result: $Utils.Optional<HostnameGroupByOutputType>[]
          }
          count: {
            args: Prisma.HostnameCountArgs<ExtArgs>
            result: $Utils.Optional<HostnameCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    client?: ClientOmit
    project?: ProjectOmit
    subdomain?: SubdomainOmit
    hostname?: HostnameOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    clientCreated: number
    project: number
    clientsWhereMember: number
    clientsWhereAdmin: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientCreated?: boolean | UserCountOutputTypeCountClientCreatedArgs
    project?: boolean | UserCountOutputTypeCountProjectArgs
    clientsWhereMember?: boolean | UserCountOutputTypeCountClientsWhereMemberArgs
    clientsWhereAdmin?: boolean | UserCountOutputTypeCountClientsWhereAdminArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClientCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClientsWhereMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClientsWhereAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    members: number
    admins: number
    projects: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ClientCountOutputTypeCountMembersArgs
    admins?: boolean | ClientCountOutputTypeCountAdminsArgs
    projects?: boolean | ClientCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    hostnames: number
    subdomains: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hostnames?: boolean | ProjectCountOutputTypeCountHostnamesArgs
    subdomains?: boolean | ProjectCountOutputTypeCountSubdomainsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountHostnamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HostnameWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountSubdomainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubdomainWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    supabaseUserId: string | null
    displayName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    supabaseUserId: string | null
    displayName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    supabaseUserId: number
    displayName: number
    createdAt: number
    updatedAt: number
    clientId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    supabaseUserId?: true
    displayName?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    supabaseUserId?: true
    displayName?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    supabaseUserId?: true
    displayName?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    supabaseUserId: string
    displayName: string
    createdAt: Date
    updatedAt: Date
    clientId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    supabaseUserId?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    clientCreated?: boolean | User$clientCreatedArgs<ExtArgs>
    project?: boolean | User$projectArgs<ExtArgs>
    clientsWhereMember?: boolean | User$clientsWhereMemberArgs<ExtArgs>
    clientsWhereAdmin?: boolean | User$clientsWhereAdminArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    supabaseUserId?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    supabaseUserId?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    supabaseUserId?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "supabaseUserId" | "displayName" | "createdAt" | "updatedAt" | "clientId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientCreated?: boolean | User$clientCreatedArgs<ExtArgs>
    project?: boolean | User$projectArgs<ExtArgs>
    clientsWhereMember?: boolean | User$clientsWhereMemberArgs<ExtArgs>
    clientsWhereAdmin?: boolean | User$clientsWhereAdminArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      clientCreated: Prisma.$ClientPayload<ExtArgs>[]
      project: Prisma.$ProjectPayload<ExtArgs>[]
      clientsWhereMember: Prisma.$ClientPayload<ExtArgs>[]
      clientsWhereAdmin: Prisma.$ClientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      supabaseUserId: string
      displayName: string
      createdAt: Date
      updatedAt: Date
      clientId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientCreated<T extends User$clientCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$clientCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project<T extends User$projectArgs<ExtArgs> = {}>(args?: Subset<T, User$projectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clientsWhereMember<T extends User$clientsWhereMemberArgs<ExtArgs> = {}>(args?: Subset<T, User$clientsWhereMemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clientsWhereAdmin<T extends User$clientsWhereAdminArgs<ExtArgs> = {}>(args?: Subset<T, User$clientsWhereAdminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly supabaseUserId: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly clientId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.clientCreated
   */
  export type User$clientCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * User.project
   */
  export type User$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.clientsWhereMember
   */
  export type User$clientsWhereMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * User.clientsWhereAdmin
   */
  export type User$clientsWhereAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    displayName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    paymentPlanId: string | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    displayName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    paymentPlanId: string | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    displayName: number
    createdAt: number
    updatedAt: number
    userId: number
    paymentPlanId: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    displayName?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    paymentPlanId?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    displayName?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    paymentPlanId?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    displayName?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    paymentPlanId?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    displayName: string
    createdAt: Date
    updatedAt: Date
    userId: string
    paymentPlanId: string
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    paymentPlanId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Client$membersArgs<ExtArgs>
    admins?: boolean | Client$adminsArgs<ExtArgs>
    projects?: boolean | Client$projectsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    paymentPlanId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    paymentPlanId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    paymentPlanId?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "displayName" | "createdAt" | "updatedAt" | "userId" | "paymentPlanId", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Client$membersArgs<ExtArgs>
    admins?: boolean | Client$adminsArgs<ExtArgs>
    projects?: boolean | Client$projectsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$UserPayload<ExtArgs>[]
      admins: Prisma.$UserPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      displayName: string
      createdAt: Date
      updatedAt: Date
      userId: string
      paymentPlanId: string
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Client$membersArgs<ExtArgs> = {}>(args?: Subset<T, Client$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    admins<T extends Client$adminsArgs<ExtArgs> = {}>(args?: Subset<T, Client$adminsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends Client$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Client$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly displayName: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
    readonly userId: FieldRef<"Client", 'String'>
    readonly paymentPlanId: FieldRef<"Client", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.members
   */
  export type Client$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Client.admins
   */
  export type Client$adminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Client.projects
   */
  export type Client$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isBugReportsEnabled: boolean | null
    isFeatureRequestsEnabled: boolean | null
    isFeatureFeedbackEnabled: boolean | null
    isOwnerUpdatesEnabled: boolean | null
    isOwnerIssuesEnabled: boolean | null
    isUserIssuesEnabled: boolean | null
    clientId: string | null
    userId: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isBugReportsEnabled: boolean | null
    isFeatureRequestsEnabled: boolean | null
    isFeatureFeedbackEnabled: boolean | null
    isOwnerUpdatesEnabled: boolean | null
    isOwnerIssuesEnabled: boolean | null
    isUserIssuesEnabled: boolean | null
    clientId: string | null
    userId: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    isBugReportsEnabled: number
    isFeatureRequestsEnabled: number
    isFeatureFeedbackEnabled: number
    isOwnerUpdatesEnabled: number
    isOwnerIssuesEnabled: number
    isUserIssuesEnabled: number
    clientId: number
    userId: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    isBugReportsEnabled?: true
    isFeatureRequestsEnabled?: true
    isFeatureFeedbackEnabled?: true
    isOwnerUpdatesEnabled?: true
    isOwnerIssuesEnabled?: true
    isUserIssuesEnabled?: true
    clientId?: true
    userId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    isBugReportsEnabled?: true
    isFeatureRequestsEnabled?: true
    isFeatureFeedbackEnabled?: true
    isOwnerUpdatesEnabled?: true
    isOwnerIssuesEnabled?: true
    isUserIssuesEnabled?: true
    clientId?: true
    userId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    isBugReportsEnabled?: true
    isFeatureRequestsEnabled?: true
    isFeatureFeedbackEnabled?: true
    isOwnerUpdatesEnabled?: true
    isOwnerIssuesEnabled?: true
    isUserIssuesEnabled?: true
    clientId?: true
    userId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    isBugReportsEnabled: boolean
    isFeatureRequestsEnabled: boolean
    isFeatureFeedbackEnabled: boolean
    isOwnerUpdatesEnabled: boolean
    isOwnerIssuesEnabled: boolean
    isUserIssuesEnabled: boolean
    clientId: string | null
    userId: string
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isBugReportsEnabled?: boolean
    isFeatureRequestsEnabled?: boolean
    isFeatureFeedbackEnabled?: boolean
    isOwnerUpdatesEnabled?: boolean
    isOwnerIssuesEnabled?: boolean
    isUserIssuesEnabled?: boolean
    clientId?: boolean
    userId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    hostnames?: boolean | Project$hostnamesArgs<ExtArgs>
    subdomains?: boolean | Project$subdomainsArgs<ExtArgs>
    client?: boolean | Project$clientArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isBugReportsEnabled?: boolean
    isFeatureRequestsEnabled?: boolean
    isFeatureFeedbackEnabled?: boolean
    isOwnerUpdatesEnabled?: boolean
    isOwnerIssuesEnabled?: boolean
    isUserIssuesEnabled?: boolean
    clientId?: boolean
    userId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | Project$clientArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isBugReportsEnabled?: boolean
    isFeatureRequestsEnabled?: boolean
    isFeatureFeedbackEnabled?: boolean
    isOwnerUpdatesEnabled?: boolean
    isOwnerIssuesEnabled?: boolean
    isUserIssuesEnabled?: boolean
    clientId?: boolean
    userId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | Project$clientArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isBugReportsEnabled?: boolean
    isFeatureRequestsEnabled?: boolean
    isFeatureFeedbackEnabled?: boolean
    isOwnerUpdatesEnabled?: boolean
    isOwnerIssuesEnabled?: boolean
    isUserIssuesEnabled?: boolean
    clientId?: boolean
    userId?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "isBugReportsEnabled" | "isFeatureRequestsEnabled" | "isFeatureFeedbackEnabled" | "isOwnerUpdatesEnabled" | "isOwnerIssuesEnabled" | "isUserIssuesEnabled" | "clientId" | "userId", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    hostnames?: boolean | Project$hostnamesArgs<ExtArgs>
    subdomains?: boolean | Project$subdomainsArgs<ExtArgs>
    client?: boolean | Project$clientArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | Project$clientArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | Project$clientArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      hostnames: Prisma.$HostnamePayload<ExtArgs>[]
      subdomains: Prisma.$SubdomainPayload<ExtArgs>[]
      client: Prisma.$ClientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      isBugReportsEnabled: boolean
      isFeatureRequestsEnabled: boolean
      isFeatureFeedbackEnabled: boolean
      isOwnerUpdatesEnabled: boolean
      isOwnerIssuesEnabled: boolean
      isUserIssuesEnabled: boolean
      clientId: string | null
      userId: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hostnames<T extends Project$hostnamesArgs<ExtArgs> = {}>(args?: Subset<T, Project$hostnamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HostnamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subdomains<T extends Project$subdomainsArgs<ExtArgs> = {}>(args?: Subset<T, Project$subdomainsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    client<T extends Project$clientArgs<ExtArgs> = {}>(args?: Subset<T, Project$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly isBugReportsEnabled: FieldRef<"Project", 'Boolean'>
    readonly isFeatureRequestsEnabled: FieldRef<"Project", 'Boolean'>
    readonly isFeatureFeedbackEnabled: FieldRef<"Project", 'Boolean'>
    readonly isOwnerUpdatesEnabled: FieldRef<"Project", 'Boolean'>
    readonly isOwnerIssuesEnabled: FieldRef<"Project", 'Boolean'>
    readonly isUserIssuesEnabled: FieldRef<"Project", 'Boolean'>
    readonly clientId: FieldRef<"Project", 'String'>
    readonly userId: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.hostnames
   */
  export type Project$hostnamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostname
     */
    select?: HostnameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hostname
     */
    omit?: HostnameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostnameInclude<ExtArgs> | null
    where?: HostnameWhereInput
    orderBy?: HostnameOrderByWithRelationInput | HostnameOrderByWithRelationInput[]
    cursor?: HostnameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HostnameScalarFieldEnum | HostnameScalarFieldEnum[]
  }

  /**
   * Project.subdomains
   */
  export type Project$subdomainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subdomain
     */
    omit?: SubdomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
    where?: SubdomainWhereInput
    orderBy?: SubdomainOrderByWithRelationInput | SubdomainOrderByWithRelationInput[]
    cursor?: SubdomainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubdomainScalarFieldEnum | SubdomainScalarFieldEnum[]
  }

  /**
   * Project.client
   */
  export type Project$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Subdomain
   */

  export type AggregateSubdomain = {
    _count: SubdomainCountAggregateOutputType | null
    _min: SubdomainMinAggregateOutputType | null
    _max: SubdomainMaxAggregateOutputType | null
  }

  export type SubdomainMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    subdomain: string | null
    projectId: string | null
  }

  export type SubdomainMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    subdomain: string | null
    projectId: string | null
  }

  export type SubdomainCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    subdomain: number
    projectId: number
    _all: number
  }


  export type SubdomainMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    subdomain?: true
    projectId?: true
  }

  export type SubdomainMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    subdomain?: true
    projectId?: true
  }

  export type SubdomainCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    subdomain?: true
    projectId?: true
    _all?: true
  }

  export type SubdomainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subdomain to aggregate.
     */
    where?: SubdomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subdomains to fetch.
     */
    orderBy?: SubdomainOrderByWithRelationInput | SubdomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubdomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subdomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subdomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subdomains
    **/
    _count?: true | SubdomainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubdomainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubdomainMaxAggregateInputType
  }

  export type GetSubdomainAggregateType<T extends SubdomainAggregateArgs> = {
        [P in keyof T & keyof AggregateSubdomain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubdomain[P]>
      : GetScalarType<T[P], AggregateSubdomain[P]>
  }




  export type SubdomainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubdomainWhereInput
    orderBy?: SubdomainOrderByWithAggregationInput | SubdomainOrderByWithAggregationInput[]
    by: SubdomainScalarFieldEnum[] | SubdomainScalarFieldEnum
    having?: SubdomainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubdomainCountAggregateInputType | true
    _min?: SubdomainMinAggregateInputType
    _max?: SubdomainMaxAggregateInputType
  }

  export type SubdomainGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    subdomain: string
    projectId: string | null
    _count: SubdomainCountAggregateOutputType | null
    _min: SubdomainMinAggregateOutputType | null
    _max: SubdomainMaxAggregateOutputType | null
  }

  type GetSubdomainGroupByPayload<T extends SubdomainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubdomainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubdomainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubdomainGroupByOutputType[P]>
            : GetScalarType<T[P], SubdomainGroupByOutputType[P]>
        }
      >
    >


  export type SubdomainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subdomain?: boolean
    projectId?: boolean
    project?: boolean | Subdomain$projectArgs<ExtArgs>
  }, ExtArgs["result"]["subdomain"]>

  export type SubdomainSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subdomain?: boolean
    projectId?: boolean
    project?: boolean | Subdomain$projectArgs<ExtArgs>
  }, ExtArgs["result"]["subdomain"]>

  export type SubdomainSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subdomain?: boolean
    projectId?: boolean
    project?: boolean | Subdomain$projectArgs<ExtArgs>
  }, ExtArgs["result"]["subdomain"]>

  export type SubdomainSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subdomain?: boolean
    projectId?: boolean
  }

  export type SubdomainOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "subdomain" | "projectId", ExtArgs["result"]["subdomain"]>
  export type SubdomainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | Subdomain$projectArgs<ExtArgs>
  }
  export type SubdomainIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | Subdomain$projectArgs<ExtArgs>
  }
  export type SubdomainIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | Subdomain$projectArgs<ExtArgs>
  }

  export type $SubdomainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subdomain"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      subdomain: string
      projectId: string | null
    }, ExtArgs["result"]["subdomain"]>
    composites: {}
  }

  type SubdomainGetPayload<S extends boolean | null | undefined | SubdomainDefaultArgs> = $Result.GetResult<Prisma.$SubdomainPayload, S>

  type SubdomainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubdomainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubdomainCountAggregateInputType | true
    }

  export interface SubdomainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subdomain'], meta: { name: 'Subdomain' } }
    /**
     * Find zero or one Subdomain that matches the filter.
     * @param {SubdomainFindUniqueArgs} args - Arguments to find a Subdomain
     * @example
     * // Get one Subdomain
     * const subdomain = await prisma.subdomain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubdomainFindUniqueArgs>(args: SelectSubset<T, SubdomainFindUniqueArgs<ExtArgs>>): Prisma__SubdomainClient<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subdomain that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubdomainFindUniqueOrThrowArgs} args - Arguments to find a Subdomain
     * @example
     * // Get one Subdomain
     * const subdomain = await prisma.subdomain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubdomainFindUniqueOrThrowArgs>(args: SelectSubset<T, SubdomainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubdomainClient<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subdomain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubdomainFindFirstArgs} args - Arguments to find a Subdomain
     * @example
     * // Get one Subdomain
     * const subdomain = await prisma.subdomain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubdomainFindFirstArgs>(args?: SelectSubset<T, SubdomainFindFirstArgs<ExtArgs>>): Prisma__SubdomainClient<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subdomain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubdomainFindFirstOrThrowArgs} args - Arguments to find a Subdomain
     * @example
     * // Get one Subdomain
     * const subdomain = await prisma.subdomain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubdomainFindFirstOrThrowArgs>(args?: SelectSubset<T, SubdomainFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubdomainClient<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subdomains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubdomainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subdomains
     * const subdomains = await prisma.subdomain.findMany()
     * 
     * // Get first 10 Subdomains
     * const subdomains = await prisma.subdomain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subdomainWithIdOnly = await prisma.subdomain.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubdomainFindManyArgs>(args?: SelectSubset<T, SubdomainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subdomain.
     * @param {SubdomainCreateArgs} args - Arguments to create a Subdomain.
     * @example
     * // Create one Subdomain
     * const Subdomain = await prisma.subdomain.create({
     *   data: {
     *     // ... data to create a Subdomain
     *   }
     * })
     * 
     */
    create<T extends SubdomainCreateArgs>(args: SelectSubset<T, SubdomainCreateArgs<ExtArgs>>): Prisma__SubdomainClient<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subdomains.
     * @param {SubdomainCreateManyArgs} args - Arguments to create many Subdomains.
     * @example
     * // Create many Subdomains
     * const subdomain = await prisma.subdomain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubdomainCreateManyArgs>(args?: SelectSubset<T, SubdomainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subdomains and returns the data saved in the database.
     * @param {SubdomainCreateManyAndReturnArgs} args - Arguments to create many Subdomains.
     * @example
     * // Create many Subdomains
     * const subdomain = await prisma.subdomain.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subdomains and only return the `id`
     * const subdomainWithIdOnly = await prisma.subdomain.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubdomainCreateManyAndReturnArgs>(args?: SelectSubset<T, SubdomainCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subdomain.
     * @param {SubdomainDeleteArgs} args - Arguments to delete one Subdomain.
     * @example
     * // Delete one Subdomain
     * const Subdomain = await prisma.subdomain.delete({
     *   where: {
     *     // ... filter to delete one Subdomain
     *   }
     * })
     * 
     */
    delete<T extends SubdomainDeleteArgs>(args: SelectSubset<T, SubdomainDeleteArgs<ExtArgs>>): Prisma__SubdomainClient<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subdomain.
     * @param {SubdomainUpdateArgs} args - Arguments to update one Subdomain.
     * @example
     * // Update one Subdomain
     * const subdomain = await prisma.subdomain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubdomainUpdateArgs>(args: SelectSubset<T, SubdomainUpdateArgs<ExtArgs>>): Prisma__SubdomainClient<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subdomains.
     * @param {SubdomainDeleteManyArgs} args - Arguments to filter Subdomains to delete.
     * @example
     * // Delete a few Subdomains
     * const { count } = await prisma.subdomain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubdomainDeleteManyArgs>(args?: SelectSubset<T, SubdomainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subdomains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubdomainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subdomains
     * const subdomain = await prisma.subdomain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubdomainUpdateManyArgs>(args: SelectSubset<T, SubdomainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subdomains and returns the data updated in the database.
     * @param {SubdomainUpdateManyAndReturnArgs} args - Arguments to update many Subdomains.
     * @example
     * // Update many Subdomains
     * const subdomain = await prisma.subdomain.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subdomains and only return the `id`
     * const subdomainWithIdOnly = await prisma.subdomain.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubdomainUpdateManyAndReturnArgs>(args: SelectSubset<T, SubdomainUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subdomain.
     * @param {SubdomainUpsertArgs} args - Arguments to update or create a Subdomain.
     * @example
     * // Update or create a Subdomain
     * const subdomain = await prisma.subdomain.upsert({
     *   create: {
     *     // ... data to create a Subdomain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subdomain we want to update
     *   }
     * })
     */
    upsert<T extends SubdomainUpsertArgs>(args: SelectSubset<T, SubdomainUpsertArgs<ExtArgs>>): Prisma__SubdomainClient<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subdomains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubdomainCountArgs} args - Arguments to filter Subdomains to count.
     * @example
     * // Count the number of Subdomains
     * const count = await prisma.subdomain.count({
     *   where: {
     *     // ... the filter for the Subdomains we want to count
     *   }
     * })
    **/
    count<T extends SubdomainCountArgs>(
      args?: Subset<T, SubdomainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubdomainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subdomain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubdomainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubdomainAggregateArgs>(args: Subset<T, SubdomainAggregateArgs>): Prisma.PrismaPromise<GetSubdomainAggregateType<T>>

    /**
     * Group by Subdomain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubdomainGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubdomainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubdomainGroupByArgs['orderBy'] }
        : { orderBy?: SubdomainGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubdomainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubdomainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subdomain model
   */
  readonly fields: SubdomainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subdomain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubdomainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends Subdomain$projectArgs<ExtArgs> = {}>(args?: Subset<T, Subdomain$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subdomain model
   */
  interface SubdomainFieldRefs {
    readonly id: FieldRef<"Subdomain", 'String'>
    readonly createdAt: FieldRef<"Subdomain", 'DateTime'>
    readonly updatedAt: FieldRef<"Subdomain", 'DateTime'>
    readonly subdomain: FieldRef<"Subdomain", 'String'>
    readonly projectId: FieldRef<"Subdomain", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subdomain findUnique
   */
  export type SubdomainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subdomain
     */
    omit?: SubdomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
    /**
     * Filter, which Subdomain to fetch.
     */
    where: SubdomainWhereUniqueInput
  }

  /**
   * Subdomain findUniqueOrThrow
   */
  export type SubdomainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subdomain
     */
    omit?: SubdomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
    /**
     * Filter, which Subdomain to fetch.
     */
    where: SubdomainWhereUniqueInput
  }

  /**
   * Subdomain findFirst
   */
  export type SubdomainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subdomain
     */
    omit?: SubdomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
    /**
     * Filter, which Subdomain to fetch.
     */
    where?: SubdomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subdomains to fetch.
     */
    orderBy?: SubdomainOrderByWithRelationInput | SubdomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subdomains.
     */
    cursor?: SubdomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subdomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subdomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subdomains.
     */
    distinct?: SubdomainScalarFieldEnum | SubdomainScalarFieldEnum[]
  }

  /**
   * Subdomain findFirstOrThrow
   */
  export type SubdomainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subdomain
     */
    omit?: SubdomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
    /**
     * Filter, which Subdomain to fetch.
     */
    where?: SubdomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subdomains to fetch.
     */
    orderBy?: SubdomainOrderByWithRelationInput | SubdomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subdomains.
     */
    cursor?: SubdomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subdomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subdomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subdomains.
     */
    distinct?: SubdomainScalarFieldEnum | SubdomainScalarFieldEnum[]
  }

  /**
   * Subdomain findMany
   */
  export type SubdomainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subdomain
     */
    omit?: SubdomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
    /**
     * Filter, which Subdomains to fetch.
     */
    where?: SubdomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subdomains to fetch.
     */
    orderBy?: SubdomainOrderByWithRelationInput | SubdomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subdomains.
     */
    cursor?: SubdomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subdomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subdomains.
     */
    skip?: number
    distinct?: SubdomainScalarFieldEnum | SubdomainScalarFieldEnum[]
  }

  /**
   * Subdomain create
   */
  export type SubdomainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subdomain
     */
    omit?: SubdomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
    /**
     * The data needed to create a Subdomain.
     */
    data: XOR<SubdomainCreateInput, SubdomainUncheckedCreateInput>
  }

  /**
   * Subdomain createMany
   */
  export type SubdomainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subdomains.
     */
    data: SubdomainCreateManyInput | SubdomainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subdomain createManyAndReturn
   */
  export type SubdomainCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subdomain
     */
    omit?: SubdomainOmit<ExtArgs> | null
    /**
     * The data used to create many Subdomains.
     */
    data: SubdomainCreateManyInput | SubdomainCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subdomain update
   */
  export type SubdomainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subdomain
     */
    omit?: SubdomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
    /**
     * The data needed to update a Subdomain.
     */
    data: XOR<SubdomainUpdateInput, SubdomainUncheckedUpdateInput>
    /**
     * Choose, which Subdomain to update.
     */
    where: SubdomainWhereUniqueInput
  }

  /**
   * Subdomain updateMany
   */
  export type SubdomainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subdomains.
     */
    data: XOR<SubdomainUpdateManyMutationInput, SubdomainUncheckedUpdateManyInput>
    /**
     * Filter which Subdomains to update
     */
    where?: SubdomainWhereInput
    /**
     * Limit how many Subdomains to update.
     */
    limit?: number
  }

  /**
   * Subdomain updateManyAndReturn
   */
  export type SubdomainUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subdomain
     */
    omit?: SubdomainOmit<ExtArgs> | null
    /**
     * The data used to update Subdomains.
     */
    data: XOR<SubdomainUpdateManyMutationInput, SubdomainUncheckedUpdateManyInput>
    /**
     * Filter which Subdomains to update
     */
    where?: SubdomainWhereInput
    /**
     * Limit how many Subdomains to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subdomain upsert
   */
  export type SubdomainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subdomain
     */
    omit?: SubdomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
    /**
     * The filter to search for the Subdomain to update in case it exists.
     */
    where: SubdomainWhereUniqueInput
    /**
     * In case the Subdomain found by the `where` argument doesn't exist, create a new Subdomain with this data.
     */
    create: XOR<SubdomainCreateInput, SubdomainUncheckedCreateInput>
    /**
     * In case the Subdomain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubdomainUpdateInput, SubdomainUncheckedUpdateInput>
  }

  /**
   * Subdomain delete
   */
  export type SubdomainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subdomain
     */
    omit?: SubdomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
    /**
     * Filter which Subdomain to delete.
     */
    where: SubdomainWhereUniqueInput
  }

  /**
   * Subdomain deleteMany
   */
  export type SubdomainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subdomains to delete
     */
    where?: SubdomainWhereInput
    /**
     * Limit how many Subdomains to delete.
     */
    limit?: number
  }

  /**
   * Subdomain.project
   */
  export type Subdomain$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * Subdomain without action
   */
  export type SubdomainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subdomain
     */
    omit?: SubdomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
  }


  /**
   * Model Hostname
   */

  export type AggregateHostname = {
    _count: HostnameCountAggregateOutputType | null
    _min: HostnameMinAggregateOutputType | null
    _max: HostnameMaxAggregateOutputType | null
  }

  export type HostnameMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    hostname: string | null
    projectId: string | null
  }

  export type HostnameMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    hostname: string | null
    projectId: string | null
  }

  export type HostnameCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    hostname: number
    projectId: number
    _all: number
  }


  export type HostnameMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    hostname?: true
    projectId?: true
  }

  export type HostnameMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    hostname?: true
    projectId?: true
  }

  export type HostnameCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    hostname?: true
    projectId?: true
    _all?: true
  }

  export type HostnameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hostname to aggregate.
     */
    where?: HostnameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hostnames to fetch.
     */
    orderBy?: HostnameOrderByWithRelationInput | HostnameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HostnameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hostnames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hostnames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hostnames
    **/
    _count?: true | HostnameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HostnameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HostnameMaxAggregateInputType
  }

  export type GetHostnameAggregateType<T extends HostnameAggregateArgs> = {
        [P in keyof T & keyof AggregateHostname]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHostname[P]>
      : GetScalarType<T[P], AggregateHostname[P]>
  }




  export type HostnameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HostnameWhereInput
    orderBy?: HostnameOrderByWithAggregationInput | HostnameOrderByWithAggregationInput[]
    by: HostnameScalarFieldEnum[] | HostnameScalarFieldEnum
    having?: HostnameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HostnameCountAggregateInputType | true
    _min?: HostnameMinAggregateInputType
    _max?: HostnameMaxAggregateInputType
  }

  export type HostnameGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    hostname: string
    projectId: string | null
    _count: HostnameCountAggregateOutputType | null
    _min: HostnameMinAggregateOutputType | null
    _max: HostnameMaxAggregateOutputType | null
  }

  type GetHostnameGroupByPayload<T extends HostnameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HostnameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HostnameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HostnameGroupByOutputType[P]>
            : GetScalarType<T[P], HostnameGroupByOutputType[P]>
        }
      >
    >


  export type HostnameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hostname?: boolean
    projectId?: boolean
    project?: boolean | Hostname$projectArgs<ExtArgs>
  }, ExtArgs["result"]["hostname"]>

  export type HostnameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hostname?: boolean
    projectId?: boolean
    project?: boolean | Hostname$projectArgs<ExtArgs>
  }, ExtArgs["result"]["hostname"]>

  export type HostnameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hostname?: boolean
    projectId?: boolean
    project?: boolean | Hostname$projectArgs<ExtArgs>
  }, ExtArgs["result"]["hostname"]>

  export type HostnameSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hostname?: boolean
    projectId?: boolean
  }

  export type HostnameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "hostname" | "projectId", ExtArgs["result"]["hostname"]>
  export type HostnameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | Hostname$projectArgs<ExtArgs>
  }
  export type HostnameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | Hostname$projectArgs<ExtArgs>
  }
  export type HostnameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | Hostname$projectArgs<ExtArgs>
  }

  export type $HostnamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hostname"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      hostname: string
      projectId: string | null
    }, ExtArgs["result"]["hostname"]>
    composites: {}
  }

  type HostnameGetPayload<S extends boolean | null | undefined | HostnameDefaultArgs> = $Result.GetResult<Prisma.$HostnamePayload, S>

  type HostnameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HostnameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HostnameCountAggregateInputType | true
    }

  export interface HostnameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hostname'], meta: { name: 'Hostname' } }
    /**
     * Find zero or one Hostname that matches the filter.
     * @param {HostnameFindUniqueArgs} args - Arguments to find a Hostname
     * @example
     * // Get one Hostname
     * const hostname = await prisma.hostname.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HostnameFindUniqueArgs>(args: SelectSubset<T, HostnameFindUniqueArgs<ExtArgs>>): Prisma__HostnameClient<$Result.GetResult<Prisma.$HostnamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hostname that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HostnameFindUniqueOrThrowArgs} args - Arguments to find a Hostname
     * @example
     * // Get one Hostname
     * const hostname = await prisma.hostname.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HostnameFindUniqueOrThrowArgs>(args: SelectSubset<T, HostnameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HostnameClient<$Result.GetResult<Prisma.$HostnamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hostname that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostnameFindFirstArgs} args - Arguments to find a Hostname
     * @example
     * // Get one Hostname
     * const hostname = await prisma.hostname.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HostnameFindFirstArgs>(args?: SelectSubset<T, HostnameFindFirstArgs<ExtArgs>>): Prisma__HostnameClient<$Result.GetResult<Prisma.$HostnamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hostname that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostnameFindFirstOrThrowArgs} args - Arguments to find a Hostname
     * @example
     * // Get one Hostname
     * const hostname = await prisma.hostname.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HostnameFindFirstOrThrowArgs>(args?: SelectSubset<T, HostnameFindFirstOrThrowArgs<ExtArgs>>): Prisma__HostnameClient<$Result.GetResult<Prisma.$HostnamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hostnames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostnameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hostnames
     * const hostnames = await prisma.hostname.findMany()
     * 
     * // Get first 10 Hostnames
     * const hostnames = await prisma.hostname.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hostnameWithIdOnly = await prisma.hostname.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HostnameFindManyArgs>(args?: SelectSubset<T, HostnameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HostnamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hostname.
     * @param {HostnameCreateArgs} args - Arguments to create a Hostname.
     * @example
     * // Create one Hostname
     * const Hostname = await prisma.hostname.create({
     *   data: {
     *     // ... data to create a Hostname
     *   }
     * })
     * 
     */
    create<T extends HostnameCreateArgs>(args: SelectSubset<T, HostnameCreateArgs<ExtArgs>>): Prisma__HostnameClient<$Result.GetResult<Prisma.$HostnamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hostnames.
     * @param {HostnameCreateManyArgs} args - Arguments to create many Hostnames.
     * @example
     * // Create many Hostnames
     * const hostname = await prisma.hostname.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HostnameCreateManyArgs>(args?: SelectSubset<T, HostnameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hostnames and returns the data saved in the database.
     * @param {HostnameCreateManyAndReturnArgs} args - Arguments to create many Hostnames.
     * @example
     * // Create many Hostnames
     * const hostname = await prisma.hostname.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hostnames and only return the `id`
     * const hostnameWithIdOnly = await prisma.hostname.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HostnameCreateManyAndReturnArgs>(args?: SelectSubset<T, HostnameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HostnamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hostname.
     * @param {HostnameDeleteArgs} args - Arguments to delete one Hostname.
     * @example
     * // Delete one Hostname
     * const Hostname = await prisma.hostname.delete({
     *   where: {
     *     // ... filter to delete one Hostname
     *   }
     * })
     * 
     */
    delete<T extends HostnameDeleteArgs>(args: SelectSubset<T, HostnameDeleteArgs<ExtArgs>>): Prisma__HostnameClient<$Result.GetResult<Prisma.$HostnamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hostname.
     * @param {HostnameUpdateArgs} args - Arguments to update one Hostname.
     * @example
     * // Update one Hostname
     * const hostname = await prisma.hostname.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HostnameUpdateArgs>(args: SelectSubset<T, HostnameUpdateArgs<ExtArgs>>): Prisma__HostnameClient<$Result.GetResult<Prisma.$HostnamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hostnames.
     * @param {HostnameDeleteManyArgs} args - Arguments to filter Hostnames to delete.
     * @example
     * // Delete a few Hostnames
     * const { count } = await prisma.hostname.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HostnameDeleteManyArgs>(args?: SelectSubset<T, HostnameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hostnames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostnameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hostnames
     * const hostname = await prisma.hostname.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HostnameUpdateManyArgs>(args: SelectSubset<T, HostnameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hostnames and returns the data updated in the database.
     * @param {HostnameUpdateManyAndReturnArgs} args - Arguments to update many Hostnames.
     * @example
     * // Update many Hostnames
     * const hostname = await prisma.hostname.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hostnames and only return the `id`
     * const hostnameWithIdOnly = await prisma.hostname.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HostnameUpdateManyAndReturnArgs>(args: SelectSubset<T, HostnameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HostnamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hostname.
     * @param {HostnameUpsertArgs} args - Arguments to update or create a Hostname.
     * @example
     * // Update or create a Hostname
     * const hostname = await prisma.hostname.upsert({
     *   create: {
     *     // ... data to create a Hostname
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hostname we want to update
     *   }
     * })
     */
    upsert<T extends HostnameUpsertArgs>(args: SelectSubset<T, HostnameUpsertArgs<ExtArgs>>): Prisma__HostnameClient<$Result.GetResult<Prisma.$HostnamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hostnames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostnameCountArgs} args - Arguments to filter Hostnames to count.
     * @example
     * // Count the number of Hostnames
     * const count = await prisma.hostname.count({
     *   where: {
     *     // ... the filter for the Hostnames we want to count
     *   }
     * })
    **/
    count<T extends HostnameCountArgs>(
      args?: Subset<T, HostnameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HostnameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hostname.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostnameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HostnameAggregateArgs>(args: Subset<T, HostnameAggregateArgs>): Prisma.PrismaPromise<GetHostnameAggregateType<T>>

    /**
     * Group by Hostname.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostnameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HostnameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HostnameGroupByArgs['orderBy'] }
        : { orderBy?: HostnameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HostnameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHostnameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hostname model
   */
  readonly fields: HostnameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hostname.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HostnameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends Hostname$projectArgs<ExtArgs> = {}>(args?: Subset<T, Hostname$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hostname model
   */
  interface HostnameFieldRefs {
    readonly id: FieldRef<"Hostname", 'String'>
    readonly createdAt: FieldRef<"Hostname", 'DateTime'>
    readonly updatedAt: FieldRef<"Hostname", 'DateTime'>
    readonly hostname: FieldRef<"Hostname", 'String'>
    readonly projectId: FieldRef<"Hostname", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Hostname findUnique
   */
  export type HostnameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostname
     */
    select?: HostnameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hostname
     */
    omit?: HostnameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostnameInclude<ExtArgs> | null
    /**
     * Filter, which Hostname to fetch.
     */
    where: HostnameWhereUniqueInput
  }

  /**
   * Hostname findUniqueOrThrow
   */
  export type HostnameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostname
     */
    select?: HostnameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hostname
     */
    omit?: HostnameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostnameInclude<ExtArgs> | null
    /**
     * Filter, which Hostname to fetch.
     */
    where: HostnameWhereUniqueInput
  }

  /**
   * Hostname findFirst
   */
  export type HostnameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostname
     */
    select?: HostnameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hostname
     */
    omit?: HostnameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostnameInclude<ExtArgs> | null
    /**
     * Filter, which Hostname to fetch.
     */
    where?: HostnameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hostnames to fetch.
     */
    orderBy?: HostnameOrderByWithRelationInput | HostnameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hostnames.
     */
    cursor?: HostnameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hostnames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hostnames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hostnames.
     */
    distinct?: HostnameScalarFieldEnum | HostnameScalarFieldEnum[]
  }

  /**
   * Hostname findFirstOrThrow
   */
  export type HostnameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostname
     */
    select?: HostnameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hostname
     */
    omit?: HostnameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostnameInclude<ExtArgs> | null
    /**
     * Filter, which Hostname to fetch.
     */
    where?: HostnameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hostnames to fetch.
     */
    orderBy?: HostnameOrderByWithRelationInput | HostnameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hostnames.
     */
    cursor?: HostnameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hostnames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hostnames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hostnames.
     */
    distinct?: HostnameScalarFieldEnum | HostnameScalarFieldEnum[]
  }

  /**
   * Hostname findMany
   */
  export type HostnameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostname
     */
    select?: HostnameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hostname
     */
    omit?: HostnameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostnameInclude<ExtArgs> | null
    /**
     * Filter, which Hostnames to fetch.
     */
    where?: HostnameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hostnames to fetch.
     */
    orderBy?: HostnameOrderByWithRelationInput | HostnameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hostnames.
     */
    cursor?: HostnameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hostnames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hostnames.
     */
    skip?: number
    distinct?: HostnameScalarFieldEnum | HostnameScalarFieldEnum[]
  }

  /**
   * Hostname create
   */
  export type HostnameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostname
     */
    select?: HostnameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hostname
     */
    omit?: HostnameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostnameInclude<ExtArgs> | null
    /**
     * The data needed to create a Hostname.
     */
    data: XOR<HostnameCreateInput, HostnameUncheckedCreateInput>
  }

  /**
   * Hostname createMany
   */
  export type HostnameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hostnames.
     */
    data: HostnameCreateManyInput | HostnameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hostname createManyAndReturn
   */
  export type HostnameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostname
     */
    select?: HostnameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hostname
     */
    omit?: HostnameOmit<ExtArgs> | null
    /**
     * The data used to create many Hostnames.
     */
    data: HostnameCreateManyInput | HostnameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostnameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hostname update
   */
  export type HostnameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostname
     */
    select?: HostnameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hostname
     */
    omit?: HostnameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostnameInclude<ExtArgs> | null
    /**
     * The data needed to update a Hostname.
     */
    data: XOR<HostnameUpdateInput, HostnameUncheckedUpdateInput>
    /**
     * Choose, which Hostname to update.
     */
    where: HostnameWhereUniqueInput
  }

  /**
   * Hostname updateMany
   */
  export type HostnameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hostnames.
     */
    data: XOR<HostnameUpdateManyMutationInput, HostnameUncheckedUpdateManyInput>
    /**
     * Filter which Hostnames to update
     */
    where?: HostnameWhereInput
    /**
     * Limit how many Hostnames to update.
     */
    limit?: number
  }

  /**
   * Hostname updateManyAndReturn
   */
  export type HostnameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostname
     */
    select?: HostnameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hostname
     */
    omit?: HostnameOmit<ExtArgs> | null
    /**
     * The data used to update Hostnames.
     */
    data: XOR<HostnameUpdateManyMutationInput, HostnameUncheckedUpdateManyInput>
    /**
     * Filter which Hostnames to update
     */
    where?: HostnameWhereInput
    /**
     * Limit how many Hostnames to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostnameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hostname upsert
   */
  export type HostnameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostname
     */
    select?: HostnameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hostname
     */
    omit?: HostnameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostnameInclude<ExtArgs> | null
    /**
     * The filter to search for the Hostname to update in case it exists.
     */
    where: HostnameWhereUniqueInput
    /**
     * In case the Hostname found by the `where` argument doesn't exist, create a new Hostname with this data.
     */
    create: XOR<HostnameCreateInput, HostnameUncheckedCreateInput>
    /**
     * In case the Hostname was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HostnameUpdateInput, HostnameUncheckedUpdateInput>
  }

  /**
   * Hostname delete
   */
  export type HostnameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostname
     */
    select?: HostnameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hostname
     */
    omit?: HostnameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostnameInclude<ExtArgs> | null
    /**
     * Filter which Hostname to delete.
     */
    where: HostnameWhereUniqueInput
  }

  /**
   * Hostname deleteMany
   */
  export type HostnameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hostnames to delete
     */
    where?: HostnameWhereInput
    /**
     * Limit how many Hostnames to delete.
     */
    limit?: number
  }

  /**
   * Hostname.project
   */
  export type Hostname$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * Hostname without action
   */
  export type HostnameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostname
     */
    select?: HostnameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hostname
     */
    omit?: HostnameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostnameInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    supabaseUserId: 'supabaseUserId',
    displayName: 'displayName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clientId: 'clientId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    displayName: 'displayName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    paymentPlanId: 'paymentPlanId'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isBugReportsEnabled: 'isBugReportsEnabled',
    isFeatureRequestsEnabled: 'isFeatureRequestsEnabled',
    isFeatureFeedbackEnabled: 'isFeatureFeedbackEnabled',
    isOwnerUpdatesEnabled: 'isOwnerUpdatesEnabled',
    isOwnerIssuesEnabled: 'isOwnerIssuesEnabled',
    isUserIssuesEnabled: 'isUserIssuesEnabled',
    clientId: 'clientId',
    userId: 'userId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const SubdomainScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    subdomain: 'subdomain',
    projectId: 'projectId'
  };

  export type SubdomainScalarFieldEnum = (typeof SubdomainScalarFieldEnum)[keyof typeof SubdomainScalarFieldEnum]


  export const HostnameScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    hostname: 'hostname',
    projectId: 'projectId'
  };

  export type HostnameScalarFieldEnum = (typeof HostnameScalarFieldEnum)[keyof typeof HostnameScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    supabaseUserId?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clientId?: StringNullableFilter<"User"> | string | null
    clientCreated?: ClientListRelationFilter
    project?: ProjectListRelationFilter
    clientsWhereMember?: ClientListRelationFilter
    clientsWhereAdmin?: ClientListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    supabaseUserId?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrderInput | SortOrder
    clientCreated?: ClientOrderByRelationAggregateInput
    project?: ProjectOrderByRelationAggregateInput
    clientsWhereMember?: ClientOrderByRelationAggregateInput
    clientsWhereAdmin?: ClientOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    supabaseUserId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    displayName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clientId?: StringNullableFilter<"User"> | string | null
    clientCreated?: ClientListRelationFilter
    project?: ProjectListRelationFilter
    clientsWhereMember?: ClientListRelationFilter
    clientsWhereAdmin?: ClientListRelationFilter
  }, "id" | "email" | "supabaseUserId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    supabaseUserId?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    supabaseUserId?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    clientId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    displayName?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    userId?: StringFilter<"Client"> | string
    paymentPlanId?: StringFilter<"Client"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: UserListRelationFilter
    admins?: UserListRelationFilter
    projects?: ProjectListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    paymentPlanId?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    members?: UserOrderByRelationAggregateInput
    admins?: UserOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    displayName?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    userId?: StringFilter<"Client"> | string
    paymentPlanId?: StringFilter<"Client"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: UserListRelationFilter
    admins?: UserListRelationFilter
    projects?: ProjectListRelationFilter
  }, "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    paymentPlanId?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    displayName?: StringWithAggregatesFilter<"Client"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    userId?: StringWithAggregatesFilter<"Client"> | string
    paymentPlanId?: StringWithAggregatesFilter<"Client"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    isBugReportsEnabled?: BoolFilter<"Project"> | boolean
    isFeatureRequestsEnabled?: BoolFilter<"Project"> | boolean
    isFeatureFeedbackEnabled?: BoolFilter<"Project"> | boolean
    isOwnerUpdatesEnabled?: BoolFilter<"Project"> | boolean
    isOwnerIssuesEnabled?: BoolFilter<"Project"> | boolean
    isUserIssuesEnabled?: BoolFilter<"Project"> | boolean
    clientId?: StringNullableFilter<"Project"> | string | null
    userId?: StringFilter<"Project"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    hostnames?: HostnameListRelationFilter
    subdomains?: SubdomainListRelationFilter
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isBugReportsEnabled?: SortOrder
    isFeatureRequestsEnabled?: SortOrder
    isFeatureFeedbackEnabled?: SortOrder
    isOwnerUpdatesEnabled?: SortOrder
    isOwnerIssuesEnabled?: SortOrder
    isUserIssuesEnabled?: SortOrder
    clientId?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    hostnames?: HostnameOrderByRelationAggregateInput
    subdomains?: SubdomainOrderByRelationAggregateInput
    client?: ClientOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    isBugReportsEnabled?: BoolFilter<"Project"> | boolean
    isFeatureRequestsEnabled?: BoolFilter<"Project"> | boolean
    isFeatureFeedbackEnabled?: BoolFilter<"Project"> | boolean
    isOwnerUpdatesEnabled?: BoolFilter<"Project"> | boolean
    isOwnerIssuesEnabled?: BoolFilter<"Project"> | boolean
    isUserIssuesEnabled?: BoolFilter<"Project"> | boolean
    clientId?: StringNullableFilter<"Project"> | string | null
    userId?: StringFilter<"Project"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    hostnames?: HostnameListRelationFilter
    subdomains?: SubdomainListRelationFilter
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isBugReportsEnabled?: SortOrder
    isFeatureRequestsEnabled?: SortOrder
    isFeatureFeedbackEnabled?: SortOrder
    isOwnerUpdatesEnabled?: SortOrder
    isOwnerIssuesEnabled?: SortOrder
    isUserIssuesEnabled?: SortOrder
    clientId?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    isBugReportsEnabled?: BoolWithAggregatesFilter<"Project"> | boolean
    isFeatureRequestsEnabled?: BoolWithAggregatesFilter<"Project"> | boolean
    isFeatureFeedbackEnabled?: BoolWithAggregatesFilter<"Project"> | boolean
    isOwnerUpdatesEnabled?: BoolWithAggregatesFilter<"Project"> | boolean
    isOwnerIssuesEnabled?: BoolWithAggregatesFilter<"Project"> | boolean
    isUserIssuesEnabled?: BoolWithAggregatesFilter<"Project"> | boolean
    clientId?: StringNullableWithAggregatesFilter<"Project"> | string | null
    userId?: StringWithAggregatesFilter<"Project"> | string
  }

  export type SubdomainWhereInput = {
    AND?: SubdomainWhereInput | SubdomainWhereInput[]
    OR?: SubdomainWhereInput[]
    NOT?: SubdomainWhereInput | SubdomainWhereInput[]
    id?: StringFilter<"Subdomain"> | string
    createdAt?: DateTimeFilter<"Subdomain"> | Date | string
    updatedAt?: DateTimeFilter<"Subdomain"> | Date | string
    subdomain?: StringFilter<"Subdomain"> | string
    projectId?: StringNullableFilter<"Subdomain"> | string | null
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
  }

  export type SubdomainOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subdomain?: SortOrder
    projectId?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type SubdomainWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    subdomain?: string
    AND?: SubdomainWhereInput | SubdomainWhereInput[]
    OR?: SubdomainWhereInput[]
    NOT?: SubdomainWhereInput | SubdomainWhereInput[]
    createdAt?: DateTimeFilter<"Subdomain"> | Date | string
    updatedAt?: DateTimeFilter<"Subdomain"> | Date | string
    projectId?: StringNullableFilter<"Subdomain"> | string | null
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
  }, "id" | "subdomain">

  export type SubdomainOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subdomain?: SortOrder
    projectId?: SortOrderInput | SortOrder
    _count?: SubdomainCountOrderByAggregateInput
    _max?: SubdomainMaxOrderByAggregateInput
    _min?: SubdomainMinOrderByAggregateInput
  }

  export type SubdomainScalarWhereWithAggregatesInput = {
    AND?: SubdomainScalarWhereWithAggregatesInput | SubdomainScalarWhereWithAggregatesInput[]
    OR?: SubdomainScalarWhereWithAggregatesInput[]
    NOT?: SubdomainScalarWhereWithAggregatesInput | SubdomainScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subdomain"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Subdomain"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subdomain"> | Date | string
    subdomain?: StringWithAggregatesFilter<"Subdomain"> | string
    projectId?: StringNullableWithAggregatesFilter<"Subdomain"> | string | null
  }

  export type HostnameWhereInput = {
    AND?: HostnameWhereInput | HostnameWhereInput[]
    OR?: HostnameWhereInput[]
    NOT?: HostnameWhereInput | HostnameWhereInput[]
    id?: StringFilter<"Hostname"> | string
    createdAt?: DateTimeFilter<"Hostname"> | Date | string
    updatedAt?: DateTimeFilter<"Hostname"> | Date | string
    hostname?: StringFilter<"Hostname"> | string
    projectId?: StringNullableFilter<"Hostname"> | string | null
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
  }

  export type HostnameOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hostname?: SortOrder
    projectId?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type HostnameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    hostname?: string
    AND?: HostnameWhereInput | HostnameWhereInput[]
    OR?: HostnameWhereInput[]
    NOT?: HostnameWhereInput | HostnameWhereInput[]
    createdAt?: DateTimeFilter<"Hostname"> | Date | string
    updatedAt?: DateTimeFilter<"Hostname"> | Date | string
    projectId?: StringNullableFilter<"Hostname"> | string | null
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
  }, "id" | "hostname">

  export type HostnameOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hostname?: SortOrder
    projectId?: SortOrderInput | SortOrder
    _count?: HostnameCountOrderByAggregateInput
    _max?: HostnameMaxOrderByAggregateInput
    _min?: HostnameMinOrderByAggregateInput
  }

  export type HostnameScalarWhereWithAggregatesInput = {
    AND?: HostnameScalarWhereWithAggregatesInput | HostnameScalarWhereWithAggregatesInput[]
    OR?: HostnameScalarWhereWithAggregatesInput[]
    NOT?: HostnameScalarWhereWithAggregatesInput | HostnameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hostname"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Hostname"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hostname"> | Date | string
    hostname?: StringWithAggregatesFilter<"Hostname"> | string
    projectId?: StringNullableWithAggregatesFilter<"Hostname"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    supabaseUserId: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId?: string | null
    clientCreated?: ClientCreateNestedManyWithoutCreatedByInput
    project?: ProjectCreateNestedManyWithoutCreatedByInput
    clientsWhereMember?: ClientCreateNestedManyWithoutMembersInput
    clientsWhereAdmin?: ClientCreateNestedManyWithoutAdminsInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    supabaseUserId: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId?: string | null
    clientCreated?: ClientUncheckedCreateNestedManyWithoutCreatedByInput
    project?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput
    clientsWhereMember?: ClientUncheckedCreateNestedManyWithoutMembersInput
    clientsWhereAdmin?: ClientUncheckedCreateNestedManyWithoutAdminsInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientCreated?: ClientUpdateManyWithoutCreatedByNestedInput
    project?: ProjectUpdateManyWithoutCreatedByNestedInput
    clientsWhereMember?: ClientUpdateManyWithoutMembersNestedInput
    clientsWhereAdmin?: ClientUpdateManyWithoutAdminsNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientCreated?: ClientUncheckedUpdateManyWithoutCreatedByNestedInput
    project?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput
    clientsWhereMember?: ClientUncheckedUpdateManyWithoutMembersNestedInput
    clientsWhereAdmin?: ClientUncheckedUpdateManyWithoutAdminsNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    supabaseUserId: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientCreateInput = {
    id?: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentPlanId: string
    createdBy: UserCreateNestedOneWithoutClientCreatedInput
    members?: UserCreateNestedManyWithoutClientsWhereMemberInput
    admins?: UserCreateNestedManyWithoutClientsWhereAdminInput
    projects?: ProjectCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    paymentPlanId: string
    members?: UserUncheckedCreateNestedManyWithoutClientsWhereMemberInput
    admins?: UserUncheckedCreateNestedManyWithoutClientsWhereAdminInput
    projects?: ProjectUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentPlanId?: StringFieldUpdateOperationsInput | string
    createdBy?: UserUpdateOneRequiredWithoutClientCreatedNestedInput
    members?: UserUpdateManyWithoutClientsWhereMemberNestedInput
    admins?: UserUpdateManyWithoutClientsWhereAdminNestedInput
    projects?: ProjectUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    paymentPlanId?: StringFieldUpdateOperationsInput | string
    members?: UserUncheckedUpdateManyWithoutClientsWhereMemberNestedInput
    admins?: UserUncheckedUpdateManyWithoutClientsWhereAdminNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    paymentPlanId: string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentPlanId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    paymentPlanId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isBugReportsEnabled?: boolean
    isFeatureRequestsEnabled?: boolean
    isFeatureFeedbackEnabled?: boolean
    isOwnerUpdatesEnabled?: boolean
    isOwnerIssuesEnabled?: boolean
    isUserIssuesEnabled?: boolean
    createdBy: UserCreateNestedOneWithoutProjectInput
    hostnames?: HostnameCreateNestedManyWithoutProjectInput
    subdomains?: SubdomainCreateNestedManyWithoutProjectInput
    client?: ClientCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isBugReportsEnabled?: boolean
    isFeatureRequestsEnabled?: boolean
    isFeatureFeedbackEnabled?: boolean
    isOwnerUpdatesEnabled?: boolean
    isOwnerIssuesEnabled?: boolean
    isUserIssuesEnabled?: boolean
    clientId?: string | null
    userId: string
    hostnames?: HostnameUncheckedCreateNestedManyWithoutProjectInput
    subdomains?: SubdomainUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBugReportsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureRequestsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureFeedbackEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerUpdatesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isUserIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: UserUpdateOneRequiredWithoutProjectNestedInput
    hostnames?: HostnameUpdateManyWithoutProjectNestedInput
    subdomains?: SubdomainUpdateManyWithoutProjectNestedInput
    client?: ClientUpdateOneWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBugReportsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureRequestsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureFeedbackEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerUpdatesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isUserIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    hostnames?: HostnameUncheckedUpdateManyWithoutProjectNestedInput
    subdomains?: SubdomainUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isBugReportsEnabled?: boolean
    isFeatureRequestsEnabled?: boolean
    isFeatureFeedbackEnabled?: boolean
    isOwnerUpdatesEnabled?: boolean
    isOwnerIssuesEnabled?: boolean
    isUserIssuesEnabled?: boolean
    clientId?: string | null
    userId: string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBugReportsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureRequestsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureFeedbackEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerUpdatesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isUserIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBugReportsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureRequestsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureFeedbackEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerUpdatesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isUserIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SubdomainCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subdomain: string
    project?: ProjectCreateNestedOneWithoutSubdomainsInput
  }

  export type SubdomainUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subdomain: string
    projectId?: string | null
  }

  export type SubdomainUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subdomain?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneWithoutSubdomainsNestedInput
  }

  export type SubdomainUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subdomain?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubdomainCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subdomain: string
    projectId?: string | null
  }

  export type SubdomainUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subdomain?: StringFieldUpdateOperationsInput | string
  }

  export type SubdomainUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subdomain?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HostnameCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hostname: string
    project?: ProjectCreateNestedOneWithoutHostnamesInput
  }

  export type HostnameUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hostname: string
    projectId?: string | null
  }

  export type HostnameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostname?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneWithoutHostnamesNestedInput
  }

  export type HostnameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostname?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HostnameCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hostname: string
    projectId?: string | null
  }

  export type HostnameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostname?: StringFieldUpdateOperationsInput | string
  }

  export type HostnameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostname?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    supabaseUserId?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    supabaseUserId?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    supabaseUserId?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    paymentPlanId?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    paymentPlanId?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    paymentPlanId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type HostnameListRelationFilter = {
    every?: HostnameWhereInput
    some?: HostnameWhereInput
    none?: HostnameWhereInput
  }

  export type SubdomainListRelationFilter = {
    every?: SubdomainWhereInput
    some?: SubdomainWhereInput
    none?: SubdomainWhereInput
  }

  export type ClientNullableScalarRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type HostnameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubdomainOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isBugReportsEnabled?: SortOrder
    isFeatureRequestsEnabled?: SortOrder
    isFeatureFeedbackEnabled?: SortOrder
    isOwnerUpdatesEnabled?: SortOrder
    isOwnerIssuesEnabled?: SortOrder
    isUserIssuesEnabled?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isBugReportsEnabled?: SortOrder
    isFeatureRequestsEnabled?: SortOrder
    isFeatureFeedbackEnabled?: SortOrder
    isOwnerUpdatesEnabled?: SortOrder
    isOwnerIssuesEnabled?: SortOrder
    isUserIssuesEnabled?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isBugReportsEnabled?: SortOrder
    isFeatureRequestsEnabled?: SortOrder
    isFeatureFeedbackEnabled?: SortOrder
    isOwnerUpdatesEnabled?: SortOrder
    isOwnerIssuesEnabled?: SortOrder
    isUserIssuesEnabled?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProjectNullableScalarRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type SubdomainCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subdomain?: SortOrder
    projectId?: SortOrder
  }

  export type SubdomainMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subdomain?: SortOrder
    projectId?: SortOrder
  }

  export type SubdomainMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subdomain?: SortOrder
    projectId?: SortOrder
  }

  export type HostnameCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hostname?: SortOrder
    projectId?: SortOrder
  }

  export type HostnameMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hostname?: SortOrder
    projectId?: SortOrder
  }

  export type HostnameMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hostname?: SortOrder
    projectId?: SortOrder
  }

  export type ClientCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ClientCreateWithoutCreatedByInput, ClientUncheckedCreateWithoutCreatedByInput> | ClientCreateWithoutCreatedByInput[] | ClientUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutCreatedByInput | ClientCreateOrConnectWithoutCreatedByInput[]
    createMany?: ClientCreateManyCreatedByInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ProjectCreateWithoutCreatedByInput, ProjectUncheckedCreateWithoutCreatedByInput> | ProjectCreateWithoutCreatedByInput[] | ProjectUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatedByInput | ProjectCreateOrConnectWithoutCreatedByInput[]
    createMany?: ProjectCreateManyCreatedByInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ClientCreateNestedManyWithoutMembersInput = {
    create?: XOR<ClientCreateWithoutMembersInput, ClientUncheckedCreateWithoutMembersInput> | ClientCreateWithoutMembersInput[] | ClientUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutMembersInput | ClientCreateOrConnectWithoutMembersInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type ClientCreateNestedManyWithoutAdminsInput = {
    create?: XOR<ClientCreateWithoutAdminsInput, ClientUncheckedCreateWithoutAdminsInput> | ClientCreateWithoutAdminsInput[] | ClientUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutAdminsInput | ClientCreateOrConnectWithoutAdminsInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ClientCreateWithoutCreatedByInput, ClientUncheckedCreateWithoutCreatedByInput> | ClientCreateWithoutCreatedByInput[] | ClientUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutCreatedByInput | ClientCreateOrConnectWithoutCreatedByInput[]
    createMany?: ClientCreateManyCreatedByInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ProjectCreateWithoutCreatedByInput, ProjectUncheckedCreateWithoutCreatedByInput> | ProjectCreateWithoutCreatedByInput[] | ProjectUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatedByInput | ProjectCreateOrConnectWithoutCreatedByInput[]
    createMany?: ProjectCreateManyCreatedByInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutMembersInput = {
    create?: XOR<ClientCreateWithoutMembersInput, ClientUncheckedCreateWithoutMembersInput> | ClientCreateWithoutMembersInput[] | ClientUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutMembersInput | ClientCreateOrConnectWithoutMembersInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutAdminsInput = {
    create?: XOR<ClientCreateWithoutAdminsInput, ClientUncheckedCreateWithoutAdminsInput> | ClientCreateWithoutAdminsInput[] | ClientUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutAdminsInput | ClientCreateOrConnectWithoutAdminsInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClientUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ClientCreateWithoutCreatedByInput, ClientUncheckedCreateWithoutCreatedByInput> | ClientCreateWithoutCreatedByInput[] | ClientUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutCreatedByInput | ClientCreateOrConnectWithoutCreatedByInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutCreatedByInput | ClientUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ClientCreateManyCreatedByInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutCreatedByInput | ClientUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutCreatedByInput | ClientUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ProjectCreateWithoutCreatedByInput, ProjectUncheckedCreateWithoutCreatedByInput> | ProjectCreateWithoutCreatedByInput[] | ProjectUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatedByInput | ProjectCreateOrConnectWithoutCreatedByInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCreatedByInput | ProjectUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ProjectCreateManyCreatedByInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCreatedByInput | ProjectUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCreatedByInput | ProjectUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ClientUpdateManyWithoutMembersNestedInput = {
    create?: XOR<ClientCreateWithoutMembersInput, ClientUncheckedCreateWithoutMembersInput> | ClientCreateWithoutMembersInput[] | ClientUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutMembersInput | ClientCreateOrConnectWithoutMembersInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutMembersInput | ClientUpsertWithWhereUniqueWithoutMembersInput[]
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutMembersInput | ClientUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutMembersInput | ClientUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type ClientUpdateManyWithoutAdminsNestedInput = {
    create?: XOR<ClientCreateWithoutAdminsInput, ClientUncheckedCreateWithoutAdminsInput> | ClientCreateWithoutAdminsInput[] | ClientUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutAdminsInput | ClientCreateOrConnectWithoutAdminsInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutAdminsInput | ClientUpsertWithWhereUniqueWithoutAdminsInput[]
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutAdminsInput | ClientUpdateWithWhereUniqueWithoutAdminsInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutAdminsInput | ClientUpdateManyWithWhereWithoutAdminsInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ClientCreateWithoutCreatedByInput, ClientUncheckedCreateWithoutCreatedByInput> | ClientCreateWithoutCreatedByInput[] | ClientUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutCreatedByInput | ClientCreateOrConnectWithoutCreatedByInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutCreatedByInput | ClientUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ClientCreateManyCreatedByInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutCreatedByInput | ClientUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutCreatedByInput | ClientUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ProjectCreateWithoutCreatedByInput, ProjectUncheckedCreateWithoutCreatedByInput> | ProjectCreateWithoutCreatedByInput[] | ProjectUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatedByInput | ProjectCreateOrConnectWithoutCreatedByInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCreatedByInput | ProjectUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ProjectCreateManyCreatedByInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCreatedByInput | ProjectUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCreatedByInput | ProjectUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutMembersNestedInput = {
    create?: XOR<ClientCreateWithoutMembersInput, ClientUncheckedCreateWithoutMembersInput> | ClientCreateWithoutMembersInput[] | ClientUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutMembersInput | ClientCreateOrConnectWithoutMembersInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutMembersInput | ClientUpsertWithWhereUniqueWithoutMembersInput[]
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutMembersInput | ClientUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutMembersInput | ClientUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutAdminsNestedInput = {
    create?: XOR<ClientCreateWithoutAdminsInput, ClientUncheckedCreateWithoutAdminsInput> | ClientCreateWithoutAdminsInput[] | ClientUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutAdminsInput | ClientCreateOrConnectWithoutAdminsInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutAdminsInput | ClientUpsertWithWhereUniqueWithoutAdminsInput[]
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutAdminsInput | ClientUpdateWithWhereUniqueWithoutAdminsInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutAdminsInput | ClientUpdateManyWithWhereWithoutAdminsInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutClientCreatedInput = {
    create?: XOR<UserCreateWithoutClientCreatedInput, UserUncheckedCreateWithoutClientCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutClientsWhereMemberInput = {
    create?: XOR<UserCreateWithoutClientsWhereMemberInput, UserUncheckedCreateWithoutClientsWhereMemberInput> | UserCreateWithoutClientsWhereMemberInput[] | UserUncheckedCreateWithoutClientsWhereMemberInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientsWhereMemberInput | UserCreateOrConnectWithoutClientsWhereMemberInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutClientsWhereAdminInput = {
    create?: XOR<UserCreateWithoutClientsWhereAdminInput, UserUncheckedCreateWithoutClientsWhereAdminInput> | UserCreateWithoutClientsWhereAdminInput[] | UserUncheckedCreateWithoutClientsWhereAdminInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientsWhereAdminInput | UserCreateOrConnectWithoutClientsWhereAdminInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutClientInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutClientsWhereMemberInput = {
    create?: XOR<UserCreateWithoutClientsWhereMemberInput, UserUncheckedCreateWithoutClientsWhereMemberInput> | UserCreateWithoutClientsWhereMemberInput[] | UserUncheckedCreateWithoutClientsWhereMemberInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientsWhereMemberInput | UserCreateOrConnectWithoutClientsWhereMemberInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutClientsWhereAdminInput = {
    create?: XOR<UserCreateWithoutClientsWhereAdminInput, UserUncheckedCreateWithoutClientsWhereAdminInput> | UserCreateWithoutClientsWhereAdminInput[] | UserUncheckedCreateWithoutClientsWhereAdminInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientsWhereAdminInput | UserCreateOrConnectWithoutClientsWhereAdminInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutClientCreatedNestedInput = {
    create?: XOR<UserCreateWithoutClientCreatedInput, UserUncheckedCreateWithoutClientCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientCreatedInput
    upsert?: UserUpsertWithoutClientCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClientCreatedInput, UserUpdateWithoutClientCreatedInput>, UserUncheckedUpdateWithoutClientCreatedInput>
  }

  export type UserUpdateManyWithoutClientsWhereMemberNestedInput = {
    create?: XOR<UserCreateWithoutClientsWhereMemberInput, UserUncheckedCreateWithoutClientsWhereMemberInput> | UserCreateWithoutClientsWhereMemberInput[] | UserUncheckedCreateWithoutClientsWhereMemberInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientsWhereMemberInput | UserCreateOrConnectWithoutClientsWhereMemberInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClientsWhereMemberInput | UserUpsertWithWhereUniqueWithoutClientsWhereMemberInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClientsWhereMemberInput | UserUpdateWithWhereUniqueWithoutClientsWhereMemberInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClientsWhereMemberInput | UserUpdateManyWithWhereWithoutClientsWhereMemberInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutClientsWhereAdminNestedInput = {
    create?: XOR<UserCreateWithoutClientsWhereAdminInput, UserUncheckedCreateWithoutClientsWhereAdminInput> | UserCreateWithoutClientsWhereAdminInput[] | UserUncheckedCreateWithoutClientsWhereAdminInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientsWhereAdminInput | UserCreateOrConnectWithoutClientsWhereAdminInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClientsWhereAdminInput | UserUpsertWithWhereUniqueWithoutClientsWhereAdminInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClientsWhereAdminInput | UserUpdateWithWhereUniqueWithoutClientsWhereAdminInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClientsWhereAdminInput | UserUpdateManyWithWhereWithoutClientsWhereAdminInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutClientInput | ProjectUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutClientInput | ProjectUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutClientInput | ProjectUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutClientsWhereMemberNestedInput = {
    create?: XOR<UserCreateWithoutClientsWhereMemberInput, UserUncheckedCreateWithoutClientsWhereMemberInput> | UserCreateWithoutClientsWhereMemberInput[] | UserUncheckedCreateWithoutClientsWhereMemberInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientsWhereMemberInput | UserCreateOrConnectWithoutClientsWhereMemberInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClientsWhereMemberInput | UserUpsertWithWhereUniqueWithoutClientsWhereMemberInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClientsWhereMemberInput | UserUpdateWithWhereUniqueWithoutClientsWhereMemberInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClientsWhereMemberInput | UserUpdateManyWithWhereWithoutClientsWhereMemberInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutClientsWhereAdminNestedInput = {
    create?: XOR<UserCreateWithoutClientsWhereAdminInput, UserUncheckedCreateWithoutClientsWhereAdminInput> | UserCreateWithoutClientsWhereAdminInput[] | UserUncheckedCreateWithoutClientsWhereAdminInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientsWhereAdminInput | UserCreateOrConnectWithoutClientsWhereAdminInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClientsWhereAdminInput | UserUpsertWithWhereUniqueWithoutClientsWhereAdminInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClientsWhereAdminInput | UserUpdateWithWhereUniqueWithoutClientsWhereAdminInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClientsWhereAdminInput | UserUpdateManyWithWhereWithoutClientsWhereAdminInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutClientInput | ProjectUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutClientInput | ProjectUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutClientInput | ProjectUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    connect?: UserWhereUniqueInput
  }

  export type HostnameCreateNestedManyWithoutProjectInput = {
    create?: XOR<HostnameCreateWithoutProjectInput, HostnameUncheckedCreateWithoutProjectInput> | HostnameCreateWithoutProjectInput[] | HostnameUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: HostnameCreateOrConnectWithoutProjectInput | HostnameCreateOrConnectWithoutProjectInput[]
    createMany?: HostnameCreateManyProjectInputEnvelope
    connect?: HostnameWhereUniqueInput | HostnameWhereUniqueInput[]
  }

  export type SubdomainCreateNestedManyWithoutProjectInput = {
    create?: XOR<SubdomainCreateWithoutProjectInput, SubdomainUncheckedCreateWithoutProjectInput> | SubdomainCreateWithoutProjectInput[] | SubdomainUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SubdomainCreateOrConnectWithoutProjectInput | SubdomainCreateOrConnectWithoutProjectInput[]
    createMany?: SubdomainCreateManyProjectInputEnvelope
    connect?: SubdomainWhereUniqueInput | SubdomainWhereUniqueInput[]
  }

  export type ClientCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ClientCreateWithoutProjectsInput, ClientUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutProjectsInput
    connect?: ClientWhereUniqueInput
  }

  export type HostnameUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<HostnameCreateWithoutProjectInput, HostnameUncheckedCreateWithoutProjectInput> | HostnameCreateWithoutProjectInput[] | HostnameUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: HostnameCreateOrConnectWithoutProjectInput | HostnameCreateOrConnectWithoutProjectInput[]
    createMany?: HostnameCreateManyProjectInputEnvelope
    connect?: HostnameWhereUniqueInput | HostnameWhereUniqueInput[]
  }

  export type SubdomainUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<SubdomainCreateWithoutProjectInput, SubdomainUncheckedCreateWithoutProjectInput> | SubdomainCreateWithoutProjectInput[] | SubdomainUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SubdomainCreateOrConnectWithoutProjectInput | SubdomainCreateOrConnectWithoutProjectInput[]
    createMany?: SubdomainCreateManyProjectInputEnvelope
    connect?: SubdomainWhereUniqueInput | SubdomainWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    upsert?: UserUpsertWithoutProjectInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectInput, UserUpdateWithoutProjectInput>, UserUncheckedUpdateWithoutProjectInput>
  }

  export type HostnameUpdateManyWithoutProjectNestedInput = {
    create?: XOR<HostnameCreateWithoutProjectInput, HostnameUncheckedCreateWithoutProjectInput> | HostnameCreateWithoutProjectInput[] | HostnameUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: HostnameCreateOrConnectWithoutProjectInput | HostnameCreateOrConnectWithoutProjectInput[]
    upsert?: HostnameUpsertWithWhereUniqueWithoutProjectInput | HostnameUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: HostnameCreateManyProjectInputEnvelope
    set?: HostnameWhereUniqueInput | HostnameWhereUniqueInput[]
    disconnect?: HostnameWhereUniqueInput | HostnameWhereUniqueInput[]
    delete?: HostnameWhereUniqueInput | HostnameWhereUniqueInput[]
    connect?: HostnameWhereUniqueInput | HostnameWhereUniqueInput[]
    update?: HostnameUpdateWithWhereUniqueWithoutProjectInput | HostnameUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: HostnameUpdateManyWithWhereWithoutProjectInput | HostnameUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: HostnameScalarWhereInput | HostnameScalarWhereInput[]
  }

  export type SubdomainUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SubdomainCreateWithoutProjectInput, SubdomainUncheckedCreateWithoutProjectInput> | SubdomainCreateWithoutProjectInput[] | SubdomainUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SubdomainCreateOrConnectWithoutProjectInput | SubdomainCreateOrConnectWithoutProjectInput[]
    upsert?: SubdomainUpsertWithWhereUniqueWithoutProjectInput | SubdomainUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SubdomainCreateManyProjectInputEnvelope
    set?: SubdomainWhereUniqueInput | SubdomainWhereUniqueInput[]
    disconnect?: SubdomainWhereUniqueInput | SubdomainWhereUniqueInput[]
    delete?: SubdomainWhereUniqueInput | SubdomainWhereUniqueInput[]
    connect?: SubdomainWhereUniqueInput | SubdomainWhereUniqueInput[]
    update?: SubdomainUpdateWithWhereUniqueWithoutProjectInput | SubdomainUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SubdomainUpdateManyWithWhereWithoutProjectInput | SubdomainUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SubdomainScalarWhereInput | SubdomainScalarWhereInput[]
  }

  export type ClientUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<ClientCreateWithoutProjectsInput, ClientUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutProjectsInput
    upsert?: ClientUpsertWithoutProjectsInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutProjectsInput, ClientUpdateWithoutProjectsInput>, ClientUncheckedUpdateWithoutProjectsInput>
  }

  export type HostnameUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<HostnameCreateWithoutProjectInput, HostnameUncheckedCreateWithoutProjectInput> | HostnameCreateWithoutProjectInput[] | HostnameUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: HostnameCreateOrConnectWithoutProjectInput | HostnameCreateOrConnectWithoutProjectInput[]
    upsert?: HostnameUpsertWithWhereUniqueWithoutProjectInput | HostnameUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: HostnameCreateManyProjectInputEnvelope
    set?: HostnameWhereUniqueInput | HostnameWhereUniqueInput[]
    disconnect?: HostnameWhereUniqueInput | HostnameWhereUniqueInput[]
    delete?: HostnameWhereUniqueInput | HostnameWhereUniqueInput[]
    connect?: HostnameWhereUniqueInput | HostnameWhereUniqueInput[]
    update?: HostnameUpdateWithWhereUniqueWithoutProjectInput | HostnameUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: HostnameUpdateManyWithWhereWithoutProjectInput | HostnameUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: HostnameScalarWhereInput | HostnameScalarWhereInput[]
  }

  export type SubdomainUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SubdomainCreateWithoutProjectInput, SubdomainUncheckedCreateWithoutProjectInput> | SubdomainCreateWithoutProjectInput[] | SubdomainUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SubdomainCreateOrConnectWithoutProjectInput | SubdomainCreateOrConnectWithoutProjectInput[]
    upsert?: SubdomainUpsertWithWhereUniqueWithoutProjectInput | SubdomainUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SubdomainCreateManyProjectInputEnvelope
    set?: SubdomainWhereUniqueInput | SubdomainWhereUniqueInput[]
    disconnect?: SubdomainWhereUniqueInput | SubdomainWhereUniqueInput[]
    delete?: SubdomainWhereUniqueInput | SubdomainWhereUniqueInput[]
    connect?: SubdomainWhereUniqueInput | SubdomainWhereUniqueInput[]
    update?: SubdomainUpdateWithWhereUniqueWithoutProjectInput | SubdomainUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SubdomainUpdateManyWithWhereWithoutProjectInput | SubdomainUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SubdomainScalarWhereInput | SubdomainScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutSubdomainsInput = {
    create?: XOR<ProjectCreateWithoutSubdomainsInput, ProjectUncheckedCreateWithoutSubdomainsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSubdomainsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneWithoutSubdomainsNestedInput = {
    create?: XOR<ProjectCreateWithoutSubdomainsInput, ProjectUncheckedCreateWithoutSubdomainsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSubdomainsInput
    upsert?: ProjectUpsertWithoutSubdomainsInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutSubdomainsInput, ProjectUpdateWithoutSubdomainsInput>, ProjectUncheckedUpdateWithoutSubdomainsInput>
  }

  export type ProjectCreateNestedOneWithoutHostnamesInput = {
    create?: XOR<ProjectCreateWithoutHostnamesInput, ProjectUncheckedCreateWithoutHostnamesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutHostnamesInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneWithoutHostnamesNestedInput = {
    create?: XOR<ProjectCreateWithoutHostnamesInput, ProjectUncheckedCreateWithoutHostnamesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutHostnamesInput
    upsert?: ProjectUpsertWithoutHostnamesInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutHostnamesInput, ProjectUpdateWithoutHostnamesInput>, ProjectUncheckedUpdateWithoutHostnamesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ClientCreateWithoutCreatedByInput = {
    id?: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentPlanId: string
    members?: UserCreateNestedManyWithoutClientsWhereMemberInput
    admins?: UserCreateNestedManyWithoutClientsWhereAdminInput
    projects?: ProjectCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutCreatedByInput = {
    id?: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentPlanId: string
    members?: UserUncheckedCreateNestedManyWithoutClientsWhereMemberInput
    admins?: UserUncheckedCreateNestedManyWithoutClientsWhereAdminInput
    projects?: ProjectUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutCreatedByInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutCreatedByInput, ClientUncheckedCreateWithoutCreatedByInput>
  }

  export type ClientCreateManyCreatedByInputEnvelope = {
    data: ClientCreateManyCreatedByInput | ClientCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isBugReportsEnabled?: boolean
    isFeatureRequestsEnabled?: boolean
    isFeatureFeedbackEnabled?: boolean
    isOwnerUpdatesEnabled?: boolean
    isOwnerIssuesEnabled?: boolean
    isUserIssuesEnabled?: boolean
    hostnames?: HostnameCreateNestedManyWithoutProjectInput
    subdomains?: SubdomainCreateNestedManyWithoutProjectInput
    client?: ClientCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isBugReportsEnabled?: boolean
    isFeatureRequestsEnabled?: boolean
    isFeatureFeedbackEnabled?: boolean
    isOwnerUpdatesEnabled?: boolean
    isOwnerIssuesEnabled?: boolean
    isUserIssuesEnabled?: boolean
    clientId?: string | null
    hostnames?: HostnameUncheckedCreateNestedManyWithoutProjectInput
    subdomains?: SubdomainUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCreatedByInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCreatedByInput, ProjectUncheckedCreateWithoutCreatedByInput>
  }

  export type ProjectCreateManyCreatedByInputEnvelope = {
    data: ProjectCreateManyCreatedByInput | ProjectCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ClientCreateWithoutMembersInput = {
    id?: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentPlanId: string
    createdBy: UserCreateNestedOneWithoutClientCreatedInput
    admins?: UserCreateNestedManyWithoutClientsWhereAdminInput
    projects?: ProjectCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutMembersInput = {
    id?: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    paymentPlanId: string
    admins?: UserUncheckedCreateNestedManyWithoutClientsWhereAdminInput
    projects?: ProjectUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutMembersInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutMembersInput, ClientUncheckedCreateWithoutMembersInput>
  }

  export type ClientCreateWithoutAdminsInput = {
    id?: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentPlanId: string
    createdBy: UserCreateNestedOneWithoutClientCreatedInput
    members?: UserCreateNestedManyWithoutClientsWhereMemberInput
    projects?: ProjectCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutAdminsInput = {
    id?: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    paymentPlanId: string
    members?: UserUncheckedCreateNestedManyWithoutClientsWhereMemberInput
    projects?: ProjectUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutAdminsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutAdminsInput, ClientUncheckedCreateWithoutAdminsInput>
  }

  export type ClientUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutCreatedByInput, ClientUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ClientCreateWithoutCreatedByInput, ClientUncheckedCreateWithoutCreatedByInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutCreatedByInput, ClientUncheckedUpdateWithoutCreatedByInput>
  }

  export type ClientUpdateManyWithWhereWithoutCreatedByInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: StringFilter<"Client"> | string
    displayName?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    userId?: StringFilter<"Client"> | string
    paymentPlanId?: StringFilter<"Client"> | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutCreatedByInput, ProjectUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ProjectCreateWithoutCreatedByInput, ProjectUncheckedCreateWithoutCreatedByInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutCreatedByInput, ProjectUncheckedUpdateWithoutCreatedByInput>
  }

  export type ProjectUpdateManyWithWhereWithoutCreatedByInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    isBugReportsEnabled?: BoolFilter<"Project"> | boolean
    isFeatureRequestsEnabled?: BoolFilter<"Project"> | boolean
    isFeatureFeedbackEnabled?: BoolFilter<"Project"> | boolean
    isOwnerUpdatesEnabled?: BoolFilter<"Project"> | boolean
    isOwnerIssuesEnabled?: BoolFilter<"Project"> | boolean
    isUserIssuesEnabled?: BoolFilter<"Project"> | boolean
    clientId?: StringNullableFilter<"Project"> | string | null
    userId?: StringFilter<"Project"> | string
  }

  export type ClientUpsertWithWhereUniqueWithoutMembersInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutMembersInput, ClientUncheckedUpdateWithoutMembersInput>
    create: XOR<ClientCreateWithoutMembersInput, ClientUncheckedCreateWithoutMembersInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutMembersInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutMembersInput, ClientUncheckedUpdateWithoutMembersInput>
  }

  export type ClientUpdateManyWithWhereWithoutMembersInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutMembersInput>
  }

  export type ClientUpsertWithWhereUniqueWithoutAdminsInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutAdminsInput, ClientUncheckedUpdateWithoutAdminsInput>
    create: XOR<ClientCreateWithoutAdminsInput, ClientUncheckedCreateWithoutAdminsInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutAdminsInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutAdminsInput, ClientUncheckedUpdateWithoutAdminsInput>
  }

  export type ClientUpdateManyWithWhereWithoutAdminsInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutAdminsInput>
  }

  export type UserCreateWithoutClientCreatedInput = {
    id?: string
    email: string
    supabaseUserId: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId?: string | null
    project?: ProjectCreateNestedManyWithoutCreatedByInput
    clientsWhereMember?: ClientCreateNestedManyWithoutMembersInput
    clientsWhereAdmin?: ClientCreateNestedManyWithoutAdminsInput
  }

  export type UserUncheckedCreateWithoutClientCreatedInput = {
    id?: string
    email: string
    supabaseUserId: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId?: string | null
    project?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput
    clientsWhereMember?: ClientUncheckedCreateNestedManyWithoutMembersInput
    clientsWhereAdmin?: ClientUncheckedCreateNestedManyWithoutAdminsInput
  }

  export type UserCreateOrConnectWithoutClientCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientCreatedInput, UserUncheckedCreateWithoutClientCreatedInput>
  }

  export type UserCreateWithoutClientsWhereMemberInput = {
    id?: string
    email: string
    supabaseUserId: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId?: string | null
    clientCreated?: ClientCreateNestedManyWithoutCreatedByInput
    project?: ProjectCreateNestedManyWithoutCreatedByInput
    clientsWhereAdmin?: ClientCreateNestedManyWithoutAdminsInput
  }

  export type UserUncheckedCreateWithoutClientsWhereMemberInput = {
    id?: string
    email: string
    supabaseUserId: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId?: string | null
    clientCreated?: ClientUncheckedCreateNestedManyWithoutCreatedByInput
    project?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput
    clientsWhereAdmin?: ClientUncheckedCreateNestedManyWithoutAdminsInput
  }

  export type UserCreateOrConnectWithoutClientsWhereMemberInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientsWhereMemberInput, UserUncheckedCreateWithoutClientsWhereMemberInput>
  }

  export type UserCreateWithoutClientsWhereAdminInput = {
    id?: string
    email: string
    supabaseUserId: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId?: string | null
    clientCreated?: ClientCreateNestedManyWithoutCreatedByInput
    project?: ProjectCreateNestedManyWithoutCreatedByInput
    clientsWhereMember?: ClientCreateNestedManyWithoutMembersInput
  }

  export type UserUncheckedCreateWithoutClientsWhereAdminInput = {
    id?: string
    email: string
    supabaseUserId: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId?: string | null
    clientCreated?: ClientUncheckedCreateNestedManyWithoutCreatedByInput
    project?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput
    clientsWhereMember?: ClientUncheckedCreateNestedManyWithoutMembersInput
  }

  export type UserCreateOrConnectWithoutClientsWhereAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientsWhereAdminInput, UserUncheckedCreateWithoutClientsWhereAdminInput>
  }

  export type ProjectCreateWithoutClientInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isBugReportsEnabled?: boolean
    isFeatureRequestsEnabled?: boolean
    isFeatureFeedbackEnabled?: boolean
    isOwnerUpdatesEnabled?: boolean
    isOwnerIssuesEnabled?: boolean
    isUserIssuesEnabled?: boolean
    createdBy: UserCreateNestedOneWithoutProjectInput
    hostnames?: HostnameCreateNestedManyWithoutProjectInput
    subdomains?: SubdomainCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutClientInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isBugReportsEnabled?: boolean
    isFeatureRequestsEnabled?: boolean
    isFeatureFeedbackEnabled?: boolean
    isOwnerUpdatesEnabled?: boolean
    isOwnerIssuesEnabled?: boolean
    isUserIssuesEnabled?: boolean
    userId: string
    hostnames?: HostnameUncheckedCreateNestedManyWithoutProjectInput
    subdomains?: SubdomainUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutClientInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput>
  }

  export type ProjectCreateManyClientInputEnvelope = {
    data: ProjectCreateManyClientInput | ProjectCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutClientCreatedInput = {
    update: XOR<UserUpdateWithoutClientCreatedInput, UserUncheckedUpdateWithoutClientCreatedInput>
    create: XOR<UserCreateWithoutClientCreatedInput, UserUncheckedCreateWithoutClientCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClientCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClientCreatedInput, UserUncheckedUpdateWithoutClientCreatedInput>
  }

  export type UserUpdateWithoutClientCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateManyWithoutCreatedByNestedInput
    clientsWhereMember?: ClientUpdateManyWithoutMembersNestedInput
    clientsWhereAdmin?: ClientUpdateManyWithoutAdminsNestedInput
  }

  export type UserUncheckedUpdateWithoutClientCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput
    clientsWhereMember?: ClientUncheckedUpdateManyWithoutMembersNestedInput
    clientsWhereAdmin?: ClientUncheckedUpdateManyWithoutAdminsNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutClientsWhereMemberInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutClientsWhereMemberInput, UserUncheckedUpdateWithoutClientsWhereMemberInput>
    create: XOR<UserCreateWithoutClientsWhereMemberInput, UserUncheckedCreateWithoutClientsWhereMemberInput>
  }

  export type UserUpdateWithWhereUniqueWithoutClientsWhereMemberInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutClientsWhereMemberInput, UserUncheckedUpdateWithoutClientsWhereMemberInput>
  }

  export type UserUpdateManyWithWhereWithoutClientsWhereMemberInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutClientsWhereMemberInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    supabaseUserId?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clientId?: StringNullableFilter<"User"> | string | null
  }

  export type UserUpsertWithWhereUniqueWithoutClientsWhereAdminInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutClientsWhereAdminInput, UserUncheckedUpdateWithoutClientsWhereAdminInput>
    create: XOR<UserCreateWithoutClientsWhereAdminInput, UserUncheckedCreateWithoutClientsWhereAdminInput>
  }

  export type UserUpdateWithWhereUniqueWithoutClientsWhereAdminInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutClientsWhereAdminInput, UserUncheckedUpdateWithoutClientsWhereAdminInput>
  }

  export type UserUpdateManyWithWhereWithoutClientsWhereAdminInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutClientsWhereAdminInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutClientInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutClientInput, ProjectUncheckedUpdateWithoutClientInput>
    create: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutClientInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutClientInput, ProjectUncheckedUpdateWithoutClientInput>
  }

  export type ProjectUpdateManyWithWhereWithoutClientInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutClientInput>
  }

  export type UserCreateWithoutProjectInput = {
    id?: string
    email: string
    supabaseUserId: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId?: string | null
    clientCreated?: ClientCreateNestedManyWithoutCreatedByInput
    clientsWhereMember?: ClientCreateNestedManyWithoutMembersInput
    clientsWhereAdmin?: ClientCreateNestedManyWithoutAdminsInput
  }

  export type UserUncheckedCreateWithoutProjectInput = {
    id?: string
    email: string
    supabaseUserId: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId?: string | null
    clientCreated?: ClientUncheckedCreateNestedManyWithoutCreatedByInput
    clientsWhereMember?: ClientUncheckedCreateNestedManyWithoutMembersInput
    clientsWhereAdmin?: ClientUncheckedCreateNestedManyWithoutAdminsInput
  }

  export type UserCreateOrConnectWithoutProjectInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
  }

  export type HostnameCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hostname: string
  }

  export type HostnameUncheckedCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hostname: string
  }

  export type HostnameCreateOrConnectWithoutProjectInput = {
    where: HostnameWhereUniqueInput
    create: XOR<HostnameCreateWithoutProjectInput, HostnameUncheckedCreateWithoutProjectInput>
  }

  export type HostnameCreateManyProjectInputEnvelope = {
    data: HostnameCreateManyProjectInput | HostnameCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type SubdomainCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subdomain: string
  }

  export type SubdomainUncheckedCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subdomain: string
  }

  export type SubdomainCreateOrConnectWithoutProjectInput = {
    where: SubdomainWhereUniqueInput
    create: XOR<SubdomainCreateWithoutProjectInput, SubdomainUncheckedCreateWithoutProjectInput>
  }

  export type SubdomainCreateManyProjectInputEnvelope = {
    data: SubdomainCreateManyProjectInput | SubdomainCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ClientCreateWithoutProjectsInput = {
    id?: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentPlanId: string
    createdBy: UserCreateNestedOneWithoutClientCreatedInput
    members?: UserCreateNestedManyWithoutClientsWhereMemberInput
    admins?: UserCreateNestedManyWithoutClientsWhereAdminInput
  }

  export type ClientUncheckedCreateWithoutProjectsInput = {
    id?: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    paymentPlanId: string
    members?: UserUncheckedCreateNestedManyWithoutClientsWhereMemberInput
    admins?: UserUncheckedCreateNestedManyWithoutClientsWhereAdminInput
  }

  export type ClientCreateOrConnectWithoutProjectsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutProjectsInput, ClientUncheckedCreateWithoutProjectsInput>
  }

  export type UserUpsertWithoutProjectInput = {
    update: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
  }

  export type UserUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientCreated?: ClientUpdateManyWithoutCreatedByNestedInput
    clientsWhereMember?: ClientUpdateManyWithoutMembersNestedInput
    clientsWhereAdmin?: ClientUpdateManyWithoutAdminsNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientCreated?: ClientUncheckedUpdateManyWithoutCreatedByNestedInput
    clientsWhereMember?: ClientUncheckedUpdateManyWithoutMembersNestedInput
    clientsWhereAdmin?: ClientUncheckedUpdateManyWithoutAdminsNestedInput
  }

  export type HostnameUpsertWithWhereUniqueWithoutProjectInput = {
    where: HostnameWhereUniqueInput
    update: XOR<HostnameUpdateWithoutProjectInput, HostnameUncheckedUpdateWithoutProjectInput>
    create: XOR<HostnameCreateWithoutProjectInput, HostnameUncheckedCreateWithoutProjectInput>
  }

  export type HostnameUpdateWithWhereUniqueWithoutProjectInput = {
    where: HostnameWhereUniqueInput
    data: XOR<HostnameUpdateWithoutProjectInput, HostnameUncheckedUpdateWithoutProjectInput>
  }

  export type HostnameUpdateManyWithWhereWithoutProjectInput = {
    where: HostnameScalarWhereInput
    data: XOR<HostnameUpdateManyMutationInput, HostnameUncheckedUpdateManyWithoutProjectInput>
  }

  export type HostnameScalarWhereInput = {
    AND?: HostnameScalarWhereInput | HostnameScalarWhereInput[]
    OR?: HostnameScalarWhereInput[]
    NOT?: HostnameScalarWhereInput | HostnameScalarWhereInput[]
    id?: StringFilter<"Hostname"> | string
    createdAt?: DateTimeFilter<"Hostname"> | Date | string
    updatedAt?: DateTimeFilter<"Hostname"> | Date | string
    hostname?: StringFilter<"Hostname"> | string
    projectId?: StringNullableFilter<"Hostname"> | string | null
  }

  export type SubdomainUpsertWithWhereUniqueWithoutProjectInput = {
    where: SubdomainWhereUniqueInput
    update: XOR<SubdomainUpdateWithoutProjectInput, SubdomainUncheckedUpdateWithoutProjectInput>
    create: XOR<SubdomainCreateWithoutProjectInput, SubdomainUncheckedCreateWithoutProjectInput>
  }

  export type SubdomainUpdateWithWhereUniqueWithoutProjectInput = {
    where: SubdomainWhereUniqueInput
    data: XOR<SubdomainUpdateWithoutProjectInput, SubdomainUncheckedUpdateWithoutProjectInput>
  }

  export type SubdomainUpdateManyWithWhereWithoutProjectInput = {
    where: SubdomainScalarWhereInput
    data: XOR<SubdomainUpdateManyMutationInput, SubdomainUncheckedUpdateManyWithoutProjectInput>
  }

  export type SubdomainScalarWhereInput = {
    AND?: SubdomainScalarWhereInput | SubdomainScalarWhereInput[]
    OR?: SubdomainScalarWhereInput[]
    NOT?: SubdomainScalarWhereInput | SubdomainScalarWhereInput[]
    id?: StringFilter<"Subdomain"> | string
    createdAt?: DateTimeFilter<"Subdomain"> | Date | string
    updatedAt?: DateTimeFilter<"Subdomain"> | Date | string
    subdomain?: StringFilter<"Subdomain"> | string
    projectId?: StringNullableFilter<"Subdomain"> | string | null
  }

  export type ClientUpsertWithoutProjectsInput = {
    update: XOR<ClientUpdateWithoutProjectsInput, ClientUncheckedUpdateWithoutProjectsInput>
    create: XOR<ClientCreateWithoutProjectsInput, ClientUncheckedCreateWithoutProjectsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutProjectsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutProjectsInput, ClientUncheckedUpdateWithoutProjectsInput>
  }

  export type ClientUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentPlanId?: StringFieldUpdateOperationsInput | string
    createdBy?: UserUpdateOneRequiredWithoutClientCreatedNestedInput
    members?: UserUpdateManyWithoutClientsWhereMemberNestedInput
    admins?: UserUpdateManyWithoutClientsWhereAdminNestedInput
  }

  export type ClientUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    paymentPlanId?: StringFieldUpdateOperationsInput | string
    members?: UserUncheckedUpdateManyWithoutClientsWhereMemberNestedInput
    admins?: UserUncheckedUpdateManyWithoutClientsWhereAdminNestedInput
  }

  export type ProjectCreateWithoutSubdomainsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isBugReportsEnabled?: boolean
    isFeatureRequestsEnabled?: boolean
    isFeatureFeedbackEnabled?: boolean
    isOwnerUpdatesEnabled?: boolean
    isOwnerIssuesEnabled?: boolean
    isUserIssuesEnabled?: boolean
    createdBy: UserCreateNestedOneWithoutProjectInput
    hostnames?: HostnameCreateNestedManyWithoutProjectInput
    client?: ClientCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutSubdomainsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isBugReportsEnabled?: boolean
    isFeatureRequestsEnabled?: boolean
    isFeatureFeedbackEnabled?: boolean
    isOwnerUpdatesEnabled?: boolean
    isOwnerIssuesEnabled?: boolean
    isUserIssuesEnabled?: boolean
    clientId?: string | null
    userId: string
    hostnames?: HostnameUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutSubdomainsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSubdomainsInput, ProjectUncheckedCreateWithoutSubdomainsInput>
  }

  export type ProjectUpsertWithoutSubdomainsInput = {
    update: XOR<ProjectUpdateWithoutSubdomainsInput, ProjectUncheckedUpdateWithoutSubdomainsInput>
    create: XOR<ProjectCreateWithoutSubdomainsInput, ProjectUncheckedCreateWithoutSubdomainsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutSubdomainsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutSubdomainsInput, ProjectUncheckedUpdateWithoutSubdomainsInput>
  }

  export type ProjectUpdateWithoutSubdomainsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBugReportsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureRequestsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureFeedbackEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerUpdatesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isUserIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: UserUpdateOneRequiredWithoutProjectNestedInput
    hostnames?: HostnameUpdateManyWithoutProjectNestedInput
    client?: ClientUpdateOneWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSubdomainsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBugReportsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureRequestsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureFeedbackEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerUpdatesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isUserIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    hostnames?: HostnameUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutHostnamesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isBugReportsEnabled?: boolean
    isFeatureRequestsEnabled?: boolean
    isFeatureFeedbackEnabled?: boolean
    isOwnerUpdatesEnabled?: boolean
    isOwnerIssuesEnabled?: boolean
    isUserIssuesEnabled?: boolean
    createdBy: UserCreateNestedOneWithoutProjectInput
    subdomains?: SubdomainCreateNestedManyWithoutProjectInput
    client?: ClientCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutHostnamesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isBugReportsEnabled?: boolean
    isFeatureRequestsEnabled?: boolean
    isFeatureFeedbackEnabled?: boolean
    isOwnerUpdatesEnabled?: boolean
    isOwnerIssuesEnabled?: boolean
    isUserIssuesEnabled?: boolean
    clientId?: string | null
    userId: string
    subdomains?: SubdomainUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutHostnamesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutHostnamesInput, ProjectUncheckedCreateWithoutHostnamesInput>
  }

  export type ProjectUpsertWithoutHostnamesInput = {
    update: XOR<ProjectUpdateWithoutHostnamesInput, ProjectUncheckedUpdateWithoutHostnamesInput>
    create: XOR<ProjectCreateWithoutHostnamesInput, ProjectUncheckedCreateWithoutHostnamesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutHostnamesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutHostnamesInput, ProjectUncheckedUpdateWithoutHostnamesInput>
  }

  export type ProjectUpdateWithoutHostnamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBugReportsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureRequestsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureFeedbackEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerUpdatesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isUserIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: UserUpdateOneRequiredWithoutProjectNestedInput
    subdomains?: SubdomainUpdateManyWithoutProjectNestedInput
    client?: ClientUpdateOneWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutHostnamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBugReportsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureRequestsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureFeedbackEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerUpdatesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isUserIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    subdomains?: SubdomainUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ClientCreateManyCreatedByInput = {
    id?: string
    displayName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentPlanId: string
  }

  export type ProjectCreateManyCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isBugReportsEnabled?: boolean
    isFeatureRequestsEnabled?: boolean
    isFeatureFeedbackEnabled?: boolean
    isOwnerUpdatesEnabled?: boolean
    isOwnerIssuesEnabled?: boolean
    isUserIssuesEnabled?: boolean
    clientId?: string | null
  }

  export type ClientUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentPlanId?: StringFieldUpdateOperationsInput | string
    members?: UserUpdateManyWithoutClientsWhereMemberNestedInput
    admins?: UserUpdateManyWithoutClientsWhereAdminNestedInput
    projects?: ProjectUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentPlanId?: StringFieldUpdateOperationsInput | string
    members?: UserUncheckedUpdateManyWithoutClientsWhereMemberNestedInput
    admins?: UserUncheckedUpdateManyWithoutClientsWhereAdminNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentPlanId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBugReportsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureRequestsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureFeedbackEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerUpdatesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isUserIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    hostnames?: HostnameUpdateManyWithoutProjectNestedInput
    subdomains?: SubdomainUpdateManyWithoutProjectNestedInput
    client?: ClientUpdateOneWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBugReportsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureRequestsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureFeedbackEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerUpdatesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isUserIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    hostnames?: HostnameUncheckedUpdateManyWithoutProjectNestedInput
    subdomains?: SubdomainUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBugReportsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureRequestsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureFeedbackEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerUpdatesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isUserIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentPlanId?: StringFieldUpdateOperationsInput | string
    createdBy?: UserUpdateOneRequiredWithoutClientCreatedNestedInput
    admins?: UserUpdateManyWithoutClientsWhereAdminNestedInput
    projects?: ProjectUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    paymentPlanId?: StringFieldUpdateOperationsInput | string
    admins?: UserUncheckedUpdateManyWithoutClientsWhereAdminNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    paymentPlanId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUpdateWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentPlanId?: StringFieldUpdateOperationsInput | string
    createdBy?: UserUpdateOneRequiredWithoutClientCreatedNestedInput
    members?: UserUpdateManyWithoutClientsWhereMemberNestedInput
    projects?: ProjectUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    paymentPlanId?: StringFieldUpdateOperationsInput | string
    members?: UserUncheckedUpdateManyWithoutClientsWhereMemberNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    paymentPlanId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateManyClientInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isBugReportsEnabled?: boolean
    isFeatureRequestsEnabled?: boolean
    isFeatureFeedbackEnabled?: boolean
    isOwnerUpdatesEnabled?: boolean
    isOwnerIssuesEnabled?: boolean
    isUserIssuesEnabled?: boolean
    userId: string
  }

  export type UserUpdateWithoutClientsWhereMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientCreated?: ClientUpdateManyWithoutCreatedByNestedInput
    project?: ProjectUpdateManyWithoutCreatedByNestedInput
    clientsWhereAdmin?: ClientUpdateManyWithoutAdminsNestedInput
  }

  export type UserUncheckedUpdateWithoutClientsWhereMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientCreated?: ClientUncheckedUpdateManyWithoutCreatedByNestedInput
    project?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput
    clientsWhereAdmin?: ClientUncheckedUpdateManyWithoutAdminsNestedInput
  }

  export type UserUncheckedUpdateManyWithoutClientsWhereMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpdateWithoutClientsWhereAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientCreated?: ClientUpdateManyWithoutCreatedByNestedInput
    project?: ProjectUpdateManyWithoutCreatedByNestedInput
    clientsWhereMember?: ClientUpdateManyWithoutMembersNestedInput
  }

  export type UserUncheckedUpdateWithoutClientsWhereAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientCreated?: ClientUncheckedUpdateManyWithoutCreatedByNestedInput
    project?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput
    clientsWhereMember?: ClientUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type UserUncheckedUpdateManyWithoutClientsWhereAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBugReportsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureRequestsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureFeedbackEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerUpdatesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isUserIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: UserUpdateOneRequiredWithoutProjectNestedInput
    hostnames?: HostnameUpdateManyWithoutProjectNestedInput
    subdomains?: SubdomainUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBugReportsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureRequestsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureFeedbackEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerUpdatesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isUserIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    hostnames?: HostnameUncheckedUpdateManyWithoutProjectNestedInput
    subdomains?: SubdomainUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBugReportsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureRequestsEnabled?: BoolFieldUpdateOperationsInput | boolean
    isFeatureFeedbackEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerUpdatesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isOwnerIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    isUserIssuesEnabled?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type HostnameCreateManyProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hostname: string
  }

  export type SubdomainCreateManyProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subdomain: string
  }

  export type HostnameUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostname?: StringFieldUpdateOperationsInput | string
  }

  export type HostnameUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostname?: StringFieldUpdateOperationsInput | string
  }

  export type HostnameUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostname?: StringFieldUpdateOperationsInput | string
  }

  export type SubdomainUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subdomain?: StringFieldUpdateOperationsInput | string
  }

  export type SubdomainUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subdomain?: StringFieldUpdateOperationsInput | string
  }

  export type SubdomainUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subdomain?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}