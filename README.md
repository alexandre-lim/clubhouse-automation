# Clubhouse Automation

An [Express](https://expressjs.com/) application to automate process in Clubhouse using their API and Google Spreadsheet.

Write in Google Spreadsheet. Use Google Cloud Platform Cloud Scheduler solution to create a job to get data from spreadsheet that will create epics, stories etc. in Clubhouse.

At the moment there's two main features I needed:

- Create an epic from the title of a book and the chapter's book as stories.
- Create stories from a list of articles.

Next to come: 
- Create stories from a list of videos.

Here's the [spreadsheet template](https://docs.google.com/spreadsheets/d/1oHin1tiFc_mIUD7t2JKsQQYSs9nuDmM3yyffLHODunk/edit?usp=sharing).

> **Note:** If you don't want to deploy in GCP to use the scheduling feature, you can launch the app on local and use `curl` or [Postman](https://www.getpostman.com/) to consume the API.

## What's [Clubhouse](https://clubhouse.io/) ?

> Clubhouse is the first project management platform for software development that brings everyone on every team together to build better products. — Clubhouse

Thinking of **Jira** ? I was thinking the same. But I prefer Clubhouse for it's simplicity.

It's a very good product and I encourage you to check it out. If you're alone or have a small team, they have an amazing [free plan](https://clubhouse.io/blog/free-plan).   

## Why this project ?

I was searching for a tool to help with my productivity to get things done to advance in my personnal goals. I needed smaller and concrete actions to have a step by step process. I needed to store all of that somewhere, follow my progression and the possiblity to share it with friends.

In my daily work, I use Jira and at first I was thinking to go with it. But I wanted something more simple. I heard about Clubhouse and decided to try it. After a period of trial, it met my needs and I was impressed by their product so I started using it more seriously.

I stumbled in a situation where I wanted a book to read as an epic with the chapters's book as stories attached to the epic. If you have a lot of books, it becomes tedious to create the epic then all of the stories and attached it to the epic. Even with the duplication functionality. I needed to find a way to automate that.

And to my surprise, Clubhouse have an [API](https://clubhouse.io/api/rest/v3/) and a good one that made automation possible.

## Then came the project Clubhouse Automation

In the end, I came with the idea to combine with Google Spreadsheet. I write down the book and the chapter in the spreadsheet and I schedule a job to get the data and create the epic and the stories.

I also have a lot of articles to read. I write them in my spreadsheet and a scheduled job will create associated stories. I can even share my spreadsheet for other people to write down an article that might interest me.

For now, I only want these two features but you can have as many features that will suit your needs.

## Development

I started with my template [Express Starter](https://github.com/Wraithraiser/express-starter).

**Warning**: It's not optimized for production YET.

```sh
yarn install
yarn watch
yarn dev
```

## Architecture

![Automation process](./src/assets/clubhouse-automation-process.png)

### License

Clubhouse Automation is [ISC licensed](./LICENSE).
