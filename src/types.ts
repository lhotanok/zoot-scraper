import { ProxyConfigurationOptions } from 'crawlee';

export type InputSchema = {
    startUrls: string[];
    maxItems?: number;
    proxyConfiguration: ProxyConfigurationOptions;
};

export type CrawleeState = {
    remainingItems: number;
};
