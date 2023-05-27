import winston from "winston";
import moment from "moment";
import momentTimezone from "moment-timezone";

const SESSION = Symbol.for("session");

const timezone = process.env.TIMEZONE;

const sessionData = winston.format(function (info: any) {
  info[SESSION] = { user_id: 0, progress_id: 0 };
  return info;
});

const appendTimestamp = winston.format((info: any, opts: any) => {
  if (opts.tz) info.timestamp = moment().tz(opts.tz).format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS);
  return info;
});

const errorFormat = winston.format.printf((info: any) => {
  return `${info.timestamp} [${info[SESSION].user_id}] [${info[SESSION].progress_id}] ${info.level}: ${info.message} \n\n`;
});

const appFormat = winston.format.printf((info: any) => {
  return `${info.timestamp} [${info[SESSION].user_id}] [${info[SESSION].progress_id}] ${info.level}: ${info.message}`;
});

const errorLoggerTransporter: any[] = [
  new winston.transports.Console({
    level: "info",
    format: winston.format.simple(),
  }),
];
const appLoggerTransporter: any[] = [
    new winston.transports.Console({
        level: 'info',
        format: winston.format.simple(),
    })];
appLoggerTransporter.push(
    new winston.transports.File({
        filename: 'log/app.log',
        level: 'info',
        format: winston.format.simple(),
    }));

export const AppLogger = winston.createLogger({
  format: winston.format.combine(appendTimestamp({ tz: timezone }), sessionData(), appFormat),
  transports: appLoggerTransporter,
});

export const ErrorLogger = winston.createLogger({
  format: winston.format.combine(appendTimestamp({ tz: timezone }), sessionData(), errorFormat),
  transports: errorLoggerTransporter,
});
