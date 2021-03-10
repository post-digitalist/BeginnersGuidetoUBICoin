<p align="Center">
<img src="public/UBIlogo2.png"  width="150">
</p>
  <p align="center"><i>The price of GAS is too damn high</i></p>

# A Beginner’s Guide to how $UBI makes Ethereum transactions accesible for everyone.

$UBI's mission is to make Ethereum accessible again. For everyone. 
But mass adoption is impossible without education. To advance $UBI's goal, we created a guide into Ethereum for the absolute beginner. Find it on [human.money](human.money).

Built in collaboration with [Democracy Earth](http://democracy.earth), [Kleros](https://github.com/kleros) and the [Proof of Humanity project](https://github.com/Proof-Of-Humanity).

We invite you to propose changes and add new pages as you see fit. Our goal for this project was to create the foundation for a collaborative effort beyond ourselves, so your pull requests are very welcome.

-------

## Repos you'll want to check out

- [$UBI](https://github.com/DemocracyEarth/ubi)
- [Proof of Humanity contract](https://github.com/Proof-Of-Humanity/Proof-Of-Humanity)
- [Proof of Humanity website](https://github.com/Proof-Of-Humanity/proof-of-humanity-web)

-------

## How to run

* Clone this repo
* `yarn install` to install dependencies
* Go to https://data.defipulse.com/ and get an API key for ethgasstation
* Create a `.env` file and put it under the `GAS_API_KEY` key. Like this
 
```env
GAS_API_KEY=your-key-here
```

* Run with `yarn dev`

-------

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
[Panamera](https://noirblancrouge.com/fonts/panamera/#:~:text=Panamera%20is%20a%20modern%20sans%20serif%20font%20family.&text=Panamera%20font%20works%20well%20both,a%20wide%20range%20of%20projects.) 

[Inter](https://github.com/rsms/inter)


