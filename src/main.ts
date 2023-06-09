import { Actor } from 'apify';
import { CheerioCrawler, CheerioCrawlingContext } from 'crawlee';
import { InputSchema, CrawleeState } from './types.js';
import { categorizeUrls } from './utils.js';
import { router } from './routes/router.js';

await Actor.init();

const {
    startUrls = [
        'https://www.zoot.cz/katalog/17504/zeny',
        'https://www.zoot.cz/katalog/17572/muzi',
        'https://www.zoot.cz/vse-pro-deti',
    ],
    proxyConfiguration: proxyConfig = {
        useApifyProxy: true,
    },
    maxItems = Number.MAX_SAFE_INTEGER,
} = await Actor.getInput<InputSchema>() ?? {};

const proxyConfiguration = await Actor.createProxyConfiguration(proxyConfig);

const crawler = new CheerioCrawler({
    proxyConfiguration,
    requestHandler: router,
    navigationTimeoutSecs: 45,
    preNavigationHooks: [
        async (context: CheerioCrawlingContext) => {
            const { crawler: cheerioCrawler, log } = context;
            const state = await cheerioCrawler.useState<CrawleeState>();

            if (state.remainingItems <= 0) {
                log.info('Reached max items limit, aborting the run');
                await cheerioCrawler.autoscaledPool?.abort();
            }
        },
    ],
});

await crawler.useState<CrawleeState>({
    remainingItems: maxItems,
});

await crawler.run(
    categorizeUrls(startUrls),
);

await Actor.exit();
