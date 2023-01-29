#!/usr/bin/env node

import boxen from 'boxen'
import chalk from 'chalk'
// import 'cli-table3' from 'cli-table3';

const data = {
    title: "Arup Basak",
    values: {
        Study: `Computer Science and Business Systems at ${chalk.cyan("NSEC")}\n`,
        links: {
            Github: "https://github.com/arup-basak",
            Instagram: "https://instagram.com/_arupbasak_",
            LinkedIn: "https://www.linkedin.com/basak-arup",
            Twitter: "https://twitter.com/_arupbasak_"
        }
    },
};

let innerText = ""

for (const key in data.values.links) {
    innerText += `${chalk.green(key)}: ${chalk.blueBright(data.values.links[key])}\n`;
}

console.log(
    boxen(
        innerText,
        {
            title: data.title,
            width: 60,
            titleAlignment: 'center',
            padding: 1,
            borderStyle: "double",
            borderColor: "cyan",
            textAlignment: "center",
        }
    )
);