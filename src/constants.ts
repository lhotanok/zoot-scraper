export const LABELS = {
    CATEGORY: 'CATEGORY',
    PAGE: 'PAGE',
    DETAIL: 'DETAIL',
};

export const PRODUCT_DETAIL_URL_REGEX = /\/(polozka|articol|detaliu)/i;

const CZ_SK_PRODUCT_LINKS_SEL = 'h3.b-product__title a[href^="/polozka"]';
const RO_PRODUCT_LINKS_SEL = '.product__link[href]';

export const PRODUCT_LINKS_SEL = [
    CZ_SK_PRODUCT_LINKS_SEL,
    RO_PRODUCT_LINKS_SEL,
].join(' , ');

const CZ_SK_PAGINATION_PAGES_SEL = '.pagination__item [href][data-number][data-test^="pagination__page"]';
const RO_PAGINATION_PAGES_SEL = '.pagination__jump[href]';

export const PAGINATION_PAGES_SEL = [
    CZ_SK_PAGINATION_PAGES_SEL,
    RO_PAGINATION_PAGES_SEL,
].join(' , ');

const CZ_SK_PRICE_CURRENCY_SEL = '#buyWidget [itemprop="priceCurrency"][content]';
const RO_PRICE_CURRENCY_SEL = '.product__price s';

export const PRICE_CURRENCY_SEL = [
    CZ_SK_PRICE_CURRENCY_SEL,
    RO_PRICE_CURRENCY_SEL,
].join(' , ');

const CZ_SK_PRICE_SEL = '#buyWidget [itemprop="price"][content]';
const RO_PRICE_SEL = '.c-product-price__price [content] , .product-detail__price span[content]';

export const PRICE_SEL = [
    CZ_SK_PRICE_SEL,
    RO_PRICE_SEL,
].join(' , ');

export const CURRENT_BEST_FORMATTED_PRICE_SEL = '.price--detail .price__extra strong , .c-product-price__price strong';
export const CURRENT_DISCOUNTED_PRICE_SEL = '.price--detail .price__discounted';

const CZ_SK_ORIGINAL_FORMATTED_PRICE_SEL = '.price--detail .price__value strong , .price--detail .price__original';
const RO_ORIGINAL_FORMATTED_PRICE_SEL = '.c-product-price__price-original s , .product-detail__price s';

export const ORIGINAL_FORMATTED_PRICE_SEL = [
    CZ_SK_ORIGINAL_FORMATTED_PRICE_SEL,
    RO_ORIGINAL_FORMATTED_PRICE_SEL,
].join(' , ');

const CZ_SK_SALE_CODE_SEL = '[data-add-global-sale-code-target="codeHandle"]';
const RO_SALE_CODE_SEL = '#add-cart-code';

export const SALE_CODE_SEL = [
    CZ_SK_SALE_CODE_SEL,
    RO_SALE_CODE_SEL,
].join(' , ');

const CZ_SK_GALLERY_IMAGES_SEL = 'li.b-product-gallery__thumbs-item img[src]  , .b-product-gallery__item a[href]';
const RO_GALLERY_IMAGES_SEL = '.product-image__thumb[href]';

export const GALLERY_IMAGES_SEL = [
    CZ_SK_GALLERY_IMAGES_SEL,
    RO_GALLERY_IMAGES_SEL,
].join(' , ');

const CZ_SK_BREADCRUMBS_SEL = '[data-test="breadcrumb-list"] a[href]';
const RO_BREADCRUMBS_SEL = '.breadcrumb:not(.hidden-md-up) li a[href]';

export const BREADCRUMBS_SEL = [
    CZ_SK_BREADCRUMBS_SEL,
    RO_BREADCRUMBS_SEL,
].join(' , ');

export const DESCRIPTION_SEL = '[data-read-more-target="content"] p';

export const CZ_SK_ATTRIBUTES_SEL = '[data-read-more-target="content"]';
export const RO_ATTRIBUTES_SEL = '#tab-description ul li';

const CZ_SK_SIZES_SEL = '[data-rich-select] select option:not([data-placeholder="true"])';
const RO_SIZES_SEL = '.product-detail__size-select select option:not(.select__prompt)';

export const SIZES_SEL = [
    CZ_SK_SIZES_SEL,
    RO_SIZES_SEL,
].join(' , ');

const CZ_SK_BRAND_SEL = '[data-test="dealDetail__brandLogo"] [href]';
const RO_BRAND_SEL = '.product-detail__brand[href]';

export const BRAND_SEL = [
    CZ_SK_BRAND_SEL,
    RO_BRAND_SEL,
].join(' , ');
