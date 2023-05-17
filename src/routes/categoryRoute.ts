import { CheerioCrawlingContext, CheerioRoot } from 'crawlee';
import {
    LABELS, PAGINATION_PAGES_SEL,
} from '../constants.js';
import { enqueueProductDetails, getCurrentPage } from '../utils.js';

export const categoryRoute = async (context: CheerioCrawlingContext) => {
    const { log, $, request: { url } } = context;

    const pageTitle = $('head title').text();
    log.info(`Opened category page: ${pageTitle}`, { url });

    await enqueueProductDetails(context);
    await enqueueNextPages(context);
};

const enqueueNextPages = async (context: CheerioCrawlingContext) => {
    const { $, enqueueLinks, log, request: { url } } = context;

    const currentPage = getCurrentPage(url);

    if (new URL(url).searchParams.get('p')) {
        log.info(`Opened page ${currentPage}, not enqueueing next pages.
        If you want to crawl all category pages, remove page parameter 'p=${currentPage}' from your start URL.`, { url });
        return;
    }

    const nextPageUrls = buildNextPageUrls($);

    const { processedRequests } = await enqueueLinks({
        urls: nextPageUrls,
        label: LABELS.PAGE,
    });

    const enqueuedPages = processedRequests.filter((req) => !req.wasAlreadyPresent);

    const lastPage = currentPage + enqueuedPages.length;

    log.info(
        `Enqueued ${enqueuedPages.length} next product pages${enqueuedPages.length > 0 ? ` (2-${lastPage})` : ''}`,
        { url },
    );
};

const buildNextPageUrls = ($: CheerioRoot) : string[] => {
    const totalPages = parseTotalPagesCount($);

    const examplePageRelPaths = $(PAGINATION_PAGES_SEL).map(
        (_i, el) => $(el).attr('href') || '',
    );

    const lastRelPath = examplePageRelPaths[examplePageRelPaths.length - 1];
    const examplePageLink = `https://www.zoot.cz${lastRelPath}`;

    const nextPageUrls: string[] = [];

    for (let i = 2; i <= totalPages; i++) {
        const nextPageUrl = examplePageLink.replace(/stranka\/\d+/i, `stranka/${i}`);

        nextPageUrls.push(nextPageUrl.toString());
    }

    return nextPageUrls;
};

const parseTotalPagesCount = ($: CheerioRoot) : number => {
    const paginationPages = $(PAGINATION_PAGES_SEL).map((_i, el) => {
        const page = $(el).attr('data-number') || '-1';
        return parseInt(page, 10);
    });

    return Math.max(...paginationPages);
};
