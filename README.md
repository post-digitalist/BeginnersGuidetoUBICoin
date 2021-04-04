<p align="Center">
<img src="public/UBIlogo2.png"  width="150">
</p>
  <p align="center"><i>The government wasn't going to do it.</i></p>

# A Beginner’s Guide to how $UBI 

*$UBI* is an Ethereum-based Universal Basic Income solution, for the benefit of all humanity.
This guide aims to introduce newcomers to both $ETH and $UBI.

Built in collaboration with [Democracy Earth](http://democracy.earth), [Kleros](https://github.com/kleros) and the [Proof of Humanity project](https://github.com/Proof-Of-Humanity).


## Repos you'll want to check out

- [$UBI](https://github.com/DemocracyEarth/ubi)
- [Proof of Humanity contract](https://github.com/Proof-Of-Humanity/Proof-Of-Humanity)
- [Proof of Humanity website](https://github.com/Proof-Of-Humanity/proof-of-humanity-web)

## Learn more
- [Proof of Humanity](http://proofofhumanity.id/)
- [Proof of Humanity Forums](https://gov.proofofhumanity.id/)
- 
## How to run

* Clone this repo
* `yarn install` to install dependencies
* Go to https://data.defipulse.com/ and get an API key for ethgasstation
* Create a `.env` file and put it under the `GAS_API_KEY` key. Like this
 
```env
GAS_API_KEY=your-key-here
```

* Run with `yarn dev`



## How to add a new page

* Navigate to the `content` folder
* Click on `add file > create new file`
* Create a file with the tilte (NUMBER)(SOMETHING DESCRIPTIVE).md. For instance, if the last available file in the folder is titled 5HOWTOOBTAINUBI.md, title your document something like 6LIQUIDITYPOOLS.md 
* Create the front matter with the following format:
 ```
 ---
 title:
 id:
 ---
 ```
 The `id` will be your page's slug.
 * Write the content in markdown
 * Click on `Propose new file`

## Credits

### Fonts 

- [Panamera](https://noirblancrouge.com/fonts/panamera/#:~:text=Panamera%20is%20a%20modern%20sans%20serif%20font%20family.&text=Panamera%20font%20works%20well%20both,a%20wide%20range%20of%20projects.) 

- [Inter](https://github.com/rsms/inter)


