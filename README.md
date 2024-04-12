# QUOTE MASTER
## Description

Quote and master is a web application that supplies the user with endless random quotes. It also provides a user with some images of quotes.

## Diving into the codes
### Setting up requirements
1. A repository where all your codes will be stored

If you haven't already, please make a github repo and clone it into your local environment. Navigate into your repo directory and open it in text editor which in our case is VS code.

2. HTML file, CSS file and javascript file

Once in vs code proceed to make the three files listed above.

3. An API from where our data will be fetched

4. Confidence and courage in  yourself

This is not a technical requirement but you require a positive mindset while coding

### Writing your codes
1. Write the markup of your page in the html file.
CSS will be used for styling and javascript for functionalities.
2. ### Fetching data from a public API
We will be using data from a public API known as quotable to generate our random quotes.

open your js file and add a fetch function as shown:
 ``` function getQuote(){
    fetch("<your API-url>")
    .then(res => res.json())
    .then(data => {
        quote.innerHTML = `${data.content}`;
        writer.innerHTML =`${data.author}`;
    })
}
```
This is just a snippet of how my code looks like but you are free declare variables to your liking.

Once you perform you fetch, you can munipulate the data to your preference.

## Conclusion
This is just an over view of what is expected of you. If you require detailed guide, feel free to reach out to me.

#### Copyright
&copy;Hidayavanessa2024

