export interface Config {
    testIdAttribute: string;
    asyncWrapper(cb: (...args: any[]) => any): Promise<any>;
    asyncUtilTimeout: number;
}

export interface ConfigFn {
    (existingConfig: Config): Partial<Config>;
}

export function configure(configDelta: Partial<Config> | ConfigFn): void;
