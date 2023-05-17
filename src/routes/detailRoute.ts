import { Actor } from 'apify';
import { CheerioCrawlingContext } from 'crawlee';
import { CrawleeState } from '../types.js';

export const detailRoute = async (context: CheerioCrawlingContext) => {
    const { crawler, request: { url }, $, log } = context;

    const title = $('head title').text();
    log.info(`${title}`, { url });

    const state = await crawler.useState<CrawleeState>();

    if (state.remainingItems <= 0) {
        return;
    }

    state.remainingItems--;

    await Actor.pushData({
        url,
    });
};
