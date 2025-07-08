// config.constants.ts
export const CONFIG_OPTION = 'CONFIG_OPTION';

export interface Config {
  secretKey: string;
  user: string;
}

export const configValue: Config = {
  secretKey: 'abrakadabra',
  user: 'Roshan',
};
