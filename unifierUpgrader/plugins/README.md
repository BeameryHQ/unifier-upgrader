# Plugins

<dl>
<dt><a href="#aggregateExperience">aggregateExperience()</a> ⇒ <code>Integer</code></dt>
<dd><p>Aggregate the total months of experience for the all experience objects</p>
</dd>
<dt><a href="#assignIds">assignIds(target, source)</a> ⇒ <code>Array</code></dt>
<dd><p>Group the unique keys of the various fields that can uniquely identify a contact
Those objects are the emails and the links. However, we need to do an extra processing
step for the links to make sure that we exclude any websites or blogs that can be generic
e.g., company website, company blog which do not uniquely identify a contact</p>
</dd>
<dt><a href="#assignUniqueIds">assignUniqueIds(links, emailsKeys)</a> ⇒ <code>Array</code></dt>
<dd><p>Group the unique keys of the various fields that can uniquely identify a contact
Those objects are the emails and the links. However, we need to do an extra processing
step for the links to make sure that we exclude any websites or blogs that can be generic
e.g., company website, company blog which do not uniquely identify a contact</p>
</dd>
<dt><a href="#calculateDuration">calculateDuration(source, target)</a> ⇒ <code>Integer</code></dt>
<dd><p>Calculate the work experience duration in months</p>
</dd>
<dt><a href="#cleanEmail">cleanEmail(source)</a> ⇒ <code>String</code></dt>
<dd><p>normalize an email by converting it into an all lowercase
This will be extended in te future by doing more robust email validation</p>
</dd>
<dt><a href="#concatName">concatName(source)</a> ⇒ <code>String</code></dt>
<dd><p>Clean a string from special characters, HTML tags and trailing dots and commas</p>
</dd>
<dt><a href="#cleanURI">cleanURI(source)</a> ⇒ <code>String</code></dt>
<dd><p>Clean a URI from special characters, HTML tags and trailing dots and commas</p>
</dd>
<dt><a href="#concatName">concatName()</a> ⇒ <code>String</code></dt>
<dd><p>Concatinate a string with one or more other strings separated by a space
Since we might be passing one or more (n) strings, we will use <code>arguments</code></p>
</dd>
<dt><a href="#createURL">createURL(url, source)</a> ⇒ <code>String</code></dt>
<dd><p>Create a url from passed parameteres</p>
</dd>
<dt><a href="#extractName">extractName(fullName, position)</a> ⇒ <code>String/Array</code></dt>
<dd><p>Extract the first name of a contact as it is a required field</p>
</dd>
<dt><a href="#generateCleanId">generateCleanId()</a> ⇒ <code>String</code></dt>
<dd><p>Create an md5 hash based on concatentating passed String Values
Since we might be passing one or more (n) strings, we will use <code>arguments</code></p>
</dd>
<dt><a href="#generateFacebookImageLink">generateFacebookImageLink(Facebook)</a> ⇒ <code>String</code></dt>
<dd><p>Generate a link for the Facebook profile photo based on the facebook ID</p>
</dd>
<dt><a href="#generateFieldsForIndex">generateFieldsForIndex(source)</a> ⇒ <code>Object</code></dt>
<dd><p>Geenrate the fields required to build the search index by ignoring the deleted props and return their value</p>
</dd>
<dt><a href="#generateFullLocationObj">generateFullLocationObj(input)</a> ⇒ <code>Object</code></dt>
<dd><p>Generate a complete &#39;location&#39; object, ensuring that:</p>
<ul>
<li>If there is no &#39;country&#39;, update should be ignored</li>
<li>The &#39;address&#39; property will be updated</li>
<li>Fields that can&#39;t be set by this function ( countryCode, geometry, postalCode ) are set to &#39;null&#39;,
to remove them in case were already present in the contact being updated</li>
</ul>
</dd>
<dt><a href="#generateId">generateId()</a> ⇒ <code>String</code></dt>
<dd><p>Create an md5 hash based on concatentating passed String Values
This function will take multiple arguments that will be extracted via the <code>arguments</code> keyword</p>
</dd>
<dt><a href="#generateIdForLinks">generateIdForLinks(source)</a> ⇒ <code>String</code></dt>
<dd><p>Create an md5 hash based on concatentating passed String Values for links
The function cleans the URIs before creating the MD5 hash</p>
</dd>
<dt><a href="#generateIdFromLanguageCode">generateIdFromLanguageCode(languageCode)</a> ⇒ <code>String</code></dt>
<dd><p>Lanaugage id generation is done on the value of the language. This function will generate the id from a language ISO code
by doing a lookup first on the language valuye then generate the id from that one</p>
</dd>
<dt><a href="#generateUUID">generateUUID()</a> ⇒ <code>String</code></dt>
<dd><p>Create an random UUID value</p>
</dd>
<dt><a href="#getLanguageCode">getLanguageCode(source)</a> ⇒ <code>String</code></dt>
<dd><p>Get the language code and normalize as the well the displayName of the language</p>
</dd>
<dt><a href="#getLanguageFromCode">getLanguageFromCode(source)</a> ⇒ <code>String</code></dt>
<dd><p>Get the language displayName from Code</p>
</dd>
<dt><a href="#getLinkService">getLinkService(source, service)</a> ⇒ <code>String</code></dt>
<dd><p>Identify if the service provider of the link</p>
</dd>
<dt><a href="#getLinkType">getLinkType(source)</a> ⇒ <code>String</code></dt>
<dd><p>Identify if the link is for a social website</p>
</dd>
<dt><a href="#getWorkdaySocialNetwork">getWorkdaySocialNetwork(source)</a> ⇒ <code>String</code></dt>
<dd><p>Returns a normalized social network for workday
The code commented below is due to a unknown issue with workday. The social list is:
{&quot;facebook&quot;: &#39;Facebook&#39;, &quot;linkedin&quot;: &#39;LinkedIn&#39;, &quot;twitter&quot; : &#39;Twitter&#39;, &quot;google&quot;  : &#39;Google+&#39; }</p>
</dd>
<dt><a href="#getWorkdaySocialNetworkAccountURL">getWorkdaySocialNetworkAccountURL(value, type)</a> ⇒ <code>String</code></dt>
<dd><p>Create a url for input as a social network account url in workday
Workday will only allow social links of service linkedin with the url stripped from https:// .. crazy huh !</p>
</dd>
<dt><a href="#normalizeString">normalizeString(source)</a> ⇒ <code>String</code></dt>
<dd><p>normalizeString a string from special characters, HTML tags and trailing dots and commas and lower case it</p>
</dd>
<dt><a href="#parseDate">parseDate(date, month)</a> ⇒ <code>Date</code></dt>
<dd><p>Accepts a string or a Date object as input,
check it&#39;s validity, and either return it as Date object, or returns null</p>
</dd>
<dt><a href="#parseString">parseString(source)</a> ⇒ <code>String</code></dt>
<dd><p>Convert a value into a string by concatenating it with an empty space
Known issue is that we will lose double precision when converting to string (check the tests)</p>
</dd>
<dt><a href="#uniqueArray">uniqueArray(target)</a> ⇒ <code>Array</code></dt>
<dd><p>Ensure array elements are unique</p>
</dd>
</dl>

<a name="aggregateExperience"></a>

## aggregateExperience() ⇒ <code>Integer</code>
Aggregate the total months of experience for the all experience objects
**Params**: <code>Object</code>  experience  The experience object we need to loop in
<a name="assignIds"></a>

## assignIds(target, source) ⇒ <code>Array</code>
Group the unique keys of the various fields that can uniquely identify a contact
Those objects are the emails and the links. However, we need to do an extra processing
step for the links to make sure that we exclude any websites or blogs that can be generic
e.g., company website, company blog which do not uniquely identify a contact

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Array</code> | the target Array we will merge with |
| source | <code>Array</code> | the source array to merge keys with |

<a name="assignUniqueIds"></a>

## assignUniqueIds(links, emailsKeys) ⇒ <code>Array</code>
Group the unique keys of the various fields that can uniquely identify a contact
Those objects are the emails and the links. However, we need to do an extra processing
step for the links to make sure that we exclude any websites or blogs that can be generic
e.g., company website, company blog which do not uniquely identify a contact
**Returns**: <code>Array</code> - The array of unique Keys extracted from unique identifiers (emails and sosial links)

| Param | Type | Description |
| --- | --- | --- |
| links | <code>links</code> | the links object we will iterate on to extract social value urls |
| emailsKeys | <code>emails</code> | one more keys that will be appended separated by a space to the source for the emails objects |

<a name="calculateDuration"></a>

## calculateDuration(source, target) ⇒ <code>Integer</code>
Calculate the work experience duration in months
**Returns**: <code>Integer</code> - the number of months a person has worked in between two dates (start data/end date)

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Date/Object</code> | the startDate of the experience |
| target | <code>Date/Object</code> | the endDate of the experience |

<a name="cleanEmail"></a>

## cleanEmail(source) ⇒ <code>String</code>
normalize an email by converting it into an all lowercase
This will be extended in te future by doing more robust email validation

| Param | Type | Description |
| --- | --- | --- |
| source | <code>String</code> | the string we want to clean out |

<a name="concatName"></a>

## concatName(source) ⇒ <code>String</code>
Clean a string from special characters, HTML tags and trailing dots and commas

| Param | Type | Description |
| --- | --- | --- |
| source | <code>String</code> | the string we want to clean out |

<a name="cleanURI"></a>

## cleanURI(source) ⇒ <code>String</code>
Clean a URI from special characters, HTML tags and trailing dots and commas

| Param | Type | Description |
| --- | --- | --- |
| source | <code>String</code> | the URI we want to clean out |

<a name="concatName"></a>

## concatName() ⇒ <code>String</code>
Concatinate a string with one or more other strings separated by a space
Since we might be passing one or more (n) strings, we will use `arguments`
<a name="createURL"></a>

## createURL(url, source) ⇒ <code>String</code>
Create a url from passed parameteres

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | the main url base |
| source | <code>String</code> | the string to concatinate to the base url |

<a name="extractName"></a>

## extractName(fullName, position) ⇒ <code>String/Array</code>
Extract the first name of a contact as it is a required field
**Returns**: <code>String/Array</code> - Returns the extracted firstName or lastName as Strings or the middleName(s) as an array

| Param | Type | Description |
| --- | --- | --- |
| fullName | <code>String</code> | the contact fullname |
| position | <code>String</code> | the position of the name to extract (firstName, lastName, middleName) |

<a name="generateCleanId"></a>

## generateCleanId() ⇒ <code>String</code>
Create an md5 hash based on concatentating passed String Values
Since we might be passing one or more (n) strings, we will use `arguments`
**Returns**: <code>String</code> - result the concatenated cleaned string
<a name="generateFacebookImageLink"></a>

## generateFacebookImageLink(Facebook) ⇒ <code>String</code>
Generate a link for the Facebook profile photo based on the facebook ID

| Param | Type | Description |
| --- | --- | --- |
| Facebook | <code>String</code> | profile ID |

<a name="generateFieldsForIndex"></a>

## generateFieldsForIndex(source) ⇒ <code>Object</code>
Geenrate the fields required to build the search index by ignoring the deleted props and return their value

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Obejct</code> | the main object that will be processed |

<a name="generateFullLocationObj"></a>

## generateFullLocationObj(input) ⇒ <code>Object</code>
Generate a complete 'location' object, ensuring that:
- If there is no 'country', update should be ignored
- The 'address' property will be updated
- Fields that can't be set by this function ( countryCode, geometry, postalCode ) are set to 'null',
to remove them in case were already present in the contact being updated

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Obejct</code> | the main location object that will be processed |

<a name="generateId"></a>

## generateId() ⇒ <code>String</code>
Create an md5 hash based on concatentating passed String Values
This function will take multiple arguments that will be extracted via the `arguments` keyword
<a name="generateIdForLinks"></a>

## generateIdForLinks(source) ⇒ <code>String</code>
Create an md5 hash based on concatentating passed String Values for links
The function cleans the URIs before creating the MD5 hash

| Param | Type | Description |
| --- | --- | --- |
| source | <code>String</code> | the URI we want to clean out |

<a name="generateIdFromLanguageCode"></a>

## generateIdFromLanguageCode(languageCode) ⇒ <code>String</code>
Lanaugage id generation is done on the value of the language. This function will generate the id from a language ISO code
by doing a lookup first on the language valuye then generate the id from that one

| Param | Type | Description |
| --- | --- | --- |
| languageCode | <code>String</code> | The language code |

<a name="generateUUID"></a>

## generateUUID() ⇒ <code>String</code>
Create an random UUID value
<a name="getLanguageCode"></a>

## getLanguageCode(source) ⇒ <code>String</code>
Get the language code and normalize as the well the displayName of the language
**Returns**: <code>String</code> - the langauage ISO code

| Param | Type | Description |
| --- | --- | --- |
| source | <code>String</code> | the language display name |

<a name="getLanguageFromCode"></a>

## getLanguageFromCode(source) ⇒ <code>String</code>
Get the language displayName from Code

| Param | Type | Description |
| --- | --- | --- |
| source | <code>String</code> | the langauage code |

<a name="getLinkService"></a>

## getLinkService(source, service) ⇒ <code>String</code>
Identify if the service provider of the link

| Param | Type | Description |
| --- | --- | --- |
| source | <code>String</code> | the link URI we wish to examine |
| service | <code>String</code> | the link service name |

<a name="getLinkType"></a>

## getLinkType(source) ⇒ <code>String</code>
Identify if the link is for a social website

| Param | Type | Description |
| --- | --- | --- |
| source | <code>String</code> | the link URI we wish to examine |

<a name="getWorkdaySocialNetwork"></a>

## getWorkdaySocialNetwork(source) ⇒ <code>String</code>
Returns a normalized social network for workday
The code commented below is due to a unknown issue with workday. The social list is:
{"facebook": 'Facebook', "linkedin": 'LinkedIn', "twitter" : 'Twitter', "google"  : 'Google+' }

| Param | Type | Description |
| --- | --- | --- |
| source | <code>String</code> | the social network URI value |

<a name="getWorkdaySocialNetworkAccountURL"></a>

## getWorkdaySocialNetworkAccountURL(value, type) ⇒ <code>String</code>
Create a url for input as a social network account url in workday
Workday will only allow social links of service linkedin with the url stripped from https:// .. crazy huh !

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | the URI of the scoial network * @param {String} service  the service name of the social network |
| type | <code>String</code> | the social network type (social, website) |

<a name="normalizeString"></a>

## normalizeString(source) ⇒ <code>String</code>
normalizeString a string from special characters, HTML tags and trailing dots and commas and lower case it

| Param | Type | Description |
| --- | --- | --- |
| source | <code>String</code> | the string we want to clean out |

<a name="parseDate"></a>

## parseDate(date, month) ⇒ <code>Date</code>
Accepts a string or a Date object as input,
check it's validity, and either return it as Date object, or returns null

| Param | Type | Description |
| --- | --- | --- |
| date | <code>String</code> | the date we wish to transform |
| month | <code>String</code> | the month if found to be added to the parsed date |

<a name="parseString"></a>

## parseString(source) ⇒ <code>String</code>
Convert a value into a string by concatenating it with an empty space
Known issue is that we will lose double precision when converting to string (check the tests)

| Param | Type | Description |
| --- | --- | --- |
| source | <code>String</code> | the string we wish to transform |

<a name="uniqueArray"></a>

## uniqueArray(target) ⇒ <code>Array</code>
Ensure array elements are unique

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Array</code> | the target Array we will ensure its uniqueness |
