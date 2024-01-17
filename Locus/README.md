# beAt

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

beAt user flow

## pages:
  login or signup
  feed
  map
  new post
  search
  account

# feed:
  -List of recent posts from friends and self
  -Post component will allow to like, follow and comment
  -Post component will show likes, followers and comments

# map:
  -Show a map and recent locations of friends
  -Allow to make a new post from location
  -Allow to click on friend's location and see the whole post

# new post
  -Create new post

# search
  -Search to find new friends

# account 
  -See and edit account info(friends, posts or following)


## views
  -Post View
  -Account View

  # Post View
    -Full screen
    -Show all the details of a post(comments, nmbr of likes and nmbr of followers)
    -Actions supported (like, follow and comment)

  # Account View
    -Full Screen
    -Show bigger Profile Pic
    -Show Friends
    -Show Posts
    -Appear when an Account component is clicked


## components
  -Post
  -Account

  # Post
    -A small component showing few details of a particular Post(owner(s) and number of likes, followers and comments)
    -Will appear in feed and account posts
    -Will open Post View if clicked

  # Account
    -A small component showing few details of a particular account(username, small profile and total followers)
    -Will appear in searches and friends or followers
    -Will open Account View if clicked
  