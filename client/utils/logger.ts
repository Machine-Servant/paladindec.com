type LogFnType =
  | Console['log']
  | Console['debug']
  | Console['error']
  | Console['info']
  | Console['warn'];
enum LogLevel {
  Log = 'log',
  Debug = 'debug',
  Error = 'error',
  Info = 'info',
  Warn = 'warn',
}

export class Logger {
  constructor(private readonly name: string) {}

  private getTimeString(): string {
    const dt = new Date();
    return Intl.DateTimeFormat('en-US', {
      dateStyle: 'short',
      timeStyle: 'short',
    }).format(dt);
  }

  private getMessage(data: unknown, level: LogLevel): string {
    return `[PaladinDeck] - [${this.getTimeString()}]\t${level.toUpperCase()} [${
      this.name
    }] ${data}`;
  }

  private doLog(
    logLevel: LogLevel,
    message: unknown,
    ...optionalParams: unknown[]
  ) {
    let loggerFn: LogFnType;
    switch (logLevel) {
      case LogLevel.Debug:
        loggerFn = console.debug;
        break;
      case LogLevel.Error:
        loggerFn = console.error;
        break;
      case LogLevel.Info:
        loggerFn = console.info;
        break;
      case LogLevel.Warn:
        loggerFn = console.warn;
        break;
      default:
        loggerFn = console.log;
        break;
    }

    if (
      optionalParams &&
      optionalParams.length &&
      optionalParams[0] !== undefined
    ) {
      loggerFn.apply(console, [
        this.getMessage(message, logLevel),
        ...optionalParams,
      ]);
    } else {
      loggerFn.apply(console, [this.getMessage(message, logLevel)]);
    }
  }

  log(message: unknown, ...data: unknown[]) {
    this.doLog(LogLevel.Log, message, data);
  }

  debug(message: unknown, ...data: unknown[]) {
    this.doLog(LogLevel.Debug, message, data);
  }

  error(message: unknown, ...data: unknown[]) {
    this.doLog(LogLevel.Error, message, data);
  }

  info(message: unknown, ...data: unknown[]) {
    this.doLog(LogLevel.Info, message, data);
  }

  warn(message: unknown, ...data: unknown[]) {
    this.doLog(LogLevel.Warn, message, data);
  }
}
