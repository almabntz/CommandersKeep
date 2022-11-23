
![Logo](https://raw.githubusercontent.com/almabntz/CommandersKeep/deckDisplayCard/client/src/components/logo.png)


# Commanders Keep

Commanders keep is a card archiving application for players of the game Magic The Gathering. 
Hobbyist can browse the complete MTG card archive, and make selections to catalog their 
own collection and deck. 

## Demo Site
[CommandersKeep](https://server-yosm.onrender.com/)

Log in using the test user:
| EMAIL               | PASSWORD |
|---------------------|----------|
| CommKeep1@gmail.com | P@ssW0rd |

Search Suggestions:

| Key terms  |
|------------|
| Swamp      |
| Hex        |
| Elesh Norn |

## User Story

- Upon registering, user can browse the catalog by search. 
- User can ADD cards to their collection.
- User can can then ADD to their Deck, or DELETE cards from their collection.
- User can DELETE from their deck.


## Tech Stack
- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **APIs:** Auth0, MTG
- **Design:** Excalidraw, drawSQL

## Wireframe

[![framework.png](https://i.postimg.cc/mDwKvZBv/framework.png)](https://postimg.cc/S2nZ8hXd)

## Schema
**Users table**
| user_id     | firstname | lastname | email             | sub               |
|-------------|-----------|----------|-------------------|-------------------|
| Primary key | text      | text     | character varying | character varying |

**User_collection**
| id          | user_id | name | originaltext      | cmc               | imageurl          | card_id | manacost |
|-------------|---------|------|-------------------|-------------------|-------------------|---------|----------|
| Primary Key | Integer | text | character varying | character varying | character varying | integer | integer  |

**User_deck**
| id          | user_id | card_id | name | cmc               | originaltext      | imageurl          | manacost |
|-------------|---------|---------|------|-------------------|-------------------|-------------------|----------|
| Primary Key | Integer | integer | text | character varying | character varying | character varying | integer  |

## Installation

First, you will need an ```bash
  git clone https://github.com/almabntz/CommandersKeep.git
``` API key. 

Clone my Commanders Keep repository

```bash
  git clone https://github.com/almabntz/CommandersKeep.git
```
Move into my repository

```bash
  cd CommandersKeep
```
Enter my Server and install dependencies
```bash
  cd Server
  npm install
  npm run start
```
Create a .env file inside the server directory, refrence my example [dotevn](https://github.com/almabntz/CommandersKeep/blob/deckDisplayCard/server/dotenv)
```bash
 touch .env
```

next, restore the Postgres Database
```bash
 psql postgres -f db.sql
```

Now into my Client and install dependencies

```bash
  cd Client
  npm install
  npm run start
```
And, you're live!
