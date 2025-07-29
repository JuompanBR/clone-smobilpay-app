
/**
 * This method seperates string that come in Camel notation
 * @param title: String, This represents the string to be formatted
 * @returns formattedString as Eneo Prepaid / Bills
 */
function formatTitle(title: string) {

    let spaced = title.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

    spaced = spaced.replace(/\//g, ' / ');
    spaced = spaced.replace(/\s+/g, ' ').trim();

    return spaced;
};
/**
 * Use this method inside a FC, it returns the responsive fontsize of an element
 * @param fontSize: number, fontsize in pixels in
 * @returns responsiveFontSize: number
 */
function respFont(fontSize: number, fontScale: number) {
    return fontSize / fontScale;
}

export { formatTitle, respFont };

