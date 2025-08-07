
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
};

function validateAmount(amount: string) {
    const testAmount = parseInt(amount);

    return (testAmount >= 100) && (testAmount % 50 == 0);
};

/**
 * Use this method to format an amount as for example 14,500.50
 */
function formatAmount(amount: number, currency: string = 'XAF') {
  return currency + ' ' + amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};



export { formatAmount, formatTitle, respFont, validateAmount };

