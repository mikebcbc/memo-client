# Memo

Memo is a full-stack app that enables users to take control of their education. Memo curates content and automatically tracks time spent on that content, and whether it is completed or not using a chrome extension. See statistics showing your range of content, time spent, and more.

## Getting Started

### Install

```
>  git clone https://github.com/mikebcbc/memo-client
>  cd memo-client
>  npm install
```

This repository is the Memo client only. You will need to install the [Memo Server](https://github.com/mikebcbc/memo-server) for full functionality.

### Launching

```
>  npm start
```

### Testing

```
>  npm test
```

## What it Does

### Find Curated Content

Find a range of content form within our dashboard.

### Keep track of time

Use our chrome extension to automatically (zero clicks!) keep track of time spent on our curated content.

### Look over statistics

Read over your statistics and get a better grasp on where you are in your education. Find range of topics, the different sites you've been on, total time spent across all content, and more!

### Find dynamically recommended content

As you learn a topic, Memo will automatically adjust the content it recommends to better fit in with your learning path.

## Technology

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Socket.io](https://socket.io/)
* [JWT (for auth)](https://jwt.io/)
* [Chart.js](http://www.chartjs.org/)