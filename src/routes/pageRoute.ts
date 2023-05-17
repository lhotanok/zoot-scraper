import { CheerioCrawlingContext } from 'crawlee';
import { enqueueProductDetails, getCurrentPage } from '../utils.js';

export const pageRoute = async (context: CheerioCrawlingContext) => {
    const { log, $, request: { url } } = context;

    const pageTitle = $('head title').text();
    const pageNumber = getCurrentPage(url);

    log.info(`Opened page ${pageNumber}: ${pageTitle}`, { url });

    await enqueueProductDetails(context);
};
