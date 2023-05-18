# Extract Product Data with Zoot Scraper

Zoot Scraper is an Apify actor that allows you to extract data from Zoot, a popular fashion website in Czech Republic, Slovakia, and Romania. With this scraper, you can extract various data attributes from any product on Zoot's website. Whether you want to extract products based on a specific category or provide direct product URLs, Zoot Scraper has got you covered.

Let's explore an example product to get a glimpse of the collected data:

**🔗 Product URL**: [Product URL](https://www.zoot.cz/polozka/2955680/saty-french-connection-2)

**👗 Product name**: Šaty French Connection

**🏷️ Brand**: [French Connection](https://www.zoot.cz/znacka/15105/french-connection)

**🌐 Breadcrumbs**:

- [Šaty](https://www.zoot.cz/kategorie/22911/zeny/saty) > [Šaty na denní nošení](https://www.zoot.cz/kategorie/22926/zeny/saty/saty-na-denni-noseni)

**🖼️ Thumbnail**:

<img src="https://image.zoot.cz/cache2/fit/954x1281/000/000/007/677/7677270.jpeg" alt="Thumbnail" style="max-width: 250px; float: left; margin-right: 100%; margin-bottom: 1%">

**💰 Price**: 3 119 Kč (original price: 6 249 Kč, extra discount code: `20NAZOOT`)

**📏 Available Sizes**:

- S
- M
- L (Poslední kousek!)

**🔍 Attributes**:

- **Barva**: růžová, bílá
- **Vzor**: květovaný
- **Délka**: ke kolenům
- **Zapínání**: zip
- **Modelka měří**: 172 cm
- **Modelka váží**: 49 kg
- **Modelka má na sobě velikost**: XS

This example showcases the data extracted from a specific product using Zoot Scraper. The scraper can be utilized to extract data for any product available on Zoot's website. You have the flexibility to download the extracted data in various formats, including JSON, CSV, HTML, or XML. Here's an example of the JSON output corresponding to the product mentioned above:

```json
{
	"url": "https://www.zoot.cz/polozka/2955680/saty-french-connection-2",
	"name": "Šaty French Connection",
	"priceCurrency": "czk",
	"currentBestPrice": {
		"value": 3119,
		"formattedPrice": "3 119 Kč"
	},
	"originalPrice": {
		"value": 6249,
		"formattedPrice": "6 249 Kč"
	},
	"saleCode": "20NAZOOT",
	"thumbnail": "https://image.zoot.cz/cache2/fit/1908x2562/000/000/007/677/7677270.jpeg",
	"images": [
		"https://image.zoot.cz/cache2/fit/1908x2562/000/000/007/677/7677270.jpeg",
		"https://image.zoot.cz/cache2/fit/1908x2562/000/000/007/677/7677273.jpeg",
		"https://image.zoot.cz/cache2/fit/1908x2562/000/000/007/677/7677276.jpeg",
		"https://image.zoot.cz/cache2/fit/1908x2562/000/000/007/677/7677279.jpeg"
	],
	"brand": {
		"link": "https://www.zoot.cz/znacka/15105/french-connection",
		"logo": "https://image.zoot.cz/cache2/scale/150x40/center/000/000/000/418/418024.png"
	},
	"breadcrumbs": [
		{
			"text": "Šaty",
			"url": "https://www.zoot.cz/kategorie/22911/zeny/saty"
		},
		{
			"text": "Šaty na denní nošení",
			"url": "https://www.zoot.cz/kategorie/22926/zeny/saty/saty-na-denni-noseni"
		}
	],
	"description": null,
	"attributes": [
		{
			"key": "Barva",
			"value": "růžová, bílá"
		},
		{
			"key": "Vzor",
			"value": "květovaný"
		},
		{
			"key": "Délka",
			"value": "ke kolenům"
		},
		{
			"key": "Zapínání",
			"value": "zip"
		},
		{
			"key": "Modelka měří",
			"value": "172 cm"
		},
		{
			"key": "Modelka váží",
			"value": "49 kg"
		},
		{
			"key": "Modelka má na sobě velikost",
			"value": "XS"
		}
	],
	"sizes": [
		{
			"size": "S",
			"available": true
		},
		{
			"size": "M",
			"available": true
		},
		{
			"size": "L",
			"available": true,
			"note": "Poslední kousek!"
		}
	],
	"available": true
}
```

## Integrations and Zoot Scraper

In addition to its scraping capabilities, Zoot Scraper seamlessly integrates with various cloud services and web apps through the [integrations on the Apify platform](https://apify.com/integrations). You can connect Zoot Scraper with tools like Make, Zapier, Slack, Airbyte, GitHub, Google Sheets, Google Drive, and many more. You can also leverage [webhooks](https://docs.apify.com/integrations/webhooks) to automate actions whenever specific events occur. For example, you can set up notifications whenever Zoot Scraper successfully completes a run.

## Using Zoot Scraper with the Apify API

The Apify API provides programmatic access to the Apify platform, allowing you to manage, schedule, and run Apify actors. With the API, you can access datasets, monitor actor performance, fetch results, create and update versions, and more. If you prefer Node.js, you can utilize the `apify-client` NPM package, while Python users can take advantage of the `apify-client` PyPI package.

For detailed information and code examples, refer to the comprehensive [Apify API reference](https://docs.apify.com/api/v2) documentation or explore the [API tab](https://apify.com/lhotanok/zoot-scraper/api) for practical code samples.

## Other E-commerce Scrapers

If you're interested in scraping data from other e-commerce platforms, Apify offers a range of dedicated scrapers. You can explore fashion-oriented scrapers like [Zalando Scraper](https://apify.com/lhotanok/zalando-scraper), [Asos Scraper](https://apify.com/epctex/asos-scraper), [Forever21 Scraper](https://apify.com/epctex/forever21-scraper), [Trendyol Product Scraper](https://apify.com/yeyo/trendyol-scraper), [Shein Scraper](https://apify.com/natanielsantos/shein-scraper) and more. Or you can utilize e-commerce scrapers with wider range of products such as [Amazon Product Scraper](https://apify.com/junglee/amazon-crawler), [eBay Scraper](https://apify.com/dtrungtin/ebay-items-scraper), [AliExpress Scraper](https://apify.com/epctex/aliexpress-scraper), [Etsy Scraper](https://apify.com/epctex/etsy-scraper), [Walmart Scraper](https://apify.com/epctex/walmart-scraper) or [Allegro Scraper](https://apify.com/lhotanok/allegro-scraper). Simply browse the [E-commerce Category](https://apify.com/store/categories/ecommerce) in the Apify Store to explore more options.
