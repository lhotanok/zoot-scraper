import { CheerioCrawlingContext, Request } from 'crawlee';
import { LABELS, PRODUCT_LINKS_SEL } from './constants.js';

export const categorizeUrls = (urls: string[]) : Request[] => {
    const categorizedRequests = urls.map((url) => {
        let label = LABELS.CATEGORY;

        if (url.match(/\/polozka\//i)) {
            label = LABELS.DETAIL;
        }

        return new Request({
            url,
            label,
        });
    });

    return categorizedRequests;
};

export const enqueueProductDetails = async (context: CheerioCrawlingContext) => {
    const { enqueueLinks, request: { url }, log } = context;

    const { processedRequests: reqs } = await enqueueLinks({
        selector: PRODUCT_LINKS_SEL,
        label: LABELS.DETAIL,
        forefront: true,
    });

    const enqueuedReqs = reqs.filter((req) => !req.wasAlreadyPresent);
    log.info(`Enqueued ${enqueuedReqs.length} product detail pages`, { url });
};

export const getCurrentPage = (url: string): number => {
    const currentPageMatches = url.match(/\/stranka\/(\d+)/) || [];

    const currentPageText = currentPageMatches[1] || '1';

    return parseInt(currentPageText, 10);
};
