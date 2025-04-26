
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
 * Model PaymentPlan
 * 
 */
export type PaymentPlan = $Result.DefaultSelection<Prisma.$PaymentPlanPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PaymentPlans
 * const paymentPlans = await prisma.paymentPlan.findMany()
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
   * // Fetch zero or more PaymentPlans
   * const paymentPlans = await prisma.paymentPlan.findMany()
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
   * `prisma.paymentPlan`: Exposes CRUD operations for the **PaymentPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentPlans
    * const paymentPlans = await prisma.paymentPlan.findMany()
    * ```
    */
  get paymentPlan(): Prisma.PaymentPlanDelegate<ExtArgs, ClientOptions>;
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
    PaymentPlan: 'PaymentPlan'
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
      modelProps: "paymentPlan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PaymentPlan: {
        payload: Prisma.$PaymentPlanPayload<ExtArgs>
        fields: Prisma.PaymentPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPlanPayload>
          }
          findFirst: {
            args: Prisma.PaymentPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPlanPayload>
          }
          findMany: {
            args: Prisma.PaymentPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPlanPayload>[]
          }
          create: {
            args: Prisma.PaymentPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPlanPayload>
          }
          createMany: {
            args: Prisma.PaymentPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPlanPayload>[]
          }
          delete: {
            args: Prisma.PaymentPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPlanPayload>
          }
          update: {
            args: Prisma.PaymentPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPlanPayload>
          }
          deleteMany: {
            args: Prisma.PaymentPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPlanPayload>[]
          }
          upsert: {
            args: Prisma.PaymentPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPlanPayload>
          }
          aggregate: {
            args: Prisma.PaymentPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentPlan>
          }
          groupBy: {
            args: Prisma.PaymentPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentPlanCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentPlanCountAggregateOutputType> | number
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
    paymentPlan?: PaymentPlanOmit
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
   * Models
   */

  /**
   * Model PaymentPlan
   */

  export type AggregatePaymentPlan = {
    _count: PaymentPlanCountAggregateOutputType | null
    _avg: PaymentPlanAvgAggregateOutputType | null
    _sum: PaymentPlanSumAggregateOutputType | null
    _min: PaymentPlanMinAggregateOutputType | null
    _max: PaymentPlanMaxAggregateOutputType | null
  }

  export type PaymentPlanAvgAggregateOutputType = {
    maxProjectCount: number | null
    maxTeamMemberCount: number | null
    sortIndex: number | null
  }

  export type PaymentPlanSumAggregateOutputType = {
    maxProjectCount: number | null
    maxTeamMemberCount: number | null
    sortIndex: number | null
  }

  export type PaymentPlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    monthlyPrice: string | null
    maxProjectCount: number | null
    maxTeamMemberCount: number | null
    isCustomSubdomainIncluded: boolean | null
    isEmbeddableFeedbackWidgetIncluded: boolean | null
    isCustomHostnameIncluded: boolean | null
    tag: string | null
    sortIndex: number | null
    stripePricingTableId: string | null
    stripePublishableKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentPlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    monthlyPrice: string | null
    maxProjectCount: number | null
    maxTeamMemberCount: number | null
    isCustomSubdomainIncluded: boolean | null
    isEmbeddableFeedbackWidgetIncluded: boolean | null
    isCustomHostnameIncluded: boolean | null
    tag: string | null
    sortIndex: number | null
    stripePricingTableId: string | null
    stripePublishableKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentPlanCountAggregateOutputType = {
    id: number
    name: number
    description: number
    monthlyPrice: number
    maxProjectCount: number
    maxTeamMemberCount: number
    isCustomSubdomainIncluded: number
    isEmbeddableFeedbackWidgetIncluded: number
    isCustomHostnameIncluded: number
    tag: number
    sortIndex: number
    stripePricingTableId: number
    stripePublishableKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentPlanAvgAggregateInputType = {
    maxProjectCount?: true
    maxTeamMemberCount?: true
    sortIndex?: true
  }

  export type PaymentPlanSumAggregateInputType = {
    maxProjectCount?: true
    maxTeamMemberCount?: true
    sortIndex?: true
  }

  export type PaymentPlanMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    monthlyPrice?: true
    maxProjectCount?: true
    maxTeamMemberCount?: true
    isCustomSubdomainIncluded?: true
    isEmbeddableFeedbackWidgetIncluded?: true
    isCustomHostnameIncluded?: true
    tag?: true
    sortIndex?: true
    stripePricingTableId?: true
    stripePublishableKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentPlanMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    monthlyPrice?: true
    maxProjectCount?: true
    maxTeamMemberCount?: true
    isCustomSubdomainIncluded?: true
    isEmbeddableFeedbackWidgetIncluded?: true
    isCustomHostnameIncluded?: true
    tag?: true
    sortIndex?: true
    stripePricingTableId?: true
    stripePublishableKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentPlanCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    monthlyPrice?: true
    maxProjectCount?: true
    maxTeamMemberCount?: true
    isCustomSubdomainIncluded?: true
    isEmbeddableFeedbackWidgetIncluded?: true
    isCustomHostnameIncluded?: true
    tag?: true
    sortIndex?: true
    stripePricingTableId?: true
    stripePublishableKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentPlan to aggregate.
     */
    where?: PaymentPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPlans to fetch.
     */
    orderBy?: PaymentPlanOrderByWithRelationInput | PaymentPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentPlans
    **/
    _count?: true | PaymentPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentPlanMaxAggregateInputType
  }

  export type GetPaymentPlanAggregateType<T extends PaymentPlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentPlan[P]>
      : GetScalarType<T[P], AggregatePaymentPlan[P]>
  }




  export type PaymentPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentPlanWhereInput
    orderBy?: PaymentPlanOrderByWithAggregationInput | PaymentPlanOrderByWithAggregationInput[]
    by: PaymentPlanScalarFieldEnum[] | PaymentPlanScalarFieldEnum
    having?: PaymentPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentPlanCountAggregateInputType | true
    _avg?: PaymentPlanAvgAggregateInputType
    _sum?: PaymentPlanSumAggregateInputType
    _min?: PaymentPlanMinAggregateInputType
    _max?: PaymentPlanMaxAggregateInputType
  }

  export type PaymentPlanGroupByOutputType = {
    id: string
    name: string
    description: string
    monthlyPrice: string
    maxProjectCount: number
    maxTeamMemberCount: number
    isCustomSubdomainIncluded: boolean
    isEmbeddableFeedbackWidgetIncluded: boolean
    isCustomHostnameIncluded: boolean
    tag: string | null
    sortIndex: number
    stripePricingTableId: string
    stripePublishableKey: string
    createdAt: Date
    updatedAt: Date
    _count: PaymentPlanCountAggregateOutputType | null
    _avg: PaymentPlanAvgAggregateOutputType | null
    _sum: PaymentPlanSumAggregateOutputType | null
    _min: PaymentPlanMinAggregateOutputType | null
    _max: PaymentPlanMaxAggregateOutputType | null
  }

  type GetPaymentPlanGroupByPayload<T extends PaymentPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentPlanGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentPlanGroupByOutputType[P]>
        }
      >
    >


  export type PaymentPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    monthlyPrice?: boolean
    maxProjectCount?: boolean
    maxTeamMemberCount?: boolean
    isCustomSubdomainIncluded?: boolean
    isEmbeddableFeedbackWidgetIncluded?: boolean
    isCustomHostnameIncluded?: boolean
    tag?: boolean
    sortIndex?: boolean
    stripePricingTableId?: boolean
    stripePublishableKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paymentPlan"]>

  export type PaymentPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    monthlyPrice?: boolean
    maxProjectCount?: boolean
    maxTeamMemberCount?: boolean
    isCustomSubdomainIncluded?: boolean
    isEmbeddableFeedbackWidgetIncluded?: boolean
    isCustomHostnameIncluded?: boolean
    tag?: boolean
    sortIndex?: boolean
    stripePricingTableId?: boolean
    stripePublishableKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paymentPlan"]>

  export type PaymentPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    monthlyPrice?: boolean
    maxProjectCount?: boolean
    maxTeamMemberCount?: boolean
    isCustomSubdomainIncluded?: boolean
    isEmbeddableFeedbackWidgetIncluded?: boolean
    isCustomHostnameIncluded?: boolean
    tag?: boolean
    sortIndex?: boolean
    stripePricingTableId?: boolean
    stripePublishableKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paymentPlan"]>

  export type PaymentPlanSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    monthlyPrice?: boolean
    maxProjectCount?: boolean
    maxTeamMemberCount?: boolean
    isCustomSubdomainIncluded?: boolean
    isEmbeddableFeedbackWidgetIncluded?: boolean
    isCustomHostnameIncluded?: boolean
    tag?: boolean
    sortIndex?: boolean
    stripePricingTableId?: boolean
    stripePublishableKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "monthlyPrice" | "maxProjectCount" | "maxTeamMemberCount" | "isCustomSubdomainIncluded" | "isEmbeddableFeedbackWidgetIncluded" | "isCustomHostnameIncluded" | "tag" | "sortIndex" | "stripePricingTableId" | "stripePublishableKey" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentPlan"]>

  export type $PaymentPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentPlan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      monthlyPrice: string
      maxProjectCount: number
      maxTeamMemberCount: number
      isCustomSubdomainIncluded: boolean
      isEmbeddableFeedbackWidgetIncluded: boolean
      isCustomHostnameIncluded: boolean
      tag: string | null
      sortIndex: number
      stripePricingTableId: string
      stripePublishableKey: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentPlan"]>
    composites: {}
  }

  type PaymentPlanGetPayload<S extends boolean | null | undefined | PaymentPlanDefaultArgs> = $Result.GetResult<Prisma.$PaymentPlanPayload, S>

  type PaymentPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentPlanCountAggregateInputType | true
    }

  export interface PaymentPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentPlan'], meta: { name: 'PaymentPlan' } }
    /**
     * Find zero or one PaymentPlan that matches the filter.
     * @param {PaymentPlanFindUniqueArgs} args - Arguments to find a PaymentPlan
     * @example
     * // Get one PaymentPlan
     * const paymentPlan = await prisma.paymentPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentPlanFindUniqueArgs>(args: SelectSubset<T, PaymentPlanFindUniqueArgs<ExtArgs>>): Prisma__PaymentPlanClient<$Result.GetResult<Prisma.$PaymentPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentPlanFindUniqueOrThrowArgs} args - Arguments to find a PaymentPlan
     * @example
     * // Get one PaymentPlan
     * const paymentPlan = await prisma.paymentPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentPlanClient<$Result.GetResult<Prisma.$PaymentPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPlanFindFirstArgs} args - Arguments to find a PaymentPlan
     * @example
     * // Get one PaymentPlan
     * const paymentPlan = await prisma.paymentPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentPlanFindFirstArgs>(args?: SelectSubset<T, PaymentPlanFindFirstArgs<ExtArgs>>): Prisma__PaymentPlanClient<$Result.GetResult<Prisma.$PaymentPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPlanFindFirstOrThrowArgs} args - Arguments to find a PaymentPlan
     * @example
     * // Get one PaymentPlan
     * const paymentPlan = await prisma.paymentPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentPlanClient<$Result.GetResult<Prisma.$PaymentPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentPlans
     * const paymentPlans = await prisma.paymentPlan.findMany()
     * 
     * // Get first 10 PaymentPlans
     * const paymentPlans = await prisma.paymentPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentPlanWithIdOnly = await prisma.paymentPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentPlanFindManyArgs>(args?: SelectSubset<T, PaymentPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentPlan.
     * @param {PaymentPlanCreateArgs} args - Arguments to create a PaymentPlan.
     * @example
     * // Create one PaymentPlan
     * const PaymentPlan = await prisma.paymentPlan.create({
     *   data: {
     *     // ... data to create a PaymentPlan
     *   }
     * })
     * 
     */
    create<T extends PaymentPlanCreateArgs>(args: SelectSubset<T, PaymentPlanCreateArgs<ExtArgs>>): Prisma__PaymentPlanClient<$Result.GetResult<Prisma.$PaymentPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentPlans.
     * @param {PaymentPlanCreateManyArgs} args - Arguments to create many PaymentPlans.
     * @example
     * // Create many PaymentPlans
     * const paymentPlan = await prisma.paymentPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentPlanCreateManyArgs>(args?: SelectSubset<T, PaymentPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentPlans and returns the data saved in the database.
     * @param {PaymentPlanCreateManyAndReturnArgs} args - Arguments to create many PaymentPlans.
     * @example
     * // Create many PaymentPlans
     * const paymentPlan = await prisma.paymentPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentPlans and only return the `id`
     * const paymentPlanWithIdOnly = await prisma.paymentPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentPlan.
     * @param {PaymentPlanDeleteArgs} args - Arguments to delete one PaymentPlan.
     * @example
     * // Delete one PaymentPlan
     * const PaymentPlan = await prisma.paymentPlan.delete({
     *   where: {
     *     // ... filter to delete one PaymentPlan
     *   }
     * })
     * 
     */
    delete<T extends PaymentPlanDeleteArgs>(args: SelectSubset<T, PaymentPlanDeleteArgs<ExtArgs>>): Prisma__PaymentPlanClient<$Result.GetResult<Prisma.$PaymentPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentPlan.
     * @param {PaymentPlanUpdateArgs} args - Arguments to update one PaymentPlan.
     * @example
     * // Update one PaymentPlan
     * const paymentPlan = await prisma.paymentPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentPlanUpdateArgs>(args: SelectSubset<T, PaymentPlanUpdateArgs<ExtArgs>>): Prisma__PaymentPlanClient<$Result.GetResult<Prisma.$PaymentPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentPlans.
     * @param {PaymentPlanDeleteManyArgs} args - Arguments to filter PaymentPlans to delete.
     * @example
     * // Delete a few PaymentPlans
     * const { count } = await prisma.paymentPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentPlanDeleteManyArgs>(args?: SelectSubset<T, PaymentPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentPlans
     * const paymentPlan = await prisma.paymentPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentPlanUpdateManyArgs>(args: SelectSubset<T, PaymentPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentPlans and returns the data updated in the database.
     * @param {PaymentPlanUpdateManyAndReturnArgs} args - Arguments to update many PaymentPlans.
     * @example
     * // Update many PaymentPlans
     * const paymentPlan = await prisma.paymentPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentPlans and only return the `id`
     * const paymentPlanWithIdOnly = await prisma.paymentPlan.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentPlan.
     * @param {PaymentPlanUpsertArgs} args - Arguments to update or create a PaymentPlan.
     * @example
     * // Update or create a PaymentPlan
     * const paymentPlan = await prisma.paymentPlan.upsert({
     *   create: {
     *     // ... data to create a PaymentPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentPlan we want to update
     *   }
     * })
     */
    upsert<T extends PaymentPlanUpsertArgs>(args: SelectSubset<T, PaymentPlanUpsertArgs<ExtArgs>>): Prisma__PaymentPlanClient<$Result.GetResult<Prisma.$PaymentPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPlanCountArgs} args - Arguments to filter PaymentPlans to count.
     * @example
     * // Count the number of PaymentPlans
     * const count = await prisma.paymentPlan.count({
     *   where: {
     *     // ... the filter for the PaymentPlans we want to count
     *   }
     * })
    **/
    count<T extends PaymentPlanCountArgs>(
      args?: Subset<T, PaymentPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentPlanAggregateArgs>(args: Subset<T, PaymentPlanAggregateArgs>): Prisma.PrismaPromise<GetPaymentPlanAggregateType<T>>

    /**
     * Group by PaymentPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPlanGroupByArgs} args - Group by arguments.
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
      T extends PaymentPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentPlanGroupByArgs['orderBy'] }
        : { orderBy?: PaymentPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentPlan model
   */
  readonly fields: PaymentPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PaymentPlan model
   */
  interface PaymentPlanFieldRefs {
    readonly id: FieldRef<"PaymentPlan", 'String'>
    readonly name: FieldRef<"PaymentPlan", 'String'>
    readonly description: FieldRef<"PaymentPlan", 'String'>
    readonly monthlyPrice: FieldRef<"PaymentPlan", 'String'>
    readonly maxProjectCount: FieldRef<"PaymentPlan", 'Int'>
    readonly maxTeamMemberCount: FieldRef<"PaymentPlan", 'Int'>
    readonly isCustomSubdomainIncluded: FieldRef<"PaymentPlan", 'Boolean'>
    readonly isEmbeddableFeedbackWidgetIncluded: FieldRef<"PaymentPlan", 'Boolean'>
    readonly isCustomHostnameIncluded: FieldRef<"PaymentPlan", 'Boolean'>
    readonly tag: FieldRef<"PaymentPlan", 'String'>
    readonly sortIndex: FieldRef<"PaymentPlan", 'Int'>
    readonly stripePricingTableId: FieldRef<"PaymentPlan", 'String'>
    readonly stripePublishableKey: FieldRef<"PaymentPlan", 'String'>
    readonly createdAt: FieldRef<"PaymentPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentPlan findUnique
   */
  export type PaymentPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlan
     */
    select?: PaymentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlan
     */
    omit?: PaymentPlanOmit<ExtArgs> | null
    /**
     * Filter, which PaymentPlan to fetch.
     */
    where: PaymentPlanWhereUniqueInput
  }

  /**
   * PaymentPlan findUniqueOrThrow
   */
  export type PaymentPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlan
     */
    select?: PaymentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlan
     */
    omit?: PaymentPlanOmit<ExtArgs> | null
    /**
     * Filter, which PaymentPlan to fetch.
     */
    where: PaymentPlanWhereUniqueInput
  }

  /**
   * PaymentPlan findFirst
   */
  export type PaymentPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlan
     */
    select?: PaymentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlan
     */
    omit?: PaymentPlanOmit<ExtArgs> | null
    /**
     * Filter, which PaymentPlan to fetch.
     */
    where?: PaymentPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPlans to fetch.
     */
    orderBy?: PaymentPlanOrderByWithRelationInput | PaymentPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentPlans.
     */
    cursor?: PaymentPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentPlans.
     */
    distinct?: PaymentPlanScalarFieldEnum | PaymentPlanScalarFieldEnum[]
  }

  /**
   * PaymentPlan findFirstOrThrow
   */
  export type PaymentPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlan
     */
    select?: PaymentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlan
     */
    omit?: PaymentPlanOmit<ExtArgs> | null
    /**
     * Filter, which PaymentPlan to fetch.
     */
    where?: PaymentPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPlans to fetch.
     */
    orderBy?: PaymentPlanOrderByWithRelationInput | PaymentPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentPlans.
     */
    cursor?: PaymentPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentPlans.
     */
    distinct?: PaymentPlanScalarFieldEnum | PaymentPlanScalarFieldEnum[]
  }

  /**
   * PaymentPlan findMany
   */
  export type PaymentPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlan
     */
    select?: PaymentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlan
     */
    omit?: PaymentPlanOmit<ExtArgs> | null
    /**
     * Filter, which PaymentPlans to fetch.
     */
    where?: PaymentPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPlans to fetch.
     */
    orderBy?: PaymentPlanOrderByWithRelationInput | PaymentPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentPlans.
     */
    cursor?: PaymentPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPlans.
     */
    skip?: number
    distinct?: PaymentPlanScalarFieldEnum | PaymentPlanScalarFieldEnum[]
  }

  /**
   * PaymentPlan create
   */
  export type PaymentPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlan
     */
    select?: PaymentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlan
     */
    omit?: PaymentPlanOmit<ExtArgs> | null
    /**
     * The data needed to create a PaymentPlan.
     */
    data: XOR<PaymentPlanCreateInput, PaymentPlanUncheckedCreateInput>
  }

  /**
   * PaymentPlan createMany
   */
  export type PaymentPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentPlans.
     */
    data: PaymentPlanCreateManyInput | PaymentPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentPlan createManyAndReturn
   */
  export type PaymentPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlan
     */
    select?: PaymentPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlan
     */
    omit?: PaymentPlanOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentPlans.
     */
    data: PaymentPlanCreateManyInput | PaymentPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentPlan update
   */
  export type PaymentPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlan
     */
    select?: PaymentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlan
     */
    omit?: PaymentPlanOmit<ExtArgs> | null
    /**
     * The data needed to update a PaymentPlan.
     */
    data: XOR<PaymentPlanUpdateInput, PaymentPlanUncheckedUpdateInput>
    /**
     * Choose, which PaymentPlan to update.
     */
    where: PaymentPlanWhereUniqueInput
  }

  /**
   * PaymentPlan updateMany
   */
  export type PaymentPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentPlans.
     */
    data: XOR<PaymentPlanUpdateManyMutationInput, PaymentPlanUncheckedUpdateManyInput>
    /**
     * Filter which PaymentPlans to update
     */
    where?: PaymentPlanWhereInput
    /**
     * Limit how many PaymentPlans to update.
     */
    limit?: number
  }

  /**
   * PaymentPlan updateManyAndReturn
   */
  export type PaymentPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlan
     */
    select?: PaymentPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlan
     */
    omit?: PaymentPlanOmit<ExtArgs> | null
    /**
     * The data used to update PaymentPlans.
     */
    data: XOR<PaymentPlanUpdateManyMutationInput, PaymentPlanUncheckedUpdateManyInput>
    /**
     * Filter which PaymentPlans to update
     */
    where?: PaymentPlanWhereInput
    /**
     * Limit how many PaymentPlans to update.
     */
    limit?: number
  }

  /**
   * PaymentPlan upsert
   */
  export type PaymentPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlan
     */
    select?: PaymentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlan
     */
    omit?: PaymentPlanOmit<ExtArgs> | null
    /**
     * The filter to search for the PaymentPlan to update in case it exists.
     */
    where: PaymentPlanWhereUniqueInput
    /**
     * In case the PaymentPlan found by the `where` argument doesn't exist, create a new PaymentPlan with this data.
     */
    create: XOR<PaymentPlanCreateInput, PaymentPlanUncheckedCreateInput>
    /**
     * In case the PaymentPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentPlanUpdateInput, PaymentPlanUncheckedUpdateInput>
  }

  /**
   * PaymentPlan delete
   */
  export type PaymentPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlan
     */
    select?: PaymentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlan
     */
    omit?: PaymentPlanOmit<ExtArgs> | null
    /**
     * Filter which PaymentPlan to delete.
     */
    where: PaymentPlanWhereUniqueInput
  }

  /**
   * PaymentPlan deleteMany
   */
  export type PaymentPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentPlans to delete
     */
    where?: PaymentPlanWhereInput
    /**
     * Limit how many PaymentPlans to delete.
     */
    limit?: number
  }

  /**
   * PaymentPlan without action
   */
  export type PaymentPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPlan
     */
    select?: PaymentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPlan
     */
    omit?: PaymentPlanOmit<ExtArgs> | null
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


  export const PaymentPlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    monthlyPrice: 'monthlyPrice',
    maxProjectCount: 'maxProjectCount',
    maxTeamMemberCount: 'maxTeamMemberCount',
    isCustomSubdomainIncluded: 'isCustomSubdomainIncluded',
    isEmbeddableFeedbackWidgetIncluded: 'isEmbeddableFeedbackWidgetIncluded',
    isCustomHostnameIncluded: 'isCustomHostnameIncluded',
    tag: 'tag',
    sortIndex: 'sortIndex',
    stripePricingTableId: 'stripePricingTableId',
    stripePublishableKey: 'stripePublishableKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentPlanScalarFieldEnum = (typeof PaymentPlanScalarFieldEnum)[keyof typeof PaymentPlanScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PaymentPlanWhereInput = {
    AND?: PaymentPlanWhereInput | PaymentPlanWhereInput[]
    OR?: PaymentPlanWhereInput[]
    NOT?: PaymentPlanWhereInput | PaymentPlanWhereInput[]
    id?: StringFilter<"PaymentPlan"> | string
    name?: StringFilter<"PaymentPlan"> | string
    description?: StringFilter<"PaymentPlan"> | string
    monthlyPrice?: StringFilter<"PaymentPlan"> | string
    maxProjectCount?: IntFilter<"PaymentPlan"> | number
    maxTeamMemberCount?: IntFilter<"PaymentPlan"> | number
    isCustomSubdomainIncluded?: BoolFilter<"PaymentPlan"> | boolean
    isEmbeddableFeedbackWidgetIncluded?: BoolFilter<"PaymentPlan"> | boolean
    isCustomHostnameIncluded?: BoolFilter<"PaymentPlan"> | boolean
    tag?: StringNullableFilter<"PaymentPlan"> | string | null
    sortIndex?: IntFilter<"PaymentPlan"> | number
    stripePricingTableId?: StringFilter<"PaymentPlan"> | string
    stripePublishableKey?: StringFilter<"PaymentPlan"> | string
    createdAt?: DateTimeFilter<"PaymentPlan"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentPlan"> | Date | string
  }

  export type PaymentPlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    monthlyPrice?: SortOrder
    maxProjectCount?: SortOrder
    maxTeamMemberCount?: SortOrder
    isCustomSubdomainIncluded?: SortOrder
    isEmbeddableFeedbackWidgetIncluded?: SortOrder
    isCustomHostnameIncluded?: SortOrder
    tag?: SortOrderInput | SortOrder
    sortIndex?: SortOrder
    stripePricingTableId?: SortOrder
    stripePublishableKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentPlanWhereInput | PaymentPlanWhereInput[]
    OR?: PaymentPlanWhereInput[]
    NOT?: PaymentPlanWhereInput | PaymentPlanWhereInput[]
    name?: StringFilter<"PaymentPlan"> | string
    description?: StringFilter<"PaymentPlan"> | string
    monthlyPrice?: StringFilter<"PaymentPlan"> | string
    maxProjectCount?: IntFilter<"PaymentPlan"> | number
    maxTeamMemberCount?: IntFilter<"PaymentPlan"> | number
    isCustomSubdomainIncluded?: BoolFilter<"PaymentPlan"> | boolean
    isEmbeddableFeedbackWidgetIncluded?: BoolFilter<"PaymentPlan"> | boolean
    isCustomHostnameIncluded?: BoolFilter<"PaymentPlan"> | boolean
    tag?: StringNullableFilter<"PaymentPlan"> | string | null
    sortIndex?: IntFilter<"PaymentPlan"> | number
    stripePricingTableId?: StringFilter<"PaymentPlan"> | string
    stripePublishableKey?: StringFilter<"PaymentPlan"> | string
    createdAt?: DateTimeFilter<"PaymentPlan"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentPlan"> | Date | string
  }, "id">

  export type PaymentPlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    monthlyPrice?: SortOrder
    maxProjectCount?: SortOrder
    maxTeamMemberCount?: SortOrder
    isCustomSubdomainIncluded?: SortOrder
    isEmbeddableFeedbackWidgetIncluded?: SortOrder
    isCustomHostnameIncluded?: SortOrder
    tag?: SortOrderInput | SortOrder
    sortIndex?: SortOrder
    stripePricingTableId?: SortOrder
    stripePublishableKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentPlanCountOrderByAggregateInput
    _avg?: PaymentPlanAvgOrderByAggregateInput
    _max?: PaymentPlanMaxOrderByAggregateInput
    _min?: PaymentPlanMinOrderByAggregateInput
    _sum?: PaymentPlanSumOrderByAggregateInput
  }

  export type PaymentPlanScalarWhereWithAggregatesInput = {
    AND?: PaymentPlanScalarWhereWithAggregatesInput | PaymentPlanScalarWhereWithAggregatesInput[]
    OR?: PaymentPlanScalarWhereWithAggregatesInput[]
    NOT?: PaymentPlanScalarWhereWithAggregatesInput | PaymentPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentPlan"> | string
    name?: StringWithAggregatesFilter<"PaymentPlan"> | string
    description?: StringWithAggregatesFilter<"PaymentPlan"> | string
    monthlyPrice?: StringWithAggregatesFilter<"PaymentPlan"> | string
    maxProjectCount?: IntWithAggregatesFilter<"PaymentPlan"> | number
    maxTeamMemberCount?: IntWithAggregatesFilter<"PaymentPlan"> | number
    isCustomSubdomainIncluded?: BoolWithAggregatesFilter<"PaymentPlan"> | boolean
    isEmbeddableFeedbackWidgetIncluded?: BoolWithAggregatesFilter<"PaymentPlan"> | boolean
    isCustomHostnameIncluded?: BoolWithAggregatesFilter<"PaymentPlan"> | boolean
    tag?: StringNullableWithAggregatesFilter<"PaymentPlan"> | string | null
    sortIndex?: IntWithAggregatesFilter<"PaymentPlan"> | number
    stripePricingTableId?: StringWithAggregatesFilter<"PaymentPlan"> | string
    stripePublishableKey?: StringWithAggregatesFilter<"PaymentPlan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PaymentPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentPlan"> | Date | string
  }

  export type PaymentPlanCreateInput = {
    id?: string
    name: string
    description: string
    monthlyPrice: string
    maxProjectCount?: number
    maxTeamMemberCount?: number
    isCustomSubdomainIncluded?: boolean
    isEmbeddableFeedbackWidgetIncluded?: boolean
    isCustomHostnameIncluded?: boolean
    tag?: string | null
    sortIndex?: number
    stripePricingTableId: string
    stripePublishableKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentPlanUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    monthlyPrice: string
    maxProjectCount?: number
    maxTeamMemberCount?: number
    isCustomSubdomainIncluded?: boolean
    isEmbeddableFeedbackWidgetIncluded?: boolean
    isCustomHostnameIncluded?: boolean
    tag?: string | null
    sortIndex?: number
    stripePricingTableId: string
    stripePublishableKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: StringFieldUpdateOperationsInput | string
    maxProjectCount?: IntFieldUpdateOperationsInput | number
    maxTeamMemberCount?: IntFieldUpdateOperationsInput | number
    isCustomSubdomainIncluded?: BoolFieldUpdateOperationsInput | boolean
    isEmbeddableFeedbackWidgetIncluded?: BoolFieldUpdateOperationsInput | boolean
    isCustomHostnameIncluded?: BoolFieldUpdateOperationsInput | boolean
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    sortIndex?: IntFieldUpdateOperationsInput | number
    stripePricingTableId?: StringFieldUpdateOperationsInput | string
    stripePublishableKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: StringFieldUpdateOperationsInput | string
    maxProjectCount?: IntFieldUpdateOperationsInput | number
    maxTeamMemberCount?: IntFieldUpdateOperationsInput | number
    isCustomSubdomainIncluded?: BoolFieldUpdateOperationsInput | boolean
    isEmbeddableFeedbackWidgetIncluded?: BoolFieldUpdateOperationsInput | boolean
    isCustomHostnameIncluded?: BoolFieldUpdateOperationsInput | boolean
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    sortIndex?: IntFieldUpdateOperationsInput | number
    stripePricingTableId?: StringFieldUpdateOperationsInput | string
    stripePublishableKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPlanCreateManyInput = {
    id?: string
    name: string
    description: string
    monthlyPrice: string
    maxProjectCount?: number
    maxTeamMemberCount?: number
    isCustomSubdomainIncluded?: boolean
    isEmbeddableFeedbackWidgetIncluded?: boolean
    isCustomHostnameIncluded?: boolean
    tag?: string | null
    sortIndex?: number
    stripePricingTableId: string
    stripePublishableKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: StringFieldUpdateOperationsInput | string
    maxProjectCount?: IntFieldUpdateOperationsInput | number
    maxTeamMemberCount?: IntFieldUpdateOperationsInput | number
    isCustomSubdomainIncluded?: BoolFieldUpdateOperationsInput | boolean
    isEmbeddableFeedbackWidgetIncluded?: BoolFieldUpdateOperationsInput | boolean
    isCustomHostnameIncluded?: BoolFieldUpdateOperationsInput | boolean
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    sortIndex?: IntFieldUpdateOperationsInput | number
    stripePricingTableId?: StringFieldUpdateOperationsInput | string
    stripePublishableKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: StringFieldUpdateOperationsInput | string
    maxProjectCount?: IntFieldUpdateOperationsInput | number
    maxTeamMemberCount?: IntFieldUpdateOperationsInput | number
    isCustomSubdomainIncluded?: BoolFieldUpdateOperationsInput | boolean
    isEmbeddableFeedbackWidgetIncluded?: BoolFieldUpdateOperationsInput | boolean
    isCustomHostnameIncluded?: BoolFieldUpdateOperationsInput | boolean
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    sortIndex?: IntFieldUpdateOperationsInput | number
    stripePricingTableId?: StringFieldUpdateOperationsInput | string
    stripePublishableKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PaymentPlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    monthlyPrice?: SortOrder
    maxProjectCount?: SortOrder
    maxTeamMemberCount?: SortOrder
    isCustomSubdomainIncluded?: SortOrder
    isEmbeddableFeedbackWidgetIncluded?: SortOrder
    isCustomHostnameIncluded?: SortOrder
    tag?: SortOrder
    sortIndex?: SortOrder
    stripePricingTableId?: SortOrder
    stripePublishableKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentPlanAvgOrderByAggregateInput = {
    maxProjectCount?: SortOrder
    maxTeamMemberCount?: SortOrder
    sortIndex?: SortOrder
  }

  export type PaymentPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    monthlyPrice?: SortOrder
    maxProjectCount?: SortOrder
    maxTeamMemberCount?: SortOrder
    isCustomSubdomainIncluded?: SortOrder
    isEmbeddableFeedbackWidgetIncluded?: SortOrder
    isCustomHostnameIncluded?: SortOrder
    tag?: SortOrder
    sortIndex?: SortOrder
    stripePricingTableId?: SortOrder
    stripePublishableKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentPlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    monthlyPrice?: SortOrder
    maxProjectCount?: SortOrder
    maxTeamMemberCount?: SortOrder
    isCustomSubdomainIncluded?: SortOrder
    isEmbeddableFeedbackWidgetIncluded?: SortOrder
    isCustomHostnameIncluded?: SortOrder
    tag?: SortOrder
    sortIndex?: SortOrder
    stripePricingTableId?: SortOrder
    stripePublishableKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentPlanSumOrderByAggregateInput = {
    maxProjectCount?: SortOrder
    maxTeamMemberCount?: SortOrder
    sortIndex?: SortOrder
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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